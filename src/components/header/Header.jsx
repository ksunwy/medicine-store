import React from 'react';
import Card from './Card';
import User from './User';
import Medicine from '../../assets/images/Medicine.svg';
import './header.css';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <header className="header">
      <div className="flex scontainer">
        <div className="logo">
          <img src={Medicine} alt="Medicine" />
        </div>
        <div className="account flexCenter">
          <Card />
          <User />
        </div>
      </div>
    </header>
  )
}

export default Header;