import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const LineChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([
    { x: 1, y: 20 },
    { x: 2, y: 40 },
    { x: 3, y: 10 },
    { x: 4, y: 30 },
    { x: 5, y: 50 },
  ]);

  const drawChart = (data) => {
    const svg = d3.select(chartRef.current);
    const width = svg.attr("width");
    const height = svg.attr("height");
    const margin = { top: 10, right: 20, bottom: 10, left: 300 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.selectAll("*").remove(); // Clear previous drawings

    const xScale = d3
      .scaleLinear()
      .domain([1, 5]) // Adjust the domain based on your data
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 50]) // Adjust the domain based on your data
      .range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the data with new values
      const newData = data.map((point) => ({
        x: point.x,
        y: Math.random() * 50, // Generate random values for y
      }));

      setData(newData);
      drawChart(newData);
    }, 3000); // Update every 2 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [data]);

  return (
    <>
      <svg
        ref={chartRef}
        width={840}
        height={200}
        style={{
          marginLeft: "30px",
          marginTop: "20px",
        }}
      ></svg>
      <div className="names">
        <h6>09</h6>
        <h6>10</h6>
        <h6>11</h6>
        <h6>12</h6>
        <h6>13</h6>
        <h6>14</h6>
        <h6>15</h6>
        <h6>16</h6>
        <h6>17</h6>
        <h6>18</h6>
      </div>
    </>
  );
};

export default LineChart;
