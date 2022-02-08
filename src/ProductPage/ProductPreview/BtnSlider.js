import React from "react";
import "./ProductPreview.css";
import leftArrow from "../../ICONS/InProductPage/arrow/left-arrow.svg";
import rightArrow from "../../ICONS/InProductPage/arrow/right-arrow.svg";
export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img  src={direction === "next" ? rightArrow : leftArrow} alt='x' />
    </button>
  );
}
