import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "../../Styles/global.css";

const LineChart = () => {
  const chartRef = useRef(null);

  const generateRandomData = () => {
    // Generate an array of random data (replace this with your own logic)
    const data = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 500)
    );
    return data;
  };

  const drawChart = (data) => {
    const svg = d3.select(chartRef.current);
    const width = svg.attr("width");
    const height = svg.attr("height");
    const margin = { top: 30, right: 40, bottom: 30, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.selectAll("*").remove(); // Clear previous drawings

    const barWidth = innerWidth / data.length;
    const borderRadius = 5; // Set the desired border radius

    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([10, innerWidth])
      .padding(0.85); // Adjust padding to control the gap between bars

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([innerHeight, 0]);

    const bars = svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d))
      .attr("fill", "green") // Change the color to green
      .attr("rx", borderRadius) // Set the border radius for the bars
      .attr("ry", borderRadius);

    // Add axes if needed
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(xAxis);

    // const yAxis = d3.axisLeft(yScale);
    // svg.append("g").call(yAxis);
  };

  const handleNewInvoiceClick = () => {
    const newData = generateRandomData();
    drawChart(newData);
  };

  useEffect(() => {
    // Initial render
    const initialData = generateRandomData();
    drawChart(initialData);
  }, []);

  return (
    <div className="chart1">
      <div className="card">
        <div id="card-body-1">
          <h5 className="card-title" id="card-title-1">
            Invoice Owned to you
          </h5>
          <button className="button-card-1" onClick={handleNewInvoiceClick}>
            New Sales Invoice
          </button>
        </div>
        <hr />

        <svg
          ref={chartRef}
          width={820} // Adjust the width to accommodate bars and names
          style={{
            width: "100%",
            borderRadius: "0px",
            marginLeft: "0px",
            border: "none",
            overflow: "hidden",
            display: "flex",
            alignItems: "row",
            justifyContent: "space-between",
            gap: "10px",
          }}
          height={500}
        ></svg>
        <div className="names">
          <h6>Older</h6>
          <h6>Jan 01 - 18</h6>
          <h6>Jan 09 - 16</h6>
          <h6>Jan 17 - 24</h6>
          <h6>Jan 25 - 31</h6>
          <h6>Future</h6>
        </div>
        <br />
      </div>
    </div>
  );
};

export default LineChart;
