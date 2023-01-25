import React, { useRef, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import arrowPrev from "../../images/repeating/testimonials/arrow-left.svg";
import arrowNext from "../../images/repeating/testimonials/arrow-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
  .slick-dots {
    ${tw`w-[450px] relative mt-7 md:mt-0 justify-center items-center space-x-[25px] !flex mx-auto`}
    li, li button:before  {
      ${tw` hidden  `}
      &.slick-active {
        ${tw`!bg-secondary-400 ease-[cubic-bezier(0.680, -0.550, 0.265, 1.550)]`}
      }
    }
  }


`;

const Slider = ({ slideIndex, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center slick-prev"
        aria-label="Previous Slide"
      >
        <img className="group-hover:scale-[2.5] scale-[2] ease transition-all duration-300" src={arrowPrev}></img>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center slick-next w-[95px]"
        aria-label="Next Slide"
      >
        <img className="group-hover:scale-[2.5] scale-[2] ease transition-all duration-300" src={arrowNext}></img>
        {/* <i className="far fa-arrow-right text-primary-100"></i> */}
      </button>
    );
  }

  const sliderSettings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slick {...sliderSettings} ref={slider}>
        {children}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
