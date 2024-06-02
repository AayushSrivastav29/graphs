import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


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
      <PieChart width={400} height={400}>
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

  );
};

export default MyPieChart;