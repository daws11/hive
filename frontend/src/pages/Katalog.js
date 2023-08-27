import React from "react";
import { ArrowCircleLeft } from ".../public/ArrowCircleLeft";
import { ArrowCircleRight } from "./ArrowCircleRight";
import { Circle } from "./Circle";
import { Footer } from "./Footer";
import { ItemProduk } from "./ItemProduk";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import "./style.css";

export const Katalog = () => {
  return (
    <div className="katalog">
      <div className="div-3">
        <div className="overlap">
          <div className="group" />
          <div className="text-wrapper-2">Katalog</div>
          <Navbar
            className="design-component-instance-node-2"
            ellipse="ellipse-3-2.svg"
            itemNavbarDivClassName="navbar-instance"
            itemNavbarIcon={<Circle className="icon-instance-node" />}
            logoPropertyWhite="logo-4.svg"
            property1="after"
          />
          <p className="text-wrapper-3">Label Small - Poppins Medium 11/16 . +0.5</p>
          <div className="frame-4">
            <div className="frame-5">
              <div className="overlap-group">
                <img className="img" alt="Pngwing" src="pngwing-1.png" />
                <Logo className="logo-3" property1="white" propertyWhite="logo-2.svg" />
                <img className="pngwing-2" alt="Pngwing" src="image.png" />
                <Logo className="logo-4" property1="white" propertyWhite="logo-3.svg" />
              </div>
              <div className="frame-6">
                <div className="text-wrapper-4">Buy 1 Get 1</div>
                <div className="t-cs-apply">T&amp;Cs Apply</div>
              </div>
            </div>
            <div className="frame-7">
              <div className="ellipse-2" />
              <div className="frame-8">
                <div className="rectangle" />
                <div className="ellipse-3" />
                <div className="ellipse-3" />
              </div>
              <div className="frame-8">
                <ArrowCircleLeft className="icon-arrow-arrow-2" />
                <ArrowCircleRight className="icon-arrow-arrow-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-9">
            <div className="text-wrapper-5">Kaos</div>
            <div className="frame-10">
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-5.png"
                property1="default"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-4.png"
                property1="default"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-3.png"
                property1="default"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-2.png"
                property1="default"
              />
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="frame-9">
            <div className="text-wrapper-5">Baju Seragam</div>
            <div className="frame-10">
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-9.png"
                property1="default"
                text="Shirt"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-8.png"
                property1="default"
                text="Shirt"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-7.png"
                property1="default"
                text="Shirt"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-6.png"
                property1="default"
                text="Shirt"
              />
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-9">
            <div className="text-wrapper-5">Jaket</div>
            <div className="frame-10">
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-13.png"
                property1="default"
                text="Jacket"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-12.png"
                property1="default"
                text="Jacket"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-11.png"
                property1="default"
                text="Jacket"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-10.png"
                property1="default"
                text="Jacket"
              />
            </div>
          </div>
        </div>
        <div className="frame-12">
          <div className="frame-9">
            <div className="text-wrapper-5">Aksesoris</div>
            <div className="frame-10">
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-14.png"
                property1="default"
                text="Totebag"
              />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <ItemProduk
                    className="design-component-instance-node-2"
                    frameClassName="item-produk-2"
                    pngwing="pngwing-2-15.png"
                    property1="default"
                    text="Keychain"
                  />
                  <div className="ellipse-4" />
                </div>
              </div>
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-16.png"
                pngwingClassName="item-produk-3"
                property1="default"
                text="Tumblr"
              />
              <ItemProduk
                className="item-produk-instance"
                frameClassName="item-produk-2"
                pngwing="pngwing-2-17.png"
                pngwingClassName="item-produk-4"
                property1="default"
                text="Sticker"
              />
            </div>
          </div>
        </div>
        <Footer className="footer-instance" logoPropertyWhite="logo-5.svg" />
      </div>
    </div>
  );
};

export default Katalog;