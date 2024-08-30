import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import ZoomableImage from "../../ZoomableImage";

export function SwiperImages(props) {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        {props.images.map((path, index) => (
          <SwiperSlide key={index}>
            <ZoomableImage
              key={index}
              src={path}
              alt={`Gallery Image ${index + 1}`}
            />
            {/* <img
              style={{ width: "22rem", maxHeight: "10.5rem" }}
              src={path}
              alt={`card-img-${index}`}
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
