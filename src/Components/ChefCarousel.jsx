import { useEffect, useState } from "react";
import "../Styles/ChefCarousel.css";
import chefimg from "../assets/chef.avif"
  let img1 = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let img2 ="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const chefs = [
  {
    id: 1,
    name: "Chef William",
    speciality: "Italian Cuisine",
    experience: "12+ Years",
    image:img1,
  },
  {
    id: 2,
    name: "Chef Olivia",
    speciality: "French Cuisine",
    experience: "10+ Years",
    image: img2,
  },
  {
    id: 3,
    name: "Chef Arjun",
    speciality: "Indian Cuisine",
    experience: "15+ Years",
    image: chefimg,
  },
  {
    id: 4,
    name: "Chef Emma",
    speciality: "Desserts",
    experience: "8+ Years",
    image: img2,
  },
  {
    id: 5,
    name: "Chef Daniel",
    speciality: "Seafood",
    experience: "11+ Years",
    image:img1,
  },
  {
    id: 6,
    name: "Chef Sofia",
    speciality: "Chinese Cuisine",
    experience: "9+ Years",
    image: img2,
  },
];

const ChefCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % chefs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="chef-section">
      <div className="section-title">
        <h4>Meet Our Experts</h4>
        <h2>Master Chefs</h2>
      </div>

     
      <div
    className="chef-slider"
    style={{
        transform: `translateX(calc(50% - ${(activeIndex * 285) + 140}px))`,
        transition: "0.8s ease"
    }}
>
        {chefs.map((chef, index) => (
          <div
            key={chef.id}
            className={`chef-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="chef-image">
              <img src={chef.image} alt={chef.name} />
            </div>

            <div className="chef-info">
              <h3>{chef.name}</h3>
              <p>{chef.speciality}</p>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <span>{chef.experience}</span>

              <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefCarousel;