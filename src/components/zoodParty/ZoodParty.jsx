import React from "react";

import jooje from "../../assests/food/jooje.jpg";
import berger from "../../assests/food/berger.jpg";
import coffe from "../../assests/food/coffe.jpg";
import pizza from "../../assests/food/pizza.jpg";

const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

const date = new Date().getSeconds();

const food = [
  {
    id: 1,
    img: jooje,
    name: "جوجه کباب زعفرانی",
    oldPrice: 130000,
    newPrice: 110000,
    location: "تهران",
    resturant: "جوجه سرا",
  },
  {
    id: 2,
    img: berger,
    name: "همبرگر ذغالی",
    oldPrice: 210000,
    newPrice: 170000,
    location: "تهران",
    resturant: "برگر ذغالی",
  },
  {
    id: 3,
    img: coffe,
    name: "هات چاکلت",
    oldPrice: 50000,
    newPrice: 35000,
    location: "تهران",
    resturant: "کافه گذر",
  },
  {
    id: 4,
    img: pizza,
    name: "پیتزا سبزیجان",
    oldPrice: 100000,
    newPrice: 87500,
    location: "تهران",
    resturant: "پیتزا مارگاریتا",
  },
];

const ZoodParty = () => {
  return (
    <sectiont>
      <div className="foodParty">
        <div className="foodParty-title">
          <h2>فود پارتی</h2>
          <div className="foodPart-timer">
            <p>{second}</p>:<p>{minute}</p>:<p>{hour}</p>
          </div>
        </div>
        <div className="foodParty-items">
          {food.map((item) => (
            <div className="foodParty-items_cart" key={item.id}>
              <div className="foodParty-items_cart_img">
                <img src={item.img} alt={item.id} />
              </div>
              <div className="foodParty-items_cart_det">
                <div className="name">
                  <p>{item.name}</p>
                </div>
                <div className="price-address">
                  <div className="address">
                    <p id="city">
                      <i className="fa-solid fa-location-dot"></i>{item.location}
                    </p>
                    <p>{item.resturant}</p>
                  </div>
                  <div className="price">
                    <del>
                      {item.oldPrice}<span>تومان</span>
                    </del>
                    <p>
                      {item.newPrice}<span>تومان</span>
                    </p>
                  </div>
                </div>
                <div className="addTOCart">
                  <button>سفارش </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </sectiont>
  );
};

export default ZoodParty;
