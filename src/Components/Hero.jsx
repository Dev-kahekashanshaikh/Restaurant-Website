import React from "react";
import "../Styles/Hero.css";

import img1 from "../assets/tho-ge-tavern-8024234.jpg";
import img2 from "../assets/buffetcrush-christmas-wallpaper-2009590.jpg";
import img3 from "../assets/chren-hotel-1191718.jpg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="slider">

        <div className="slide">
          <img src={img1} alt="Restaurant" />
        </div>

        <div className="slide">
          <img src={img2} alt="Restaurant" />
        </div>

        <div className="slide">
          <img src={img3} alt="Restaurant" />
        </div>

      </div>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Welcome to Foodie's Paradise</h1>

        <p>
          Experience delicious flavors crafted with fresh ingredients.
          From traditional recipes to modern cuisine, every dish is
          prepared with love and served with excellence.
        </p>

        <button>Explore Menu</button>
      </div>

    </section>
  );
};

export default Hero;