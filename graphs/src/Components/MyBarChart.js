import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const truncateLabel = (label) => {
  // Split label by spaces and take the first two words
  const words = label.split(" ");
  return words.length > 2 ? words.slice(0, 2).join(" ") + "..." : label;
};

const MyBarChart = ({ data }) => {
  const categoryCounts = data.reduce((acc, item) => {
    if (item.alert && item.alert.category) {
      const category = item.alert.category;
      acc[category] = (acc[category] || 0) + 1;
    }
    return acc;
  }, {});

  const transformedData = Object.keys(categoryCounts).map((category) => ({
    category,
    count: categoryCounts[category],
  }));

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h2 className="text-white mb-4 text-2xl">Alerts across categories:</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={transformedData}>
          <CartesianGrid strokeDasharray="4 4" stroke="#444" />
          <XAxis
            dataKey="category"
            stroke="#ffffff"
            tickFormatter={(value) => truncateLabel(value)}
          />
          <YAxis stroke="#ffffff" />
          <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#444' }} />
          <Legend wrapperStyle={{ color: '#ffffff' }} />
          <Bar dataKey="count" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;



// // src/components/BarChart.js
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const processData = (data) => {
//   const categoryCounts = {};

//   data.forEach((item) => {
//     const category = item.alert.category;
//     if (!categoryCounts[category]) {
//       categoryCounts[category] = 0;
//     }
//     categoryCounts[category]++;
//   });

//   return Object.keys(categoryCounts).map((category) => ({
//     category,
//     count: categoryCounts[category],
//   }));
// };

// const MyBarChart = ({ data }) => {
//   const chartData = processData(data);

//   return (

//       <ResponsiveContainer>
//         <BarChart data={chartData} layout="vertical">
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" tick={{ fill: '#ffffff' }} />
//           <YAxis dataKey="category" type="category" tick={{ fill: '#ffffff' }} width={150} />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>

//   );
// };

// export default MyBarChart;
