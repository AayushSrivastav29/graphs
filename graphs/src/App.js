import React, { useEffect } from "react";
import {data} from "./data";
import MyBarChart from "./Components/MyBarChart.js"
import MyPieChart from "./Components/MyPieChart.js";
import MyHeatMap from "./Components/MyHeatMap.js";

function App() {

  useEffect(()=>{
   // console.log(data);
    console.log( data[0]);
  },[]);

  return (
    <div className=" bg-black w-full h-full text-white ">
      <MyBarChart data={data}/>
      <h3>Count alert categories:</h3>
      <MyPieChart data={data}/>
      <h3>Protocols used:</h3>
      <MyHeatMap data={data}/>
      <h3>Alerts:</h3>
    </div>
  );
}

export default App;
