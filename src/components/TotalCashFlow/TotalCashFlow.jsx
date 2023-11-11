import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "../../Styles/global.css";

const TotalCashFlow = () => {
  const chartRef = useRef(null);

  const generateRandomData = () => {
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

    svg.selectAll("*").remove(); // Clear previous

    const colorScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range(["green", "blue"]); // Set your desired colors here

    const borderRadius = 7; // Set the desired border radius
    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([10, innerWidth])
      .padding(0.85);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([innerHeight, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d))
      .attr("fill", (d, i) => {
        const gradientId = `gradient-${i}`;
        const gradient = svg
          .append("defs")
          .append("linearGradient")
          .attr("id", gradientId)
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "0%");

        gradient
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", colorScale(i));

        gradient
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", colorScale(i + 1));

        return `url(#${gradientId})`;
      })
      .attr("rx", borderRadius)
      .attr("ry", borderRadius);

    // Add axes if needed
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(xAxis);
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
            Total cash flow
          </h5>
          <div id="squarebox1"></div>
          <h6 id="squarebox6">In</h6>
          <div id="squarebox2"></div>
          <h6 id="squarebox62">Out</h6>
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
            gap: "20px",
          }}
          height={400}
        ></svg>
        <div className="names">
          <h6>August</h6>
          <h6>September</h6>
          <h6>October</h6>
          <h6>November</h6>
          <h6>December</h6>
          <h6>January</h6>
        </div>
        <br />
      </div>
    </div>
  );
};

export default TotalCashFlow;
