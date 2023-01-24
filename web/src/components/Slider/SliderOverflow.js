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
    position: inherit;
  }
  .slick-slide > div {
    ${tw`md:mx-1.5`}
  }
  .slick-list {
    ${tw`md:-mx-3 p-0! md:overflow-visible`}
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
    dots: false,
    arrows: true,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    slidesToShow: 3,
    initialSlide: 1,
    slidesToScroll: 1,
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
    <StyledSlider className="relative -mr-4 md:mr-0">
      <div className="container">
        <div className="relative left-0 top-0 z-10 h-full w-full  transform bg-white"></div>
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
