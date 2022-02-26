import React from "react";
import "./SnappApplication.css";

function SnappApplication() {
  return (
    <section className="snappApp">
      <div className="snappApp__main">
        <div className="snappApp__content">
          <h1>اپلیکشن اسنپ&zwnj;فود</h1>
          <p>
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
            رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را
            جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
          </p>
          <div className="snappApp__link">
            <p>
              برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
            </p>
            <div className="snappApp__link__phoneNumber">
              <input type="text" placeholder="*********09" />
              <a href="#">دریافت لینک</a>
            </div>
            <div className="snappApp__logo">
              <div>
                <a href="https://sibapp.com/">
                  <img src="assets/images/sibapp.svg" />
                </a>
                <a href="https://cafebazaar.ir/app">
                  <img src="assets/images/cafebazar.svg" />
                </a>
                <a href="https://play.google.com/store/apps">
                  <img src="assets/images/googleplay.svg" />
                </a>
                <a href="https://iapps.ir/">
                  <img src="assets/images/iapps.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="snappApp__img">
          <div>
            <img src="assets/images/appsnapp.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SnappApplication;
