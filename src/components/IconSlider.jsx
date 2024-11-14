import { Swiper, SwiperSlide } from "swiper/react";
import html from "../assets/pngwing.com (7).png";
import css from "../assets/pngwing.com (8).png";
import js from "../assets/pngegg (4).png";
import tailwind from "../assets/pngwing.com (6).png";
import react from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import next from "../assets/nextjs.256x256.png";
import express from "../assets/pngwing.com (5).png";
import mongodb from "../assets/mongodb-original.116x256.png";
import node from "../assets/node-js.227x256.png";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const skills = [
  {
    id: 1,
    img: html,
    title: "HTML",
  },
  {
    id: 2,
    img: css,
    title: "CSS",
  },
  {
    id: 3,
    img: js,
    title: "Javascript",
  },
  {
    id: 4,
    img: tailwind,
    title: "Tailwind",
  },
  {
    id: 5,
    img: react,
    title: "React Js",
  },
  {
    id: 6,
    img: next,
    title: "Next Js",
  },
  {
    id: 7,
    img: express,
    title: "Express Js",
  },
  {
    id: 8,
    img: mongodb,
    title: "Mongodb",
  },
  {
    id: 9,
    img: node,
    title: "Node Js",
  },
];

const IconSlider = () => {
  return (
    <div className="w-[600px] ">
      <Swiper
        loop={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        grabCursor={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {skills.map(({ id, title, img }) => (
          <SwiperSlide className="group" key={id}>
            <div className="slide-div">
              <img
                className={`max-h-28 relative slideImg opacity-50   ${
                  title == "Tailwind"
                    ? "translate-y-5 w-28"
                    : title == "Mongodb" && "translate-x-5 "
                }`}
                src={img}
                alt={title}
              />
              <span
                className={` absolute opacity-0 skillTitle z-50 ${
                  title == "Tailwind" ? "-bottom-14" : "-bottom-7"
                }  flex justify-center w-full`}
              >
                <span className={`-translate-x-[0.6rem]`}>{title}</span>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconSlider;
