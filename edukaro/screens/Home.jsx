import React from "react";
import '../src/App.css';
import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import Cards from "../components/Cards.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}


export default Home;
