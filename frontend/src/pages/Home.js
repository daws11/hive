import { useState, useCallback } from "react";
import DropdownProfile from "../components/DropdownProfile";
import PortalPopup from "../components/PortalPopup";
import "./Home.css";
import Navbar from '../components/Navbar';

const Home = () => {
  const [isDropdownProfileOpen, setDropdownProfileOpen] = useState(false);

  const openDropdownProfile = useCallback(() => {
    setDropdownProfileOpen(true);
  }, []);

  const closeDropdownProfile = useCallback(() => {
    setDropdownProfileOpen(false);
  }, []);

  return (
    <>
      <div className="home">
        <img className="home-child" alt="" src="/group-25.svg" />
        <div className="reach-all-you-need-parent">
          <b className="reach-all-you">Reach All You Need</b>
          <div className="dont-worry-we-container">
            <p className="dont-worry-we">
              Don’t worry we only give you the best deals,
            </p>
            <p className="dont-worry-we">{`best quality and finished on time. `}</p>
          </div>
          <div className="button-parent">
            <div className="button">
              <div className="default">View Catalog</div>
            </div>
            <div className="button1">
              <div className="default">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="frame-parent">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
            <img className="logo-icon" alt="" src="/logo.svg" />
            <img className="pngwing-2-icon" alt="" src="/pngwing-2@2x.png" />
            <div className="buy-1-get-1-parent">
              <b className="reach-all-you">Buy 1 Get 1</b>
              <div className="dont-worry-we-container">{`T&Cs Apply`}</div>
            </div>
            <img className="logo-icon1" alt="" src="/logo1.svg" />
          </div>
          <div className="ellipse-parent">
            <div className="frame-item" />
            <div className="rectangle-group">
              <div className="frame-inner" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
            </div>
            <div className="rectangle-group">
              <img
                className="iconarrowarrow-circle-left"
                alt=""
                src="/iconarrowarrowcircleleft.svg"
              />
              <img
                className="iconarrowarrow-circle-left"
                alt=""
                src="/iconarrowarrowcircleright.svg"
              />
            </div>
          </div>
        </div>
        <Navbar/>
        <div className="frame-group">
          <div className="get-to-know-us-parent">
            <b className="get-to-know">Get to know us</b>
            <div className="we-are-ready">
              "We are ready to assist you in every stage of production, from
              design to delivery, so you can feel at ease and confident that the
              products you order will arrive safely and on time."
            </div>
          </div>
          <div className="produk-kami-parent">
            <b className="get-to-know">Produk Kami</b>
            <div className="we-are-ready">
              "We are ready to assist you in every stage of production, from
              design to delivery, so you can feel at ease and confident that the
              products you order will arrive safely and on time."
            </div>
          </div>
          <div className="codiconworkspace-trusted" />
          <div className="frame-container">
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/iconmoneydollarcircle.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">Best Price</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/icontimeclock.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">On Time</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/iconcontent-editstickynote.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">Flexible Order</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/iconsupport-like-questionmedalstar.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">Best Quality</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/iconusersprofiletick.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">Trusted</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/icondesign-toolsdesigntools.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">Free Design</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="iconmoneydollar-circle-wrapper">
                  <img
                    className="iconmessagesmessage-notif"
                    alt=""
                    src="/iconsecurityshieldtick.svg"
                  />
                </div>
                <div className="best-price-parent">
                  <div className="best-price">Guaranteed</div>
                  <div className="we-offer-convection">
                    We offer convection services at affordable prices and
                    satisfying results.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent9">
            <div className="item-produk-parent">
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon1"
                    alt=""
                    src="/pngwing-21@2x.png"
                  />
                </div>
                <div className="best-price">Kaos</div>
              </div>
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon1"
                    alt=""
                    src="/pngwing-22@2x.png"
                  />
                </div>
                <div className="best-price">Kemeja</div>
              </div>
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon1"
                    alt=""
                    src="/pngwing-23@2x.png"
                  />
                </div>
                <div className="best-price">Jaket</div>
              </div>
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon1"
                    alt=""
                    src="/pngwing-21@2x.png"
                  />
                </div>
                <div className="best-price">T-Shirt</div>
              </div>
            </div>
            <div className="item-produk-parent">
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon1"
                    alt=""
                    src="/pngwing-24@2x.png"
                  />
                </div>
                <div className="best-price">Totebag</div>
              </div>
              <div className="item-produk-container">
                <div className="item-produk5">
                  <div className="rectangle-container">
                    <div className="rectangle-div" />
                    <img
                      className="pngwing-2-icon1"
                      alt=""
                      src="/pngwing-25@2x.png"
                    />
                  </div>
                  <div className="best-price">Keychain</div>
                </div>
                <div className="frame-child7" />
              </div>
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon1"
                    alt=""
                    src="/pngwing-26@2x.png"
                  />
                </div>
                <div className="best-price">Tumblr</div>
              </div>
              <div className="item-produk">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <img
                    className="pngwing-2-icon8"
                    alt=""
                    src="/pngwing-27@2x.png"
                  />
                </div>
                <div className="best-price">Sticker</div>
              </div>
            </div>
          </div>
          <div className="group-div">
            <div className="group-child" />
            <div className="pricing-card-base">
              <img
                className="pricing-card-base-child"
                alt=""
                src="/ellipse-5@2x.png"
              />
              <div className="container">
                <div className="button-container">
                  <div className="button-container1">
                    <div className="michael">Michael</div>
                    <div className="ceo-beliaja">CEO Beliaja</div>
                  </div>
                </div>
              </div>
              <div className="pricing-card-base-item" />
              <div className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                pellentesque sit amet mauris nec finibus. Vivamus a varius
                purus, sit amet ornare sem.
              </div>
              <div className="frame-parent10">
                <div className="rectangle-group">
                  <div className="frame-child10" />
                  <div className="frame-child11" />
                  <div className="frame-child11" />
                </div>
                <div className="rectangle-group">
                  <img
                    className="iconarrowarrow-circle-left"
                    alt=""
                    src="/iconarrowarrowcircleleft1.svg"
                  />
                  <img
                    className="iconarrowarrow-circle-left"
                    alt=""
                    src="/iconarrowarrowcircleright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="icontextquote-down-square-parent">
              <img
                className="iconarrowarrow-circle-left"
                alt=""
                src="/icontextquotedownsquare.svg"
              />
              <b className="get-to-know">Testimoni</b>
              <div className="we-are-ready2">
                "We are ready to assist you in every stage of production, from
                design to delivery, so you can feel at ease and confident that
                the products you order will arrive safely and on time."
              </div>
              <div className="button-group">
                <div className="button2">
                  <div className="default">Show More</div>
                </div>
                <img className="arrowright-icon" alt="" src="/arrowright.svg" />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="links">
              <div className="ellipse-parent">
                <div className="vertical-container">
                  <div className="button2">
                    <div className="default">Products</div>
                  </div>
                  <div className="vertical-container1">
                    <div className="button2">
                      <div className="default">Features</div>
                    </div>
                    <div className="button2">
                      <div className="default">Integrations</div>
                    </div>
                    <div className="button2">
                      <div className="default">Enterprise</div>
                    </div>
                    <div className="button2">
                      <div className="default">Solutions</div>
                    </div>
                  </div>
                </div>
                <div className="vertical-container">
                  <div className="button2">
                    <div className="default">Products</div>
                  </div>
                  <div className="vertical-container1">
                    <div className="button2">
                      <div className="default">Features</div>
                    </div>
                    <div className="button2">
                      <div className="default">Integrations</div>
                    </div>
                    <div className="button2">
                      <div className="default">Enterprise</div>
                    </div>
                    <div className="button2">
                      <div className="default">Solutions</div>
                    </div>
                  </div>
                </div>
                <div className="vertical-container">
                  <div className="button2">
                    <div className="default">Products</div>
                  </div>
                  <div className="vertical-container1">
                    <div className="button2">
                      <div className="default">Features</div>
                    </div>
                    <div className="button2">
                      <div className="default">Integrations</div>
                    </div>
                    <div className="button2">
                      <div className="default">Enterprise</div>
                    </div>
                    <div className="button2">
                      <div className="default">Solutions</div>
                    </div>
                  </div>
                </div>
                <div className="vertical-container">
                  <div className="button2">
                    <div className="default">Products</div>
                  </div>
                  <div className="vertical-container1">
                    <div className="button2">
                      <div className="default">Features</div>
                    </div>
                    <div className="button2">
                      <div className="default">Integrations</div>
                    </div>
                    <div className="button2">
                      <div className="default">Enterprise</div>
                    </div>
                    <div className="button2">
                      <div className="default">Solutions</div>
                    </div>
                  </div>
                </div>
                <div className="vertical-container">
                  <div className="button2">
                    <div className="default">Products</div>
                  </div>
                  <div className="vertical-container1">
                    <div className="button2">
                      <div className="default">Features</div>
                    </div>
                    <div className="button2">
                      <div className="default">Integrations</div>
                    </div>
                    <div className="button2">
                      <div className="default">Enterprise</div>
                    </div>
                    <div className="button2">
                      <div className="default">Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <img className="logo-icon2" alt="" src="/logo3.svg" />
                <div className="hive-all-rights">
                  © 2023 Hive. All Rights Reserved.
                </div>
                <div className="social-icons">
                  <img
                    className="social-platforms-logo"
                    alt=""
                    src="/social-platforms-logo.svg"
                  />
                  <img
                    className="social-platforms-logo"
                    alt=""
                    src="/social-platforms-logo1.svg"
                  />
                  <img
                    className="social-platforms-logo"
                    alt=""
                    src="/social-platforms-logo2.svg"
                  />
                  <img
                    className="social-platforms-logo"
                    alt=""
                    src="/social-platforms-logo3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="call-to-action">
            <div className="content1">
              <div className="welcome-to-your-new-digital-re-parent">
                <b className="get-to-know">
                  Welcome to your new digital reality that will rock your world.
                </b>
                <div className="we-are-ready">
                  <p className="dont-worry-we">
                    Let us help you take you from zero to serious business and
                    beyond.
                  </p>
                  <p className="dont-worry-we">
                    Our no-strings attached free trial lets you test our product
                    today.
                  </p>
                </div>
              </div>
              <div className="button-parent1">
                <div className="button28">
                  <div className="default">Enter your email</div>
                </div>
                <div className="button29">
                  <div className="default">Submit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-parent">
          <div className="group-item" />
          <div className="frame-parent11">
            <div className="parent">
              <b className="b">1</b>
              <div className="line-div" />
            </div>
            <div className="rectangle-container">
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-10@2x.png"
              />
            </div>
            <div className="pilih-produk-parent">
              <div className="pilih-produk">Pilih Produk</div>
              <div className="we-are-ready">
                Kamu dapat memilih produk mana yang akan kamu buat desainnya
                secara custom.
              </div>
            </div>
          </div>
          <div className="frame-parent12">
            <div className="parent">
              <b className="b">2</b>
              <div className="line-div" />
            </div>
            <div className="rectangle-container">
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-101@2x.png"
              />
            </div>
            <div className="pilih-produk-parent">
              <div className="pilih-produk">Cek Harga</div>
              <div className="we-are-ready">
                Periksa terlebih dahulu produk yang mau kamu order.
              </div>
            </div>
          </div>
          <div className="frame-parent13">
            <div className="parent">
              <b className="b">3</b>
              <div className="line-div" />
            </div>
            <img className="frame-child16" alt="" src="/rectangle-102@2x.png" />
            <div className="pilih-produk-parent">
              <div className="pilih-produk">Hubungi Kami</div>
              <div className="we-are-ready">
                Produk yang kamu order akan otomatis terkirim ke chat kami. Kamu
                bisa melakukan negosiasi terhadap harga sebelum dikonfirmasi.
              </div>
            </div>
          </div>
          <div className="frame-parent14">
            <div className="parent">
              <b className="b">4</b>
              <div className="line-div" />
            </div>
            <img className="frame-child16" alt="" src="/rectangle-103@2x.png" />
            <div className="pilih-produk-parent">
              <div className="pilih-produk">Selesaikan Pembayaran</div>
              <div className="we-are-ready">
                Konfirmasi pembayaran dengan memilih metode pembayaran yang
                sesuai. kamu dapat memilih untuk memilih pembayaran secara full
                atau berdasarkan termin
              </div>
            </div>
          </div>
          <b className="cara-order">Cara Order</b>
        </div>
        <div className="kenali-kami-lebih-dekat-parent">
          <b className="kenali-kami-lebih">Kenali Kami Lebih Dekat</b>
          <img
            className="frame-child19"
            alt=""
            src="/rectangle-34624134@2x.png"
          />
        </div>
      </div>
      {isDropdownProfileOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownProfile}
        >
          <DropdownProfile onClose={closeDropdownProfile} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
