import React from "react";

import pizza from "../../assests/category/pizza.jpg";
import hamburger from "../../assests/category/hamburger.jpg";
import irani from "../../assests/category/irani.jpg";
import sandwich from "../../assests/category/sandwich.jpg";
import dessert from '../../assests/category/Dessert.jpg';
import hotCoffe from '../../assests/category/hotCoffe.jpg';
import iceCoffe from '../../assests/category/iceCoffe.jpg';
import fish from '../../assests/category/fish.jpg';

const category = [
  {
    id: 1,
    img: pizza,
    name: "پیتزا",
  },
  {
    id: 2,
    img: hamburger,
    name: "برگر",
  },
  {
    id: 3,
    img: sandwich,
    name: "ساندویچ",
  },
  {
    id: 4,
    img: fish,
    name: "غذای دریایی",
  },
  {
    id: 5,
    img: irani,
    name: "غذای ایرانی",
  },
  {
    id: 6,
    img: dessert,
    name:"دسر",
  },
  {
    id: 7,
    img: hotCoffe,
    name:"نوشیدنی گرم",
  },
  {
    id: 8,
    img: iceCoffe,
    name:"نوشیدنی سرد",
  },
];

const Category = () => {
  return (
    <section>
      <div className="category">
        {category.map((item) => (
          <div className="category-item" key={item.id}>
            <div className="category-item_img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="category-item_name">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
