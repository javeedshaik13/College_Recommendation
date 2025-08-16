import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Select} from 'react-select'
function CollegeRankings() {
  return (
     <>
      <Navbar />
      <div className='container'>
        <div className='my-4' style={{minHeight:"80vh"}}>
          <h1>Internships</h1>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CollegeRankings
