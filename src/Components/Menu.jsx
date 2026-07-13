import React from "react";
import "../Styles/Menu.css";

let pancakeimg ="https://media.istockphoto.com/id/1307978601/vector/pancakes-with-maple-syrup.jpg?s=2048x2048&w=is&k=20&c=8oicsJcE4mfXyVu6fnR9E0ZR4RlxuxoK6NmX-gQC5xs="
const Menu = () => {
    const menuData = [
  {
    title: "Breakfast Menu",
    items: [
      {
        name: "Pancakes",
        desc: "Fresh cream, maple syrup",
        price: "$120",
        image: pancakeimg,
      },
      {
        name: "Veg Sandwich",
        desc: "Cheese, vegetables",
        price: "$90",
        image: "/images/b2.jpg",
      },
      {
        name: "French Toast",
        desc: "Honey, butter",
        price: "$110",
        image: "/images/b3.jpg",
      },
      {
        name: "Omelette",
        desc: "Egg, cheese",
        price: "$95",
        image: "/images/b4.jpg",
      },
      {
        name: "Fruit Bowl",
        desc: "Seasonal fruits",
        price: "$130",
        image: "/images/b5.jpg",
      },
      {
        name: "Coffee",
        desc: "Fresh brewed",
        price: "$60",
        image: "/images/b6.jpg",
      },
    ],
  },

  {
    title: "Lunch Menu",
    items: [
      {
        name: "Chicken Biryani",
        desc: "Rice, chicken",
        price: "$220",
        image: "/images/l1.jpg",
      },
      {
        name: "Butter Naan",
        desc: "Soft bread",
        price: "$40",
        image: "/images/l2.jpg",
      },
      {
        name: "Paneer Butter Masala",
        desc: "Paneer, gravy",
        price: "$180",
        image: "/images/l3.jpg",
      },
      {
        name: "Fried Rice",
        desc: "Veg special",
        price: "$150",
        image: "/images/l4.jpg",
      },
      {
        name: "Burger",
        desc: "Chicken burger",
        price: "$160",
        image: "/images/l5.jpg",
      },
      {
        name: "Pasta",
        desc: "Creamy pasta",
        price: "$170",
        image: "/images/l6.jpg",
      },
    ],
  },

  {
    title: "Dinner Menu",
    items: [
      {
        name: "Steak",
        desc: "Premium beef",
        price: "$350",
        image: "/images/d1.jpg",
      },
      {
        name: "Grilled Chicken",
        desc: "Herbs & spices",
        price: "$280",
        image: "/images/d2.jpg",
      },
      {
        name: "Sea Food",
        desc: "Fresh catch",
        price: "$390",
        image: "/images/d3.jpg",
      },
      {
        name: "Pizza",
        desc: "Cheese loaded",
        price: "$240",
        image: "/images/d4.jpg",
      },
      {
        name: "Lasagna",
        desc: "Italian style",
        price: "$270",
        image: "/images/d5.jpg",
      },
      {
        name: "Salad",
        desc: "Fresh vegetables",
        price: "$140",
        image: "/images/d6.jpg",
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