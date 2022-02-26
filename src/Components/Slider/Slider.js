import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./Swiper.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";

function Slider() {
  return (
    <section className="slider">
      <h1>رستوران ها</h1>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/12.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 60 دقیقه</p>
              </div>
              <h2>کترینگ غذای خوب</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار جمهوری</p>
                  </div>
                  <div>
                    <p>(532 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/13.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>10 - 20 دقیقه</p>
              </div>
              <h2>کافه فست فود آوینا</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>سالاریه</p>
                  </div>
                  <div>
                    <p>(37 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/17.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>40 - 60 دقیقه</p>
              </div>
              <h2>رستوران ونج</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار امین</p>
                  </div>
                  <div>
                    <p>(122 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/14.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>20 - 40 دقیقه</p>
              </div>
              <h2>رستوران هشت بهشت</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>خیابان شهید صدوقی</p>
                  </div>
                  <div>
                    <p>(491 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/18.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>10 - 20 دقیقه</p>
              </div>
              <h2>کافه فست فود آوینا</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>سالاریه</p>
                  </div>
                  <div>
                    <p>(37 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/15.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 50 دقیقه</p>
              </div>
              <h2>مجموعه غذایی پلاس</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>صفاشهر</p>
                  </div>
                  <div>
                    <p>(650 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/12.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 60 دقیقه</p>
              </div>
              <h2>کترینگ غذای خوب</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار جمهوری</p>
                  </div>
                  <div>
                    <p>(532 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/16.jpeg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 70 دقیقه</p>
              </div>
              <h2>رستوران گلستان</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>میدان انقلاب</p>
                  </div>
                  <div>
                    <p>(1150 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/17.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>40 - 60 دقیقه</p>
              </div>
              <h2>رستوران ونج</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار امین</p>
                  </div>
                  <div>
                    <p>(122 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/12.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 60 دقیقه</p>
              </div>
              <h2>کترینگ غذای خوب</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار جمهوری</p>
                  </div>
                  <div>
                    <p>(532 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/13.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>10 - 20 دقیقه</p>
              </div>
              <h2>کافه فست فود آوینا</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>سالاریه</p>
                  </div>
                  <div>
                    <p>(37 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/17.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>40 - 60 دقیقه</p>
              </div>
              <h2>رستوران ونج</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار امین</p>
                  </div>
                  <div>
                    <p>(122 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/14.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>20 - 40 دقیقه</p>
              </div>
              <h2>رستوران هشت بهشت</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>خیابان شهید صدوقی</p>
                  </div>
                  <div>
                    <p>(491 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/18.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>10 - 20 دقیقه</p>
              </div>
              <h2>کافه فست فود آوینا</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>سالاریه</p>
                  </div>
                  <div>
                    <p>(37 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/15.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 50 دقیقه</p>
              </div>
              <h2>مجموعه غذایی پلاس</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>صفاشهر</p>
                  </div>
                  <div>
                    <p>(650 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mobileSwiper"
      >
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/12.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 60 دقیقه</p>
              </div>
              <h2>کترینگ غذای خوب</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار جمهوری</p>
                  </div>
                  <div>
                    <p>(532 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/13.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>10 - 20 دقیقه</p>
              </div>
              <h2>کافه فست فود آوینا</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>سالاریه</p>
                  </div>
                  <div>
                    <p>(37 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/17.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>40 - 60 دقیقه</p>
              </div>
              <h2>رستوران ونج</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>بلوار امین</p>
                  </div>
                  <div>
                    <p>(122 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/14.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>20 - 40 دقیقه</p>
              </div>
              <h2>رستوران هشت بهشت</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>خیابان شهید صدوقی</p>
                  </div>
                  <div>
                    <p>(491 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/18.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>10 - 20 دقیقه</p>
              </div>
              <h2>کافه فست فود آوینا</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>سالاریه</p>
                  </div>
                  <div>
                    <p>(37 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-img">
              <img src="assets/images/15.jpg" />
            </div>
            <div className="card-content">
              <div className="card__time">
                <p>30 - 50 دقیقه</p>
              </div>
              <h2>مجموعه غذایی پلاس</h2>
              <div className="card-text">
                <div className="card-location">
                  <div>
                    <IoLocationOutline className="card-icon" />
                    <p>صفاشهر</p>
                  </div>
                  <div>
                    <p>(650 نظر)</p>
                  </div>
                </div>
                <div className="card-point">
                  <div>
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star half-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                    <BsStarFill className="icon-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
