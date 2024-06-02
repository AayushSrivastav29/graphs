import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const COLORS = ['#0088FE', '#00C49F'];

const MyPieChart = ({ data }) => {
  // Transform data to count occurrences of TCP and UDP protocols
  const protoCounts = data.reduce((acc, item) => {
    if (item.proto === 'TCP' || item.proto === 'UDP') {
      acc[item.proto] = (acc[item.proto] || 0) + 1;
    }
    return acc;
  }, {});

  const transformedData = Object.keys(protoCounts).map(proto => ({
    name: proto,
    value: protoCounts[proto],
  }));

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 ">
      <h2 className="text-white mb-1 text-2xl">Distribution of protocols:</h2>
      <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={transformedData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {transformedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </ResponsiveContainer>
      </div>
  );
};

export default MyPieChart;