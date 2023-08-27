import React from 'react';
import "../pages/Home.css";
import { useNavigate,BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Katalog } from '../pages/Katalog';



const Navbar = () => {
    const navigate = useNavigate();

const navigateToKatalog = () => {
  navigate("/katalog");
}


  <button onClick={navigateToKatalog}>Pergi ke Katalog</button>

    return (
        <div className="navbar">
        <div className="logo-parent">
          <img className="logo-icon2" alt="" src="/logo2.svg" />
          <div className="item-navbar-parent">
            <div className="item-navbar">
              <div className="katalog">Beranda</div>
              <img
                className="iconarrowarrow-down"
                alt=""
                src="/iconarrowarrowdown.svg"
              />
            </div>
            <div className="item-navbar">
              <div className="default"onClick={navigateToKatalog} >
               Katalog
            </div>
              <img
                className="iconarrowarrow-down"
                alt="Katalog"
                src="/iconarrowarrowdown.svg"
              />
            </div>
            <div className="item-navbar">
              <div className="default">Testimoni</div>
              <img
                className="iconarrowarrow-down"
                alt=""
                src="/iconarrowarrowdown.svg"
              />
            </div>
            <div className="item-navbar">
              <div className="default">Tentang Kami</div>
              <img
                className="iconarrowarrow-down"
                alt=""
                src="/iconarrowarrowdown.svg"
              />
            </div>
          </div>
        </div>
        <div className="item-navbar-group">
          <div className="item-navbar">
            <div className="default">Login</div>
          </div>
        </div>
        {/* <div className="item-navbar-group">
          <div className="item-navbar">
            <div className="default">Your Order</div>
            <img className="circle-icon" alt="" src="/circle.svg" />
          </div>
          <div className="item-navbar">
            <img
              className="iconmessagesmessage-notif"
              alt=""
              src="/iconmessagesmessagenotif.svg"
            />
          </div>
          <div className="item-navbar" >
            <img className="ellipse-icon" alt="" src="/ellipse-3@2x.png" />
            <img
              className="iconarrowarrow-down5"
              alt=""
              src="/iconarrowarrowdown1.svg"
            />
          </div>
        </div> */}
      </div>

        
    );
}

export default Navbar;
