// src/components/LineChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format, startOfHour, addMinutes } from "date-fns";

const processData = (data) => {
  const intervals = {};

  data.forEach((item) => {
    const timestamp = new Date(item.timestamp);
    const halfHourInterval = format(
      addMinutes(startOfHour(timestamp), timestamp.getMinutes() < 30 ? 0 : 30),
      "yyyy-MM-dd HH:mm"
    );

    if (!intervals[halfHourInterval]) {
      intervals[halfHourInterval] = 0;
    }
    intervals[halfHourInterval]++;
  });

  return Object.keys(intervals).map((interval) => ({
    time: interval,
    alerts: intervals[interval],
  }));
};

const MyLineChart = ({ data }) => {
  const chartData = processData(data);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 ">
      <h2 className="text-white mb-4 text-2xl">Trend of alerts over time:</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" tick={{ fill: "#ffffff" }} />
          <YAxis tick={{ fill: "#ffffff" }} />
          <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: '10px' }} />
          <Legend />
          <Line type="monotone" dataKey="alerts" stroke="#0088FE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
