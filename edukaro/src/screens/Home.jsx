  import React from "react";
  import '../App.css';
  import Carousel from "../components/Carousel.jsx";
  import Cards from "../components/Cards.jsx";

  function Home() {
    return (
    <div>
      <section className="carousel-section">
        <Carousel />
      </section>
      
      <section className="cards-section py-4">
        <Cards />
      </section>
    </div>
  );
  }


  export default Home;
