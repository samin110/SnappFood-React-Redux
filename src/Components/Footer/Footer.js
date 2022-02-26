import React from "react";
import "./Footer.css";
import { SiAparat } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__logo-social">
          <div className="footer__logo">
            <div>
              <a href="wwww.snappfood.ir">
                <img src="assets/images/snapplogo.svg" />
              </a>
            </div>
            <div className="footer__logo-heading">
              <h3>اسنپ&zwnj;فود</h3>
              <p>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
              <div className="footer__social">
                <div>
                  <SiAparat className="footer__social-icons" />
                </div>
                <div>
                  <BsInstagram className="footer__social-icons" />
                </div>
                <div>
                  <GrLinkedinOption className="footer__social-icons" />
                </div>
                <div>
                  <FaTelegramPlane className="footer__social-icons" />
                </div>
                <div>
                  <FaTwitter className="footer__social-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer__list"> */}
        <div className="footer__links">
          <p>درباره اسنپ‌فود</p>
          <p>وبلاگ</p>
          <p>قوانین سایت</p>
          <p>حریم خصوصی</p>
          <p>ثبت نام فروشندگان</p>
        </div>
        <div className="footer__links">
          <p>تماس با اسنپ‌فود</p>
          <p>پرسش&zwnj;های متداول</p>
          <p>ثبت شکایات</p>
          <p>اپلیکیشن موبایل</p>
        </div>
        {/* </div> */}

        <div className="footer__enamad">
          <div>
            <img src="assets/images/senf.png" />
          </div>
          <div>
            <img src="assets/images/enamad.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
