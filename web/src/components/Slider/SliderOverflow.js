import React, { useRef } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: initail;
  }
  .slick-slide > div {
    ${tw`mx-3`}
  }
  .slick-list {
    ${tw`p-0`}
  }
`;

const Slider = ({ children }) => {
  const slider = useRef();

  function nextSlide() {
    slider.current.slickNext();
  }
  function prevSlide() {
    slider.current.slickPrev();
  }

  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  };

  return (
    <StyledSlider className="relative">
      <div className="container">
        <div className="relative   transform bg-white"></div>
        <div className="relative">
          <Slick {...sliderSettings} ref={slider}>
            {children}
          </Slick>

          <div className="relative left-0 bottom-0  flex h-12 w-[160px] items-center justify-around bg-white md:flex">
            <button onClick={prevSlide} className="focus:outline-none">
              <i className="fal fa-arrow-left text-2xl text-typography-body transition-colors duration-300 ease-linear hover:text-blue focus:no-underline md:text-3xl"></i>
            </button>

            <div className="h-6 w-px bg-gray-100 md:h-8"></div>

            <button onClick={nextSlide} className="focus:outline-none">
              <i className="fal fa-arrow-right text-2xl text-typography-body transition-colors duration-300 ease-linear hover:text-blue focus:no-underline md:text-3xl"></i>
            </button>
          </div>
        </div>
      </div>

    </StyledSlider>
  );
};

export default Slider;
