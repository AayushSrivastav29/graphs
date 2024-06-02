import React, { useEffect } from "react";
import {data} from "./data";
import MyBarChart from "./Components/MyBarChart.js"
import MyPieChart from "./Components/MyPieChart.js";
// import MyHeatMap from "./Components/MyHeatMap.js";
import MyLineChart from "./Components/MyLineChart.js";
import MyScatterChart from "./Components/MyScatterChart.js";

function App() {

  useEffect(()=>{
   // console.log(data);
    console.log( data[0]);
  },[]);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-5xl flex justify-center m-5 font-semibold	">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg">
          <MyBarChart data={data} />
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <MyPieChart data={data} />
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <MyLineChart data={data} />
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <MyScatterChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
