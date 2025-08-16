import { useState } from 'react'
import Home from "../screens/Home.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import College_info from '../components/College_info.jsx';
import CollegeStats from '../components/CollegeStats.jsx';
import CollegeRankings from '../components/CollegeRankings.jsx';
import ReservationPolicy from '../components/ReservationPolicy.jsx';
import CollegePredictor from '../components/CollegePredictor.jsx';
import UserReviews from '../components/UserReviews.jsx';
import Internships from '../components/Internships.jsx';
import Location from '../components/Location.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path='/college-info' element={<College_info />} />
      <Route path='/college-stats' element={<CollegeStats />} />
      <Route path='/rankings' element={<CollegeRankings />} />
      <Route path='/reservation-policy' element={<ReservationPolicy />} />
      <Route path='/college-predictor' element={<CollegePredictor />} />
      <Route path='/reviews' element={<UserReviews />} />
      <Route path='/internships' element={<Internships />} />
      <Route path='/location-search' element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
