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
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [chartType, setChartType] = useState("Bar");

  // Load CSV data
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
          .then(csvText => Papa.parse(csvText, { header: true, skipEmptyLines: true }).data)
      )
    )
    .then(allData => setData(allData.flat().filter(row => Object.values(row).some(v => v !== ""))))
    .catch(err => console.error("Error loading CSV files:", err));
  }, []);

  const colleges = ["All", ...new Set(data.map(d => d["INSTITUTE NAME"]).filter(Boolean))];
  const branches = ["All", ...new Set(data.map(d => d["BRANCH NAME"]).filter(Boolean))];
  const locations = ["All", ...new Set(data.map(d => d["PLACE"]).filter(Boolean))];

  const filteredData = data.filter(item =>
    (selectedCollege === "" || selectedCollege === "All" || item["INSTITUTE NAME"] === selectedCollege) &&
    (selectedBranch === "" || selectedBranch === "All" || item["BRANCH NAME"] === selectedBranch) &&
    (selectedLocation === "" || selectedLocation === "All" || item["PLACE"] === selectedLocation) &&
    selectedCategory
  );

  const shortBranchName = branch => {
    const map = {
      "Computer Science and Engineering": "CSE",
      "Computer Science & Data": "CSD",
      "AI & Data": "AID",
      "Electronics and Communication Engineering": "ECE",
      "Electrical and Electronics Engineering": "EEE",
    };
    return map[branch] || branch.slice(0, 3).toUpperCase();
  };

  const chartLabels = filteredData.map(item => shortBranchName(item["BRANCH NAME"]));
  const chartValues = filteredData.map(item => {
    const val = parseFloat(item[selectedCategory]);
    return isNaN(val) ? 0 : val;
  });

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: selectedCategory ? `Cutoff for ${selectedCategory}` : "",
        data: chartValues,
        backgroundColor: chartLabels.map(() => `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`),
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 20, padding: 10, font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: context => `${context.label}: ${context.parsed.y ?? context.parsed}`,
        },
      },
    },
    scales: chartType === "Histogram" ? { x: { stacked: true }, y: { stacked: true } } : {},
  };

  const renderChart = () => {
    if (!selectedCategory || filteredData.length === 0) return null;
    switch (chartType) {
      case "Pie": return <Pie data={chartData} options={chartOptions} />;
      case "Line": return <Line data={chartData} options={chartOptions} />;
      case "Histogram": return <Bar data={chartData} options={chartOptions} />;
      default: return <Bar data={chartData} options={chartOptions} />;
    }
  };

  const dropdownButtonStyle = {
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #0d6efd",
    backgroundColor: "#0d6efd",
    color: "white",
    cursor: "pointer",
    minWidth: "180px",
    textAlign: "center"
  };

  const filtersRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "30px"
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "50px", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>📊 College Statistics Dashboard</h2>

        {/* Filters row */}
        <div style={filtersRowStyle}>
          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Select College</label>
            <select style={dropdownButtonStyle} value={selectedCollege} onChange={e => setSelectedCollege(e.target.value)}>
              {colleges.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Select Branch</label>
            <select style={dropdownButtonStyle} value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)}>
              {branches.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Select Category</label>
            <select style={dropdownButtonStyle} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="">Choose Category</option>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Select Plot Type</label>
            <select style={dropdownButtonStyle} value={chartType} onChange={e => setChartType(e.target.value)}>
              {chartTypes.map(type => <option key={type}>{type}</option>)}
            </select>
          </div>
        </div>

        {/* Chart */}
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          {renderChart()}
        </div>
      </div>
    </>
  );
}
