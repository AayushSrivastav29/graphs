import React, { useEffect, useRef } from 'react';
import heatmap from 'heatmap.js';

const ChartContainer = ({ children }) => (
  <div style={{ margin: '20px' }}>
    {children}
  </div>
);

const MyHeatMap = ({ data }) => {
  const heatmapRef = useRef(null);

  useEffect(() => {
    if (!heatmapRef.current) return;

    const transformedData = data.map(item => ({
      x: new Date(item.timestamp).getTime(),
      y: item.src_ip,
      value: item.alert.severity || 0,
    }));

    const container = heatmapRef.current;
    const instance = heatmap.create({
      container,
      radius: 20,
      blur: 0.75,
      gradient: {
        '.5': 'blue',
        '.8': 'yellow',
        '1': 'red',
      },
    });

    instance.setData({ max: 10, data: transformedData });
  }, [data]);

  return <ChartContainer ref={heatmapRef} />;
};

export default MyHeatMap;

/**
 * const MyHeatMap = ({ data }) => {
    
    const heatmapRef = useRef(null);

  useEffect(() => {
    if (!heatmapRef.current) return;

    const transformedData = data.map(item => ({
      x: new Date(item.timestamp).getTime(),
      y: item.src_ip,
      value: item.alert.severity,
    }));

    const container = heatmapRef.current;
    const instance = heatmap.create({
      container,
      radius: 20,
      blur: 0.75,
      gradient: {
        '.5': 'blue',
        '.8': 'yellow',
        '1': 'red',
      },
    });

    instance.setData({ max: 10, data: transformedData });
  }, [data]);

  return <ChartContainer ref={heatmapRef} />;
    
};

export default MyHeatMap;
 * 
 */