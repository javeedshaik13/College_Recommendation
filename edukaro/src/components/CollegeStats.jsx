import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbar from "./Navbar";

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
  const [loading, setLoading] = useState(true);
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

    setLoading(true);
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
    .then(allData => {
      setData(allData.flat().filter(row => Object.values(row).some(v => v !== "")));
      setLoading(false);
    })
    .catch(err => {
      console.error("Error loading CSV files:", err);
      setLoading(false);
    });
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

  const generateColors = (count) => {
    const colors = [
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 99, 132, 0.8)',
      'rgba(255, 205, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)',
      'rgba(199, 199, 199, 0.8)',
      'rgba(83, 102, 255, 0.8)'
    ];
    return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
  };

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: selectedCategory ? `Cutoff for ${selectedCategory}` : "",
        data: chartValues,
        backgroundColor: generateColors(chartLabels.length),
        borderColor: generateColors(chartLabels.length).map(color => color.replace('0.8', '1')),
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { 
          boxWidth: 15, 
          padding: 15, 
          font: { size: window.innerWidth < 768 ? 10 : 12 },
          usePointStyle: true
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: context => `${context.label}: ${context.parsed.y ?? context.parsed}`,
        },
      },
    },
    scales: chartType !== "Pie" ? {
      x: {
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { font: { size: window.innerWidth < 768 ? 10 : 12 } }
      },
      y: {
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { font: { size: window.innerWidth < 768 ? 10 : 12 } }
      }
    } : {},
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


  return (
    <>
      <Navbar />
      <div className="container-fluid mt-2 mt-md-4 mb-5 px-2 px-md-3">
        {/* Header */}
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <div className="card text-center shadow-lg border-0" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px'}}>
              <div className="card-body py-3 py-md-4">
                <h1 className="h3 h2-md fw-bold text-white mb-2 mb-md-3">
                  📊 College Statistics Dashboard
                </h1>
                <p className="text-white-50 mb-0 small">
                  Analyze college data with interactive charts and filters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm border-0" style={{borderRadius: '12px'}}>
              <div className="card-body p-3 p-md-4">
                <div className="row g-2 g-md-3">
                  <div className="col-6 col-md-3">
                    <label className="form-label fw-bold small text-muted mb-1">
                      <i className="bi bi-building me-1"></i>College
                    </label>
                    <select 
                      className="form-select form-select-sm"
                      value={selectedCollege} 
                      onChange={e => setSelectedCollege(e.target.value)}
                      style={{borderRadius: '8px', fontSize: '0.85rem'}}
                    >
                      {colleges.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="col-6 col-md-3">
                    <label className="form-label fw-bold small text-muted mb-1">
                      <i className="bi bi-diagram-3 me-1"></i>Branch
                    </label>
                    <select 
                      className="form-select form-select-sm"
                      value={selectedBranch} 
                      onChange={e => setSelectedBranch(e.target.value)}
                      style={{borderRadius: '8px', fontSize: '0.85rem'}}
                    >
                      {branches.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div className="col-6 col-md-3">
                    <label className="form-label fw-bold small text-muted mb-1">
                      <i className="bi bi-person-badge me-1"></i>Category
                    </label>
                    <select 
                      className="form-select form-select-sm"
                      value={selectedCategory} 
                      onChange={e => setSelectedCategory(e.target.value)}
                      style={{borderRadius: '8px', fontSize: '0.85rem'}}
                    >
                      <option value="">Choose Category</option>
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>

                  <div className="col-6 col-md-3">
                    <label className="form-label fw-bold small text-muted mb-1">
                      <i className="bi bi-bar-chart me-1"></i>Chart Type
                    </label>
                    <select 
                      className="form-select form-select-sm"
                      value={chartType} 
                      onChange={e => setChartType(e.target.value)}
                      style={{borderRadius: '8px', fontSize: '0.85rem'}}
                    >
                      {chartTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm border-0" style={{borderRadius: '12px'}}>
              <div className="card-body p-3 p-md-4">
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary mb-3" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="text-muted">Loading chart data...</p>
                  </div>
                ) : !selectedCategory ? (
                  <div className="text-center py-5">
                    <i className="bi bi-bar-chart display-1 text-muted mb-3"></i>
                    <h5 className="text-muted">Select a category to view statistics</h5>
                    <p className="text-muted small">Choose filters above to generate your chart</p>
                  </div>
                ) : filteredData.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-exclamation-triangle display-1 text-warning mb-3"></i>
                    <h5 className="text-muted">No data found</h5>
                    <p className="text-muted small">Try adjusting your filters</p>
                  </div>
                ) : (
                  <div style={{ height: window.innerWidth < 768 ? '300px' : '400px', position: 'relative' }}>
                    {renderChart()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        {selectedCategory && filteredData.length > 0 && (
          <div className="row mt-4">
            <div className="col-12">
              <div className="card shadow-sm border-0" style={{borderRadius: '12px'}}>
                <div className="card-body p-3 p-md-4">
                  <h6 className="fw-bold text-muted mb-3">
                    <i className="bi bi-graph-up me-2"></i>Quick Stats
                  </h6>
                  <div className="row g-2">
                    <div className="col-6 col-md-3">
                      <div className="bg-light p-2 p-md-3 rounded text-center">
                        <div className="fw-bold text-primary" style={{fontSize: '1.2rem'}}>
                          {filteredData.length}
                        </div>
                        <small className="text-muted">Total Records</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="bg-light p-2 p-md-3 rounded text-center">
                        <div className="fw-bold text-success" style={{fontSize: '1.2rem'}}>
                          {Math.min(...chartValues.filter(v => v > 0)) || 'N/A'}
                        </div>
                        <small className="text-muted">Min Cutoff</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="bg-light p-2 p-md-3 rounded text-center">
                        <div className="fw-bold text-warning" style={{fontSize: '1.2rem'}}>
                          {Math.max(...chartValues) || 'N/A'}
                        </div>
                        <small className="text-muted">Max Cutoff</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="bg-light p-2 p-md-3 rounded text-center">
                        <div className="fw-bold text-info" style={{fontSize: '1.2rem'}}>
                          {Math.round(chartValues.reduce((a, b) => a + b, 0) / chartValues.length) || 'N/A'}
                        </div>
                        <small className="text-muted">Avg Cutoff</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
