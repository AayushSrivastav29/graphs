import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
 import CustomTick from "./CustomTick";
// import { data } from "../data.js";

const MyBarChart = ({data}) => {

  console.log(data[0].alert.category);
  const categoryCounts= data.reduce((acc, item)=>{
    //fetch
    if (item.alert && item.alert.category) {
      const category= item.alert.category;
      acc[category] = (acc[category] || 0) + 1;
    }
    return acc; 
  },{});

  const transformedData = Object.keys(categoryCounts).map(category => ({
    category,
    "count": categoryCounts[category],
  }));

  return (
      
      <BarChart width={600} height={300} data={transformedData}>
        <XAxis dataKey="category" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <CartesianGrid stroke="#333" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
     
  );
};

export default MyBarChart;
