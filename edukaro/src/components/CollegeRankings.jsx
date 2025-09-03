import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ApiService from '../services/api'

function CollegeRankings() {
  const [colleges, setColleges] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('OC BOYS')
  const [selectedLocation, setSelectedLocation] = useState('All')

  // Sample college data - this will be replaced with real data from backend
  const sampleColleges = [
    {
      id: 1,
      name: "IIIT Hyderabad",
      location: "HYDERABAD",
      type: "Government",
      establishedYear: 1998,
      nirf_rank: 1,
      cutoffs: {
        "OC BOYS": 150,
        "OC GIRLS": 180,
        "BC_A BOYS": 300,
        "BC_A GIRLS": 320
      },
      branches: ["CSE", "ECE", "EEE"],
      fees: 200000,
      logo: "https://cdn.siasat.com/wp-content/uploads/2020/05/IIIT-Hyderabad.jpg",
      rating: 4.8,
      placements: {
        highest: 5000000,
        average: 1800000,
        percentage: 98
      }
    },
    {
      id: 2,
      name: "JNTUH College of Engineering",
      location: "HYDERABAD",
      type: "Government",
      establishedYear: 1965,
      nirf_rank: 2,
      cutoffs: {
        "OC BOYS": 800,
        "OC GIRLS": 900,
        "BC_A BOYS": 1200,
        "BC_A GIRLS": 1300
      },
      branches: ["CSE", "ECE", "MEC", "CIV", "EEE"],
      fees: 150000,
      logo: "https://pbs.twimg.com/profile_images/1559799667856388096/oNNEFVfk_400x400.jpg",
      rating: 4.5,
      placements: {
        highest: 3500000,
        average: 1200000,
        percentage: 85
      }
    },
    {
      id: 3,
      name: "CBIT Hyderabad",
      location: "HYDERABAD",
      type: "Private",
      establishedYear: 1979,
      nirf_rank: 3,
      cutoffs: {
        "OC BOYS": 1200,
        "OC GIRLS": 1400,
        "BC_A BOYS": 1800,
        "BC_A GIRLS": 1900
      },
      branches: ["CSE", "INF", "ECE", "MEC"],
      fees: 400000,
      logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png",
      rating: 4.3,
      placements: {
        highest: 4200000,
        average: 1500000,
        percentage: 90
      }
    },
    {
      id: 4,
      name: "VNR VJIET",
      location: "HYDERABAD",
      type: "Private",
      establishedYear: 1995,
      nirf_rank: 4,
      cutoffs: {
        "OC BOYS": 1500,
        "OC GIRLS": 1700,
        "BC_A BOYS": 2000,
        "BC_A GIRLS": 2100
      },
      branches: ["CSE", "ECE", "EEE", "MEC", "INF"],
      fees: 350000,
      logo: "https://images.shiksha.com/mediadata/images/1747210261phpWUDWnz.jpeg",
      rating: 4.2,
      placements: {
        highest: 3800000,
        average: 1300000,
        percentage: 88
      }
    },
    {
      id: 5,
      name: "Vasavi College of Engineering",
      location: "HYDERABAD",
      type: "Private",
      establishedYear: 1981,
      nirf_rank: 5,
      cutoffs: {
        "OC BOYS": 2000,
        "OC GIRLS": 2200,
        "BC_A BOYS": 2500,
        "BC_A GIRLS": 2600
      },
      branches: ["CSE", "ECE", "EEE", "MEC", "CIV"],
      fees: 380000,
      logo: "https://bajraionline.com/wp-content/uploads/2022/08/Vasavi-College-of-Engineering-logo.gif",
      rating: 4.1,
      placements: {
        highest: 3200000,
        average: 1100000,
        percentage: 82
      }
    },
    {
      id: 6,
      name: "CVR College of Engineering",
      location: "HYDERABAD",
      type: "Private",
      establishedYear: 2001,
      nirf_rank: 6,
      cutoffs: {
        "OC BOYS": 1800,
        "OC GIRLS": 2000,
        "BC_A BOYS": 2300,
        "BC_A GIRLS": 2400
      },
      branches: ["CSE", "ECE", "EEE", "MEC", "INF"],
      fees: 320000,
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cvrh.ibp.jpg",
      rating: 4.0,
      placements: {
        highest: 2800000,
        average: 950000,
        percentage: 80
      }
    },
    {
      id: 7,
      name: "MGIT Hyderabad",
      location: "HYDERABAD",
      type: "Private",
      establishedYear: 1998,
      nirf_rank: 7,
      cutoffs: {
        "OC BOYS": 2500,
        "OC GIRLS": 2700,
        "BC_A BOYS": 3000,
        "BC_A GIRLS": 3100
      },
      branches: ["CSE", "ECE", "EEE", "MEC"],
      fees: 300000,
      logo: "https://www.mgit.ac.in/images/mgit-logo.png",
      rating: 3.9,
      placements: {
        highest: 2500000,
        average: 800000,
        percentage: 75
      }
    },
    {
      id: 8,
      name: "GRIET Hyderabad",
      location: "HYDERABAD",
      type: "Private",
      establishedYear: 1997,
      nirf_rank: 8,
      cutoffs: {
        "OC BOYS": 3000,
        "OC GIRLS": 3200,
        "BC_A BOYS": 3500,
        "BC_A GIRLS": 3600
      },
      branches: ["CSE", "ECE", "EEE", "MEC", "CIV"],
      fees: 280000,
      logo: "https://www.griet.ac.in/images/griet-logo.png",
      rating: 3.8,
      placements: {
        highest: 2200000,
        average: 700000,
        percentage: 70
      }
    }
  ]

  const categories = [
    "OC BOYS", "OC GIRLS", "BC_A BOYS", "BC_A GIRLS",
    "BC_B BOYS", "BC_B GIRLS", "BC_C BOYS", "BC_C GIRLS",
    "BC_D BOYS", "BC_D GIRLS", "BC_E BOYS", "BC_E GIRLS",
    "SC BOYS", "SC GIRLS", "ST BOYS", "ST GIRLS",
    "EWS GEN OU", "EWS GIRLS OU"
  ]

  const locations = ["All", "HYDERABAD", "WARANGAL", "KARIMNAGAR", "NIZAMABAD"]

  useEffect(() => {
    loadCollegeRankings()
  }, [selectedCategory, selectedLocation])

  const loadCollegeRankings = async () => {
    setLoading(true)
    try {
      const response = await ApiService.getCollegeRankings(selectedCategory, selectedLocation)
      
      if (response.rankings && response.rankings.length > 0) {
        // Convert backend data to frontend format
        const formattedColleges = response.rankings.map((college, index) => ({
          id: index + 1,
          name: college.name,
          location: college.location,
          type: college.type || 'Unknown',
          establishedYear: 2000, // Default value
          nirf_rank: index + 1,
          cutoffs: {
            [selectedCategory]: college.cutoff_rank
          },
          branches: college.branches || [],
          fees: Math.floor(Math.random() * 400000) + 100000, // Random fees for demo
          logo: getCollegeLogo(college.name),
          rating: Math.max(3.5, 5.0 - (index * 0.1)),
          placements: {
            highest: Math.floor(Math.random() * 3000000) + 2000000,
            average: Math.floor(Math.random() * 1000000) + 500000,
            percentage: Math.max(70, 95 - (index * 2))
          }
        }))
        setColleges(formattedColleges)
      } else {
        // Fallback to sample data if backend fails
        const sortedColleges = [...sampleColleges].sort((a, b) => {
          const rankA = a.cutoffs[selectedCategory] || 999999
          const rankB = b.cutoffs[selectedCategory] || 999999
          return rankA - rankB
        })
        setColleges(sortedColleges)
      }
    } catch (error) {
      console.error('Failed to load college rankings:', error)
      // Fallback to sample data
      const sortedColleges = [...sampleColleges].sort((a, b) => {
        const rankA = a.cutoffs[selectedCategory] || 999999
        const rankB = b.cutoffs[selectedCategory] || 999999
        return rankA - rankB
      })
      setColleges(sortedColleges)
    } finally {
      setLoading(false)
    }
  }

  const getCollegeLogo = (collegeName) => {
    const logoMap = {
      'IIIT Hyderabad': 'https://cdn.siasat.com/wp-content/uploads/2020/05/IIIT-Hyderabad.jpg',
      'JNTUH College of Engineering': 'https://pbs.twimg.com/profile_images/1559799667856388096/oNNEFVfk_400x400.jpg',
      'CBIT': 'https://upload.wikimedia.org/wikipedia/en/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png',
      'VNR VJIET': 'https://images.shiksha.com/mediadata/images/1747210261phpWUDWnz.jpeg',
      'Vasavi College of Engineering': 'https://bajraionline.com/wp-content/uploads/2022/08/Vasavi-College-of-Engineering-logo.gif',
      'CVR College of Engineering': 'https://upload.wikimedia.org/wikipedia/en/4/4c/Cvrh.ibp.jpg'
    }
    
    for (const [key, logo] of Object.entries(logoMap)) {
      if (collegeName.toLowerCase().includes(key.toLowerCase())) {
        return logo
      }
    }
    
    return 'https://via.placeholder.com/80x80/007bff/ffffff?text=College'
  }

  const filteredColleges = colleges.filter(college => 
    selectedLocation === 'All' || college.location === selectedLocation
  )

  const displayedColleges = showAll ? filteredColleges : filteredColleges.slice(0, 3)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const CollegeCard = ({ college, rank }) => (
    <div className="col-12 mb-4">
      <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
        {rank <= 3 && (
          <div className={`position-absolute top-0 start-0 badge ${
            rank === 1 ? 'bg-warning' : rank === 2 ? 'bg-secondary' : 'bg-danger'
          } rounded-0 rounded-end`} style={{ fontSize: '0.9rem', zIndex: 10 }}>
            #{rank}
          </div>
        )}
        
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-2 text-center mb-3 mb-md-0">
              <img
                src={college.logo}
                alt={`${college.name} Logo`}
                className="img-fluid rounded-circle"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80/007bff/ffffff?text=College'
                }}
              />
              <div className="mt-2">
                <span className="badge bg-primary">NIRF #{college.nirf_rank}</span>
              </div>
            </div>
            
            <div className="col-md-4">
              <h5 className="card-title fw-bold text-primary mb-2">{college.name}</h5>
              <div className="mb-2">
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                <span className="text-muted">{college.location}</span>
              </div>
              <div className="mb-2">
                <i className="bi bi-building text-success me-2"></i>
                <span className="badge bg-light text-dark">{college.type}</span>
                <span className="text-muted ms-2">Est. {college.establishedYear}</span>
              </div>
              <div className="mb-2">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <span className="fw-bold">{college.rating}/5.0</span>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="mb-2">
                <small className="text-muted fw-bold">Cutoff Rank ({selectedCategory}):</small>
                <div className="fs-5 fw-bold text-success">
                  {college.cutoffs[selectedCategory] || 'N/A'}
                </div>
              </div>
              <div className="mb-2">
                <small className="text-muted fw-bold">Annual Fees:</small>
                <div className="fw-bold text-info">
                  {formatCurrency(college.fees)}
                </div>
              </div>
              <div>
                <small className="text-muted fw-bold">Branches:</small>
                <div className="d-flex flex-wrap gap-1 mt-1">
                  {college.branches.slice(0, 3).map(branch => (
                    <span key={branch} className="badge bg-secondary">{branch}</span>
                  ))}
                  {college.branches.length > 3 && (
                    <span className="badge bg-light text-dark">+{college.branches.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="text-center">
                <h6 className="text-muted mb-2">Placements</h6>
                <div className="mb-1">
                  <small className="text-muted">Highest:</small>
                  <div className="fw-bold text-success">
                    {formatCurrency(college.placements.highest)}
                  </div>
                </div>
                <div className="mb-1">
                  <small className="text-muted">Average:</small>
                  <div className="fw-bold text-primary">
                    {formatCurrency(college.placements.average)}
                  </div>
                </div>
                <div className="mb-2">
                  <small className="text-muted">Placement %:</small>
                  <div className="fw-bold text-warning">
                    {college.placements.percentage}%
                  </div>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div 
                    className="progress-bar bg-success" 
                    style={{ width: `${college.placements.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            🏆 Top Engineering Colleges Rankings
          </h1>
          <p className="lead text-muted">
            Discover the best engineering colleges in Telangana based on NIRF rankings, placements, and cutoffs
          </p>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <i className="bi bi-person-badge text-primary me-2"></i>
              Select Category:
            </label>
            <select 
              className="form-select form-select-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ borderRadius: '10px' }}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <i className="bi bi-geo-alt text-danger me-2"></i>
              Filter by Location:
            </label>
            <select 
              className="form-select form-select-lg"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{ borderRadius: '10px' }}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading college rankings...</p>
          </div>
        ) : (
          <>
            {/* Results Info */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="alert alert-info border-0 rounded-3">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  Showing <strong>{displayedColleges.length}</strong> of <strong>{filteredColleges.length}</strong> colleges 
                  for category <strong>{selectedCategory}</strong>
                  {selectedLocation !== 'All' && ` in ${selectedLocation}`}
                </div>
              </div>
            </div>

            {/* College Cards */}
            <div className="row">
              {displayedColleges.map((college, index) => (
                <CollegeCard 
                  key={college.id} 
                  college={college} 
                  rank={filteredColleges.indexOf(college) + 1}
                />
              ))}
            </div>

            {/* View More Button for Mobile */}
            {filteredColleges.length > 3 && (
              <div className="text-center mt-4">
                <button 
                  className="btn btn-lg px-5 py-3 fw-bold shadow-lg d-md-none"
                  onClick={() => setShowAll(!showAll)}
                  style={{
                    background: showAll 
                      ? "linear-gradient(45deg, #dc3545, #fd7e14)" 
                      : "linear-gradient(45deg, #28a745, #20c997)",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease"
                  }}
                >
                  {showAll ? (
                    <>
                      <i className="bi bi-eye-slash me-2"></i>
                      Show Less
                    </>
                  ) : (
                    <>
                      <i className="bi bi-eye me-2"></i>
                      View All {filteredColleges.length} Colleges
                    </>
                  )}
                </button>
                
                {/* Desktop: Always show all */}
                <div className="d-none d-md-block">
                  {!showAll && filteredColleges.length > 3 && (
                    <div className="row">
                      {filteredColleges.slice(3).map((college, index) => (
                        <CollegeCard 
                          key={college.id} 
                          college={college} 
                          rank={index + 4}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredColleges.length === 0 && (
              <div className="text-center py-5">
                <i className="bi bi-search display-1 text-muted"></i>
                <h4 className="text-muted mt-3">No colleges found</h4>
                <p className="text-muted">Try adjusting your filters</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default CollegeRankings
