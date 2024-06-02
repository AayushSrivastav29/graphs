// import React from "react";
// import {
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const severityColors = {
//   4: "#ff0000", // High severity
//   3: "#ff8c00", // Medium severity
//   2: "#ffd700", // Low severity
//   1: "#9acd32", // Lower severity
//   0: "#00ff00", // Lowest severity
// };

// const MyScatterChart = ({ data }) => {
//   // Transform data for scatter plot
//   const transformedData = data.map((item) => ({
//     src_port: item.src_port,
//     dest_port: item.dest_port,
//     severity: item.alert?.severity || 0,
//     color: severityColors[item.alert?.severity]
//   }));
//   console.log(transformedData);

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <ScatterChart>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           type="number"
//           dataKey="src_port"
//           name="Source Port"
//           tick={{ fill: "#ffffff" }}
//         />
//         <YAxis
//           type="number"
//           dataKey="dest_port"
//           name="Destination Port"
//           tick={{ fill: "#ffffff" }}
//         />
//         <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//         <Legend />
//         <Scatter
//           name="Alerts"
//           data={transformedData}
//           fill={transformedData.color}
//         >
//           {transformedData.map((entry, index) => (
//             <circle
//               key={`cell-${index}`}
//               cx={entry.cx}
//               cy={entry.cy}
//               r={entry.r}
//               fill={entry.color}
//               stroke={entry.color}
//               fillOpacity={0.7}
//             />
//           ))}
//         </Scatter>
//       </ScatterChart>
//     </ResponsiveContainer>
//   );
// };

// export default MyScatterChart;

// src/components/ScatterPlot.js
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

const severityColors = {
  4: "#ff0000", // High severity
  3: "#ff8c00", // Medium severity
  2: "#ffd700", // Low severity
  1: "#9acd32", // Lower severity
  0: "#00ff00", // Lowest severity
};

const MyScatterChart = ({ data }) => {
  // Transform data for scatter plot
  const transformedData = data.map((item) => ({
    src_port: item.src_port,
    dest_port: item.dest_port,
    severity: item.alert?.severity || 0,
    color: severityColors[item.alert?.severity]
  }));
  console.log(transformedData);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip" style={{ backgroundColor: "#333", padding: "10px", borderRadius: "5px", color: "#fff" }}>
          <p>{`Source Port: ${data.src_port}`}</p>
          <p>{`Destination Port: ${data.dest_port}`}</p>
          <p>{`Severity: ${data.severity}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 ">
      <h2 className="text-white mb-4 text-2xl">Alert severity by source and destination ports:</h2>
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
        <XAxis
          type="number"
          dataKey="src_port"
          name="Source Port"
          tick={{ fill: "#ffffff" }}
        />
        <YAxis
          type="number"
          dataKey="dest_port"
          name="Destination Port"
          tick={{ fill: "#ffffff" }}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Alerts"
          data={transformedData}
          fill="#0088FE"
        >
          {transformedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={severityColors[entry.severity]} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
    </div>
  );
};

export default MyScatterChart;
