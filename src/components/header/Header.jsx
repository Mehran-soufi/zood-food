import React, { useState } from "react";

import logo from '../../assests/logo/zood-food.png'

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 50) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);


  return (
    <header>
      <div className={visible?"header-act":"header-dact"}>
        <div className="he-logo">
            <img src={logo} alt="zood food" />
        </div>
        <div className="hr-search">
            <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div> 
            <div className="search-input"><input type="search" placeholder="چیزی را جستو نمایید..." /></div> 
            <div className="search-btn"><button>جست و جو</button></div> 
        </div>
        <div className="hr-account">
        <i className="fa-solid fa-user" title="حساب کاربری"></i>
        <i className="fa-solid fa-bag-shopping" title="سبد خرید"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
