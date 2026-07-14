import React from "react";
import "../Styles/Menu.css";

// Break fast Menu item Images 
import pancakeimg from "../assets/pancakeimg.avif";
import FrenchToast from "../assets/French-Toast.avif";
import VegSandwich from "../assets/Veg-Sandwich.avif";
import Omelette from "../assets/Omelette.avif";
import FruitBowl from "../assets/FruitBowl.avif";
import Coffee from "../assets/Coffee.avif";
import ChickenBiryani from "../assets/Chicken-Biryani.avif"


// Lunch Menu item Images 
import ChickenBiryani from "../assets/Chicken-Biryani.avif"
import ButterNaan from "../assets/Butter-Naan.avif"
import PaneerButterMasala from "../assets/Paneer-Butter-Masala.avif"
import FriedRice from "../assets/Fried-Rice.avif"
import Burger from "../assets/Burger.avif";
import Pasta from "../assets/Pasta.avif";

// Dinner Menu Images 
import Steak from "../assets/Steak.avif"
import GrilledChicken from "../assets/Grilled-Chicken.avif"
import SeaFood from "../assets/Sea-Food.avif"
import Pizza from "../assets/Pizza.avif"
import Lasagna from "../assets/Lasagna.avif";
import Salad from "../assets/Salad.avif";




const Menu = () => {
    const menuData = [
  {
    title: "Breakfast Menu",
    items: [
      {
        name: "Pancakes",
        desc: "Fresh cream, maple syrup",
        price: "₹120",
        image: pancakeimg,
      },
      {
        name: "Veg Sandwich",
        desc: "Cheese, vegetables",
        price: "₹90",
        image: VegSandwich,
      },
      {
        name: "French Toast",
        desc: "Honey, butter",
        price: "₹110",
        image: FrenchToast,
      },
      {
        name: "Omelette",
        desc: "Egg, cheese",
        price: "₹95",
        image: Omelette,
      },
      {
        name: "Fruit Bowl",
        desc: "Seasonal fruits",
        price: "₹130",
        image: FruitBowl,
      },
      {
        name: "Coffee",
        desc: "Fresh brewed",
        price: "₹60",
        image: Coffee,
      },
    ],
  },

  {
    title: "Lunch Menu",
    items: [
      {
        name: "Chicken Biryani",
        desc: "Rice, chicken",
        price: "₹220",
        image: ChickenBiryani,
      },
      {
        name: "Butter Naan",
        desc: "Soft bread",
        price: "₹40",
        image: ButterNaan,
      },
      {
        name: "Paneer Butter Masala",
        desc: "Paneer, gravy",
        price: "₹180",
        image: PaneerButterMasala,
      },
      {
        name: "Fried Rice",
        desc: "Veg special",
        price: "₹150",
        image: FriedRice,
      },
      {
        name: "Burger",
        desc: "Chicken burger",
        price: "₹160",
        image: Burger,
      },
      {
        name: "Pasta",
        desc: "Creamy pasta",
        price: "₹170",
        image: Pasta,
      },
    ],
  },

  {
    title: "Dinner Menu",
    items: [
      {
        name: "Steak",
        desc: "Premium beef",
        price: "₹350",
        image: Steak,
      },
      {
        name: "Grilled Chicken",
        desc: "Herbs & spices",
        price: "₹280",
        image: {GrilledChicken},
      },
      {
        name: "Sea Food",
        desc: "Fresh catch",
        price: "₹390",
        image: SeaFood,
      },
      {
        name: "Pizza",
        desc: "Cheese loaded",
        price: "₹240",
        image: Pizza,
      },
      {
        name: "Lasagna",
        desc: "Italian style",
        price: "₹270",
        image: Lasagna,
      },
      {
        name: "Salad",
        desc: "Fresh vegetables",
        price: "₹140",
        image:Salad,
      },
    ],
  },
];


  return (
    <section className="menu-section">

      {menuData.map((menu, index) => (

        <div className="menu-container" key={index}>

          <h2>{menu.title}</h2>

          <div className="menu-grid">

            {menu.items.map((item, i) => (

              <div className="menu-card" key={i}>

                <img src={item.image} alt={item.name} />

                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>

                <span>{item.price}</span>

              </div>

            ))}

          </div>

          <button>Book a Table</button>

        </div>

      ))}

    </section>
  );
};

export default Menu;