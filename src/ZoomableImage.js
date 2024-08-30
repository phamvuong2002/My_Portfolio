// src/ZoomableImage.js
import React, { useState, useRef } from "react";
import "./ZoomableImage.css";

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const timeoutRef = useRef(null);

  // Hàm xử lý khi chuột vào hình
  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsZoomed(false); // true to turn on zooming
    }, 500); // 3 giây
  };

  // Hàm xử lý khi chuột rời khỏi hình
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current); // Hủy đếm thời gian
    setIsZoomed(false); // Hủy zoom khi chuột rời khỏi
  };

  return (
    <div
      className={`zoomable-image-container ${isZoomed ? "zoomed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        style={{ maxHeight: "10.5rem" }}
        src={src}
        alt={alt}
        className={`zoomable-image ${isZoomed ? "zoomed" : ""}`}
      />
    </div>
  );
};

export default ZoomableImage;
