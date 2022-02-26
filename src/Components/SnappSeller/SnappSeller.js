import React from "react";
import "./SnappSeller.css";
import { BsShop } from "react-icons/bs";

function SnappSeller() {
  return (
    <section className="seller">
      <div className="seller__main">
        <div className="seller__content">
          <h1>صاحب کسب و کار هستید؟</h1>
          <p>
            با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.
          </p>
          <button className="btn">
            <BsShop className="icons" />
            <p>ثبت نام فروشندگان</p>
          </button>
        </div>
        <div className="seller__image">
          <img src="assets/images/vendor_pic.png" />
        </div>
      </div>
    </section>
  );
}

export default SnappSeller;
