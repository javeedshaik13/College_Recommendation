import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  ArcElement, PointElement, LineElement
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  ArcElement, PointElement, LineElement
);

export default function CollegeStats() {
  const categories = [  
    "OC BOYS", "OC GIRLS", "BC_A BOYS", "BC_A GIRLS",
    "BC_B BOYS", "BC_B GIRLS", "BC_C BOYS", "BC_C GIRLS",
    "BC_D BOYS", "BC_D GIRLS", "BC_E BOYS", "BC_E GIRLS",
    "SC BOYS", "SC GIRLS", "ST BOYS", "ST GIRLS",
    "EWS GEN OU", "EWS GIRLS OU"
  ];

  const chartTypes = ["Bar", "Pie", "Line", "Histogram"];

  const [data, setData] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("All");
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("OC BOYS");
  const [chartType, setChartType] = useState("Bar");

  useEffect(() => {
    const files = [
      "/Cleaned-DS/df1_cleaned.csv",
      "/Cleaned-DS/df2_cleaned.csv",
      "/Cleaned-DS/df3_cleaned.csv",
      "/Cleaned-DS/df4_cleaned.csv",
      "/Cleaned-DS/df5_cleaned.csv",
      "/Cleaned-DS/df6_cleaned.csv",
    ];


    Promise.all(
      files.map(file =>
        fetch(file)
          .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.text();
          })
          .then(csvText => {
            const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true }).data;
            console.log(`Loaded data from ${file}:`, parsed.slice(0, 3)); // show first 3 rows as sample
            return parsed;
          })
      )
    ).then(allData => {
      const merged = allData.flat().filter(row => Object.values(row).some(v => v !== ""));
      console.log("Merged data sample:", merged.slice(0, 5));
      setData(merged);
    }).catch(err => console.error("Error loading CSV files:", err));
  }, []);

  const colleges = ["All", ...new Set(data.map(d => d["INSTITUTE NAME"]).filter(Boolean))];
  const branches = ["All", ...new Set(data.map(d => d["BRANCH NAME"]).filter(Boolean))];
  const locations = ["All", ...new Set(data.map(d => d["PLACE"]).filter(Boolean))];

  const filteredData = data.filter(item =>
    (selectedCollege === "All" || item["INSTITUTE NAME"] === selectedCollege) &&
    (selectedBranch === "All" || item["BRANCH NAME"] === selectedBranch) &&
    (selectedLocation === "All" || item["PLACE"] === selectedLocation)
  );

  // console.log("Filtered data sample:", filteredData.slice(0, 5));

  const chartLabels = filteredData.map(item => item["BRANCH NAME"]);
  const chartValues = filteredData.map(item => {
    const val = parseFloat(item[selectedCategory]);
    return isNaN(val) ? 0 : val;
  });

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `Cutoff for ${selectedCategory}`,
        data: chartValues,
        backgroundColor: chartLabels.map(
          () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
        ),
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
      }
    ]
  };

  const renderChart = () => {
    const options = { responsive: true, plugins: { legend: { position: "top" } } };

    switch (chartType) {
      case "Pie":
        return <Pie data={chartData} options={options} />;
      case "Line":
        return <Line data={chartData} options={options} />;
      case "Histogram":
        return <Bar data={chartData} options={{
          ...options,
          scales: { x: { stacked: true }, y: { stacked: true } }
        }} />;
      default:
        return <Bar data={chartData} options={options} />;
    }
  };

  return (
    <>
      <div className="container">
        <h2>📊 College Statistics Dashboard</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px", marginTop: "100px" }}>
          <select value={selectedCollege} onChange={e => setSelectedCollege(e.target.value)}>
            {colleges.map(c => <option key={c}>{c}</option>)}
          </select>

          <select value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)}>
            {branches.map(b => <option key={b}>{b}</option>)}
          </select>

          <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
            {locations.map(l => <option key={l}>{l}</option>)}
          </select>

          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>

          <select value={chartType} onChange={e => setChartType(e.target.value)}>
            {chartTypes.map(type => <option key={type}>{type}</option>)}
          </select>
        </div>

        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          {renderChart()}
        </div>
      </div>
    </>
  );
}
