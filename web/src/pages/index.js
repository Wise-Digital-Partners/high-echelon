import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState } from "react";
import "../sass/global.scss";

import Hero from "../components/Hero/HeroFullWidth";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
// import SliderMobileCards from "../components/Slider/SliderMobileCards";
// import Carousel from "../components/Repeating/Carousel";
import About from "../components/Repeating/About";
import ValueProps from "../components/Repeating/ValueProps";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import ButtonGhost from "../components/Button/ButtonGhost";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import CallToAction from "../components/Repeating/CTA";
import mark from "../images/1.0 Homepage/1.0 Homepage/2.0 HE seal.png";
// import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  // const handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
    document.getElementById("bottom-right-modal").style.display = "block";
  };
  // const openContactModal = () => {
  //   document.getElementById("bottom-right-modal").style.display = "block";
  // }

  // const closeContactModal = () => {
  //   document.getElementById("bottom-right-modal").style.display = "none";
  // }

  // const [bookCall, setBookCall] = useState(0);

  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Small Business CPA Atlanta | High Echelon"
        description="High Echelon is a small business CPA firm serving Atlanta & beyond specializing in small businesses here to simplify your books. Learn more here!"
      />
      <section className="w-full block lg:hidden md:hidden relative">
        <GatsbyImage
          image={data.heroMobile.childImageSharp.gatsbyImageData}
          className="md:hidden w-full"
        />
        <div className="absolute top-0 px-6 pt-32 pb-14 text-center">
          <p className="font-heading text-white text-5xl tracking-wider mb-6">
            WE ARE HIGH ECHELON
          </p>
          <p className="font-body text-xl text-white mb-8">
            Elevated Consulting, Payroll, Accounting & Tax Services
          </p>
          <div className="flex justify-center md:justify-center space-x-4 md:space-x-5">
            {/* <ButtonSolidGold onClick={()=>openContactModal()} text="Book a Call" /> */}
            <ButtonSolidGold
              data-modal-open="bottom-right-modal"
              onKeyDown={clickHandler}
              onClick={clickHandler}
              text="Book a Call"
            />
          </div>
        </div>
        <div className="relative mb-32 flex justify-center">
          <div className="container bg-primary-700 flex justify-center md:justify-center items-center flex-col rounded-[8px]">
            <svg
              width="324"
              height="2"
              viewBox="0 0 324 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-7"
            >
              <line
                x1="0.900024"
                y1="1"
                x2="323.1"
                y2="1"
                stroke="url(#paint0_linear_1192_6745)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1192_6745"
                  x1="0.900024"
                  y1="2.50435"
                  x2="315.429"
                  y2="2.50107"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A2A09D" stopOpacity="0" />
                  <stop offset="0.145833" stopColor="#CB9636" />
                  <stop offset="0.265625" stopColor="#CFA855" />
                  <stop offset="0.427083" stopColor="#FCE4A7" />
                  <stop offset="0.578125" stopColor="#F0D592" />
                  <stop offset="0.713542" stopColor="#CFA855" />
                  <stop offset="0.828125" stopColor="#CB9636" />
                  <stop offset="1" stopColor="#A7A7A7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.0267 30.523L61.6927 15.8497C61.3549 15.5462 60.4847 15.3012 60.1812 15.6389L60.164 15.7055C60.0229 15.8406 59.924 16.0382 59.8756 16.2076C59.7597 16.61 59.7153 17.0536 59.7254 17.4711C59.7355 17.8684 59.8061 18.2657 59.9351 18.6418C59.9956 18.8182 60.0743 18.9896 60.156 19.157C60.1983 19.2437 60.2417 19.3305 60.2891 19.4142C57.2247 22.1427 51.6325 28.0536 50.0091 36.0012C49.9768 36.1565 49.9042 36.3027 49.7933 36.4167C48.0499 38.1974 45.6924 39.2924 43.2321 39.4326C39.4095 39.6524 35.5476 39.5092 31.7512 39.0101L30.3789 38.8306C29.5762 38.7268 28.7897 38.7863 28.0325 38.9647C27.8974 38.996 27.7582 38.994 27.6251 38.9557C26.3355 38.5866 22.6692 37.8455 19.5363 40.1536C17.6769 41.5239 16.5103 43.6041 15.8296 45.775C15.3971 47.1534 15.144 48.5852 15.0028 50.0211C14.9221 50.8378 14.8556 51.6697 14.8636 52.4915C14.8697 53.0522 14.7971 53.6108 14.7991 54.1704C14.8001 54.5747 14.8546 54.9771 14.8647 55.3804C14.8737 55.7515 14.784 56.1659 14.9262 56.5208C15.1833 57.1651 16.6242 55.6879 16.7744 55.46C17.3865 54.5253 17.4904 53.3738 17.5206 52.2858C17.5498 51.2059 17.6124 50.1492 17.7616 49.0773C18.0036 47.3349 18.4493 45.5663 19.3709 44.0508C19.8025 43.3409 20.347 42.6935 21.0165 42.1964C21.3896 41.9181 21.7788 41.7044 22.171 41.541C22.9041 41.2365 23.6099 42.018 23.2106 42.7036C23.1521 42.8045 23.0957 42.9063 23.0402 43.0112C22.3535 44.3018 21.8897 45.8315 21.6205 47.6908C20.833 53.1348 21.8433 58.5556 22.8194 63.798C23.258 66.1565 23.3427 67.5631 23.5807 69.8409C23.5918 69.9932 23.5958 70.1424 23.5454 70.2906C23.4849 70.4701 23.378 70.6334 23.2852 70.7978C23.252 70.8563 23.2187 70.9158 23.1844 70.9743C23.1108 71.061 23.0392 71.1507 22.9767 71.2748C22.9152 71.3958 22.9142 71.5722 23.0322 71.6378C23.0775 71.663 23.131 71.666 23.1824 71.668C23.2076 71.668 24.823 71.7426 25.1809 71.7184C25.2686 71.7124 26.1519 71.7154 26.3254 71.546C26.4242 71.4492 26.4161 71.2899 26.401 71.1527C26.3758 70.9188 26.3496 70.6859 26.3234 70.452C26.2608 69.8853 26.0995 69.3488 26.038 68.7862C25.9825 68.2861 25.9261 67.7869 25.8666 67.2878C25.7093 65.9669 25.5419 64.644 25.2989 63.3351C24.9157 61.2741 24.5285 59.1848 24.2522 57.0915C24.1776 56.5198 24.709 56.0499 25.2676 56.1941C26.5623 56.5279 28.1424 56.8112 29.7708 56.8112C29.7809 56.8112 29.791 56.8112 29.8011 56.8112C29.8011 56.8112 36.326 69.9559 36.3674 70.34C36.4057 70.7061 36.198 71.1164 36.3371 71.4482C36.4914 71.8142 39.8461 71.6892 39.9994 71.4563C40.1879 71.1689 39.9096 70.815 39.7685 70.573C39.5456 70.1908 32.932 57.3789 32.932 57.3789C32.7101 56.9352 32.9289 56.4028 33.3968 56.2395C33.8939 56.0651 34.3789 55.8462 34.8428 55.572C35.5052 55.1807 36.085 54.6967 36.5942 54.1341C36.8201 53.884 37.1579 53.7771 37.4765 53.8871C39.7614 54.6756 44.5308 55.7273 52.6217 56.8374C53.3638 56.9393 54.0828 56.9897 54.7775 56.9897C54.9873 56.9897 55.194 56.9836 55.3976 56.9725C55.8111 56.9504 56.169 57.2549 56.2336 57.6643L58.0243 68.9243L58.1151 69.493C58.1151 69.493 58.2099 70.4943 58.2462 70.6829C58.2845 70.8825 58.2795 71.067 58.227 71.2637C58.1877 71.4099 58.099 71.6398 58.1776 71.786C58.2432 71.909 58.4589 71.9362 58.586 71.911C59.3281 71.909 60.0713 71.906 60.8134 71.908C60.9566 71.908 61.5737 71.916 61.6977 71.8697C61.9205 71.787 61.8984 71.5178 61.8187 71.3141C61.6644 70.9178 61.3579 70.6203 61.123 70.2735C61.123 70.2735 61.0463 70.1495 60.9203 69.9458C60.9152 69.9317 60.9092 69.9165 60.9041 69.9024C60.7912 69.607 60.6843 69.3095 60.5875 69.008L58.6888 57.0714C58.6273 56.6842 58.8532 56.3191 59.2172 56.1719C60.3647 55.7091 61.3952 55.0487 62.2987 54.2087L62.2906 54.2803L66.9763 54.8349C67.544 54.9024 67.8717 55.5145 67.6126 56.0237L64.5805 61.989L64.2478 62.6444C64.2024 62.6918 64.156 62.7382 64.1106 62.7856C63.9614 62.9399 63.8162 63.0982 63.666 63.2504C63.5389 63.3805 63.426 63.4813 63.2596 63.5166C63.188 63.5318 63.1457 63.5781 63.1174 63.6306C63.1114 63.6397 63.1074 63.6528 63.1033 63.6638C63.0953 63.688 63.0882 63.7102 63.0882 63.7354C63.0882 63.7465 63.0821 63.7516 63.0821 63.7637C63.0842 64.1257 64.0743 65.8469 64.4857 66.2684C65.0161 66.8129 65.2561 66.1827 65.4941 65.7269C65.6534 65.4214 65.8127 65.1158 65.972 64.8113C66.1687 64.4352 66.5548 63.679 66.5518 63.676L71.4987 53.9435C71.7579 53.4333 71.4301 52.8212 70.8624 52.7537L65.358 52.1033C64.7893 52.0358 64.4676 51.4277 64.7257 50.9165C65.2319 49.9152 65.6423 48.799 65.9458 47.5648C66.7666 44.2242 66.6113 40.4994 65.486 36.4953C65.4114 36.2281 65.3448 35.9861 65.2854 35.7663C65.1442 35.243 65.5384 34.7327 66.0799 34.7327H75.7398C76.0231 34.7327 76.2863 34.5865 76.4375 34.3466L78.1749 31.5676C78.3866 31.2288 78.3241 30.7871 78.0277 30.5199L78.0267 30.523ZM52.9625 54.3398C44.9079 53.2347 40.9381 52.31 39.0546 51.7494C38.62 51.6203 38.3588 51.1666 38.4949 50.735C38.7228 50.0171 38.8922 49.2386 39.0042 48.3997C39.0647 47.9419 38.7138 47.5295 38.253 47.4912L37.3767 47.4196C36.9482 47.3843 36.5549 47.6848 36.4974 48.1103C36.1526 50.6725 35.1664 52.4492 33.5612 53.399C30.7167 55.0839 26.5089 54.0171 24.4347 53.3143C24.1091 53.2044 23.8892 52.9029 23.8802 52.5591C23.8408 51.0476 23.8973 49.5421 24.1131 48.0528C24.34 46.4869 24.7161 45.2265 25.2636 44.197C26.3526 42.1521 28.1404 41.0792 30.0391 41.3293C30.0744 41.3343 31.4225 41.5108 31.4225 41.5108C35.3742 42.0291 39.3954 42.1763 43.3743 41.9504C45.1227 41.8506 46.8268 41.3636 48.3736 40.5579C48.909 40.2796 49.5513 40.6345 49.5745 41.2375C49.75 45.7246 51.3391 50.1502 54.3298 54.4558C53.8922 54.4386 53.4395 54.4033 52.9615 54.3378L52.9625 54.3398ZM63.4966 46.9648C62.8654 49.5341 61.5061 52.3332 58.6546 53.6682C58.2361 53.8639 57.7229 53.6884 57.5343 53.2669C55.801 49.3919 55.4249 45.8194 56.4483 42.632C57.504 39.3439 59.8414 37.1054 61.5293 35.847C61.9931 35.5011 62.6546 35.729 62.8089 36.2866C62.8855 36.5649 62.9692 36.8624 63.0579 37.18C64.0653 40.7606 64.2125 44.0518 63.4966 46.9638V46.9648ZM65.3065 32.3178C64.9466 32.2996 64.5896 32.2593 64.2347 32.2301C63.6024 32.1786 62.9743 32.1645 62.3461 32.3793C61.4819 32.6737 60.7358 33.313 59.9977 33.8313C59.1789 34.406 58.4236 35.1048 57.7309 35.8238C56.0853 37.5289 54.7886 39.5707 54.0576 41.8304C53.9688 42.1047 53.8882 42.382 53.8166 42.6603C53.5937 43.5264 52.3091 43.4236 52.2063 42.5352C52.0308 41.0308 52.0369 39.5213 52.2274 38.0108C52.8597 32.9843 55.4188 28.6848 57.9699 25.5267C58.2653 25.1617 58.8068 25.1253 59.1547 25.441C61.5182 27.5897 63.8122 29.8131 66.1404 32.0002C66.5236 32.3601 65.4709 32.3249 65.3086 32.3168L65.3065 32.3178ZM70.5962 28.0193L69.5405 30.2931C69.3026 30.8043 68.634 30.9323 68.2267 30.5411C66.8221 29.192 64.9294 27.381 63.2394 25.7929C62.82 25.3986 62.4076 24.9933 61.976 24.6141C61.5263 24.2189 61.0282 23.877 60.6097 23.4465C60.4504 23.2831 60.1872 22.9534 60.4212 22.7447C60.7257 22.4734 61.0221 22.1931 61.3196 21.9128C61.6917 21.5609 62.0708 21.2171 62.457 20.8823C62.7696 20.611 63.2314 20.6211 63.5399 20.8974L70.4006 27.0603C70.6699 27.3023 70.7495 27.6905 70.5973 28.0183L70.5962 28.0193ZM74.9825 31.9689C74.927 32.0556 74.8544 32.1161 74.7718 32.1575C74.5318 32.2765 74.2363 32.226 73.9782 32.224C73.5577 32.22 73.1383 32.2149 72.7178 32.2149C72.1168 32.2149 71.7185 31.5918 71.9716 31.0463L72.3457 30.2396C72.5786 29.7385 73.23 29.6044 73.6414 29.9744C73.8572 30.168 74.073 30.3616 74.2888 30.5552C74.5267 30.769 75.289 31.1985 75.2255 31.5323C75.1973 31.6785 75.0622 31.8459 74.9835 31.9689H74.9825Z"
                fill="url(#paint0_linear_1112_665)"
              />
              <path
                d="M46.5493 0.300186C21.102 0.300186 0.398926 21.0033 0.398926 46.4506C0.398926 71.8979 21.102 92.601 46.5493 92.601C71.9966 92.601 92.6998 71.8979 92.6998 46.4506C92.6998 21.0033 71.9966 0.300186 46.5493 0.300186ZM46.5493 90.2032C22.424 90.2032 2.79674 70.576 2.79674 46.4506C2.79674 22.3252 22.4229 2.69901 46.5493 2.69901C70.6757 2.69901 90.3019 22.3262 90.3019 46.4516C90.3019 70.577 70.6747 90.2042 46.5493 90.2042V90.2032Z"
                fill="url(#paint1_linear_1112_665)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1112_665"
                  x1="13.2871"
                  y1="71.9196"
                  x2="75.0241"
                  y2="71.9196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.239583" stopColor="#D2B15E" />
                  <stop offset="0.421875" stopColor="#CB9636" />
                  <stop offset="0.6875" stopColor="#D2B15E" />
                  <stop offset="1" stopColor="#CEA045" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1112_665"
                  x1="-1.79871"
                  y1="92.601"
                  x2="87.9382"
                  y2="92.601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.239583" stopColor="#D2B15E" />
                  <stop offset="0.421875" stopColor="#CB9636" />
                  <stop offset="0.6875" stopColor="#D2B15E" />
                  <stop offset="1" stopColor="#CEA045" />
                </linearGradient>
              </defs>
            </svg>
            <p className="font-body text-mobile-5xl text-white mt-9 mb-6 max-w-[560px] md:w-3/5 sm:w-full text-center">
              A Small Business CPA Firm Serving Atlanta & Beyond
            </p>
            <div className="mb-20 flex justify-center">
              <p className="font-body text-base text-white text-center leading-[30px]">
                If you’re looking for a modern CPA firm that can simplify your
                books, you’ve come to the right place. At High Echelon, we value
                client communication, accuracy, a streamlined workflow, and
                creating a positive experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:block md:block">
        <Hero
          backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
          backgroundPosition="0% 20%"
          mobileRemoveBackground={true}
          textAlignment="text-center"
          padding="pt-10 md:pt-12 pb-14 md:pb-60"
        >
          <p className="font-heading text-white text-mobile-7xl md:text-7xl tracking-wider mb-12 md:mb-4 mt-40">
            WE ARE HIGH ECHELON
          </p>
          <p className="font-body text-lg md:text-xl text-white font-semibold mb-16">
            Elevated Consulting, Payroll, Accounting & Tax Services
          </p>
          <div className="flex justify-center md:justify-center space-x-4 md:space-x-5">
            {/* <ButtonSolidGold onClick={()=>openContactModal()} text="Book a Call" /> */}
            <ButtonSolidGold
              data-modal-open="bottom-right-modal"
              onKeyDown={clickHandler}
              onClick={clickHandler}
              text="Book a Call"
            />
          </div>
        </Hero>
        <div className="relative md:top-[-100px] sm:top-0 md:mx-28 sm:mx-4 mb-20 flex justify-center">
          <div className="absolute sm:flex container bg-primary-700 flex justify-center items-center flex-col rounded-[8px]">
            <svg
              width="1094"
              height="3"
              viewBox="0 0 1094 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-7"
            >
              <line
                y1="1.5"
                x2="1094"
                y2="1.5"
                stroke="url(#paint0_linear_1129_1424)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1129_1424"
                  x1="0"
                  y1="3.50435"
                  x2="1067.95"
                  y2="3.46651"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A2A09D" stopOpacity="0" />
                  <stop offset="0.145833" stopColor="#CB9636" />
                  <stop offset="0.265625" stopColor="#CFA855" />
                  <stop offset="0.427083" stopColor="#FCE4A7" />
                  <stop offset="0.578125" stopColor="#F0D592" />
                  <stop offset="0.713542" stopColor="#CFA855" />
                  <stop offset="0.828125" stopColor="#CB9636" />
                  <stop offset="1" stopColor="#A7A7A7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={mark} alt="mark svg" className="h-[93px] w-[93px]" />
           

            <p className="font-body text-5xl text-white mt-9 mb-6 max-w-[560px] md:w-3/5 sm:w-full text-center">
              A Small Business CPA Firm Serving Atlanta & Beyond
            </p>
            <div className="mb-20 flex justify-center max-w-[736px] md:w-2/3 sm:w-full ">
              <p className="font-body text-base text-white text-center leading-[30px]">
                If you’re looking for a modern CPA firm that can simplify your
                books, you’ve come to the right place. At High Echelon, we value
                client communication, accuracy, a streamlined workflow, and
                creating a positive experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-80 md:mt-120 mb-20 md:mb-32 md:pt-24">
        <div className="container">
          <div className="gap-y-8 md:gap-x-10 lg:gap-x-16 items-center mt-8">
            <div className="mb-8">
              <h3 className="md:w-2/3 text-primary-700 text-4xl font-light md:text-4xl-x md:font-normal">
                We are Here To Make Your Business Better
              </h3>
              <p className="md:w-2/3 sm:w-full text-xl md:text-base mt-6">
                Get streamlined, end-to-end services for everything from your
                busines entity formation to accounting, payroll, and income tax
                needs.
              </p>
            </div>
            <div className="block w-full md:flex lg:flex md:mb-5 mb-4">
              <AniLink
                fade
                to="/small-business-consulting-services-atlanta/"
                className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2"
              >
                <GatsbyImage
                  image={
                    data.smallBusinessConsultingImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px] mb-3 md:max-w-[240px] w-full"
                />
                <div className="md:flex md:justify-center py-2 pl-3 mb-6 md:mb-0 max-w-[360px]">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Small Business Consulting
                    </h3>
                    <p className="text-base mb-4">
                      Need advice or help in navigating the best way to form
                      your business? The small business consulting experts at
                      High Echelon are here to help.
                    </p>
                  </div>
                  <ButtonGhost
                    to="/small-business-consulting-services-atlanta/"
                    text="Learn More"
                    className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
              <AniLink
                fade
                to="/small-business-accounting-services-atlanta/"
                className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2"
              >
                <GatsbyImage
                  image={
                    data.accountServicesImage.childImageSharp.gatsbyImageData
                  }
                  alt="Accounting Services"
                  className="p-2 rounded-[8px] mb-3 md:max-w-[240px] w-full"
                />
                <div className="md:flex md:justify-center  py-2 pl-3 mb-6 md:mb-0 max-w-[360px]">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Accounting Services
                    </h3>
                    <p className="text-base mb-4">
                      Preparation of monthly, quarterly, or annual financial
                      statements for your business.
                    </p>
                  </div>
                  <ButtonGhost
                    href="/small-business-accounting-services-atlanta/"
                    text="Learn More"
                    className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
            </div>
            <div className="block w-full md:flex lg:flex md:mb-5 mb-4">
              <AniLink
                fade
                to="/payroll-management-services-atlanta/"
                className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2"
              >
                <GatsbyImage
                  image={
                    data.payrollManagementImage.childImageSharp.gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px] mb-3 md:max-w-[240px] w-full"
                />
                <div className="md:flex md:justify-center  py-2 pl-3 mb-6 md:mb-0 max-w-[360px]">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Payroll Management
                    </h3>
                    <p className="text-base mb-4">
                      Get lightweight, cost-efficient payroll processing,
                      complete with automated hiring and termination of
                      employees.
                    </p>
                  </div>
                  <ButtonGhost
                    href="/payroll-management-services-atlanta/"
                    text="Learn More"
                    className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
              <AniLink
                fade
                to="/small-business-tax-preparation-services-atlanta/"
                className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2"
              >
                <GatsbyImage
                  image={data.taxImage.childImageSharp.gatsbyImageData}
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px] mb-3 md:max-w-[240px] w-full"
                />
                <div className="md:flex md:justify-center  py-2 pl-3 mb-6 md:mb-0 max-w-[360px]">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Tax Preparation
                    </h3>
                    <p className="text-base mb-4">
                      Get tax preparation for yourself or your business.
                    </p>
                  </div>
                  <ButtonGhost
                    href="/small-business-tax-preparation-services-atlanta/"
                    text="Learn More"
                    className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      </section>
      <ValueProps />
      {/* <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 sm:px-2">
        <p className="text-4xl-x font-light mb-0 text-center">Our Clients Say Its Best</p>
        <CarouselForm />
      </section> */}
      <About />
      <svg
        className="w-full"
        width="1200"
        height="3"
        viewBox="0 0 1200 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.5h1200"
          stroke="url(#paint0_linear_1129_1425)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1129_1425"
            x1="0"
            y1="2.00435"
            x2="1182.95"
            y2="1.96651"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A2A09D" stopOpacity="0" />
            <stop offset=".145833" stopColor="#CB9636" />
            <stop offset=".265625" stopColor="#CFA855" />
            <stop offset=".427083" stopColor="#FCE4A7" />
            <stop offset=".578125" stopColor="#F0D592" />
            <stop offset=".713542" stopColor="#CFA855" />
            <stop offset=".828125" stopColor="#CB9636" />
            <stop offset="1" stopColor="#A7A7A7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <CallToAction />
      <svg
        className="w-full"
        width="1200"
        height="3"
        viewBox="0 0 1200 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.5h1200"
          stroke="url(#paint0_linear_1129_1425)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1129_1425"
            x1="0"
            y1="2.00435"
            x2="1182.95"
            y2="1.96651"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A2A09D" stopOpacity="0" />
            <stop offset=".145833" stopColor="#CB9636" />
            <stop offset=".265625" stopColor="#CFA855" />
            <stop offset=".427083" stopColor="#FCE4A7" />
            <stop offset=".578125" stopColor="#F0D592" />
            <stop offset=".713542" stopColor="#CFA855" />
            <stop offset=".828125" stopColor="#CB9636" />
            <stop offset="1" stopColor="#A7A7A7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* <div id="bottom-right-modal" data-modal-placement="bottom-right" tabindex="-1" className="h-full fade hidden overflow-y-auto overflow-x-hidden bg-white fixed top-0 right-0 right-0 z-50 w-full md:w-1/2 h-modal md:h-full">
        <div className="relative w-full h-full md:h-auto">
            <div className=" bg-white dark:bg-gray-700">
                <div className="flex justify-between items-center p-5 border-b dark:border-primary-500">
                  <div className="flex items-center">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 text-primary-100"
                    >
                      <path
                        d="M1.08124.769072L4.33117.019088c.35312-.081249.71561.103122.85936.434365L6.6905 3.95338c.13125.30624.04375.66561-.21562.87498L4.58117 6.37833c1.12498 2.39682 3.09056 4.39057 5.53743 5.53737l1.5499-1.8937c.2125-.25937.5688-.34687.875-.21562l3.4999 1.49992c.3344.1469.5188.5094.4375.8625l-.75 3.25c-.0781.3375-.3781.5812-.7312.5812C6.99674 16 .5 9.51576.5 1.50031c0-.35.240621-.653115.58124-.731238z"
                        fill="#D2B15E"
                      />
                    </svg>
                    
                    <a
                      href="tel:404-446-9338"
                      className="text-sm font-semibold text-primary-100"
                    >
                      (404) 446-9338
                    </a>
                  </div>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="bottom-right-modal" onClick={()=>closeContactModal()}>
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="pb-8 space-y-6 md:px-20 px-2">
                  <p className="text-4xl text-center my-8">Contact Us</p>
                  <div className="mb-10 text-black md:flex block">
                    <button className={bookCall==1 ? "w-full md:w-1/2 block md:flex justify-center items-center border-black bg-primary-100 py-2 text-white mb-3 md:mb-0" : "block w-full md:w-1/2 md:flex justify-center items-center bg-gray-200 py-2 mb-3 md:mb-0"} onClick={()=>setBookCall(1)}>
                      <div className="flex justify-center items-center">
                        <i className="fal fa-calendar mr-2 text-xl"></i>
                        <p className="m-0">Book a Call</p>
                      </div>
                    </button>
                    <button className={bookCall==0 ? "w-full md:w-1/2 block md:flex justify-center items-center border-black bg-primary-100 py-2 text-white mb-3 md:mb-0" : "block w-full md:w-1/2 md:flex justify-center items-center bg-gray-200 py-2 mb-3 md:mb-0"} onClick={()=>setBookCall(0)}>
                      <div className="flex justify-center items-center">
                        <i class="fal fa-envelope mr-2 text-xl"></i>
                        <p className="m-0">Contact Us</p>
                      </div>
                    </button>
                  </div>
                  { bookCall==0 ?
                    <div className="mb-8">
                      <div className="mb-5">
                        <label
                          className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                          htmlFor="first-name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          onChange={()=>handleChange()}
                          required={true}
                          className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                        />
                      </div>
                      <div className="block md:flex">
                        <div className="mb-5 w-full md:w-1/2 mr-3">
                          <label
                            className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                            htmlFor="phone-number"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone-number"
                            onChange={()=>handleChange()}
                            required={true}
                            className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                          />
                        </div>
                        <div className="mb-5 md:w-1/2">
                          <label
                            className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                            htmlFor="email-address"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email-address"
                            onChange={()=>handleChange()}
                            required={true}
                            className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                          />
                        </div>
                      </div>
                      <div className="mb-5">
                        <label
                          className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                          htmlFor="first-name"
                        >
                          What Can We Help You With ?
                        </label>
                        <select name="helps" className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear">
                          <option value="" disabled selected>Select Ones ...</option>
                          <option value="0">Accounting</option>
                          <option value="1">Service</option>
                          <option value="2">About</option>
                        </select>
                      </div>
                      <div className="mb-5">
                        <label
                          className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                          htmlFor="first-name"
                        >
                          Message(Optional)
                        </label>
                        <textarea
                          type="textarea"
                          name="message"
                          onChange={()=>handleChange()}
                          required={true}
                          rows="5"
                          className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                        />
                      </div>
                      <ButtonSolid
                        // onClick={()}
                        text="Send"
                        altStyle={true}
                        className="bg-primary-700 min-w-0 text-base w-1/3"
                      />
                    </div>
                  : 
                    <div className="mb-8">
                      <iframe src="https://calendly.com/michellehighechelon/30min" className="w-full h-full overflow-hidden min-h-[1200px]"></iframe>
                    </div>
                  }
                        
                </div>
            </div>
        </div>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    smallBusinessConsultingImage: file(
      relativePath: { eq: "1.0 Homepage/2.0 Business Consulting.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 360)
      }
    }
    accountServicesImage: file(
      relativePath: { eq: "1.0 Homepage/2.0 Accounting.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 360)
      }
    }
    payrollManagementImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 360)
      }
    }
    taxImage: file(relativePath: { eq: "1.0 Homepage/tax desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 360)
      }
    }

    smallBusinessConsultingMobileImage: file(
      relativePath: { eq: "1.0 Homepage/2.0 Business Consulting.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    accountServicesMobileImage: file(
      relativePath: { eq: "1.0 Homepage/2.0 Accounting.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    payrollManagementMobileImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    incomeTaxPreparationMobileImage: file(
      relativePath: { eq: "1.0 Homepage/3.3 Income Tax Prep desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }

    heroDesktop: file(relativePath: { eq: "home/1.0 Hero desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 390)
      }
    }
    intro: file(relativePath: { eq: "home/2.0 intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 668)
      }
    }
    realEstateAgents: file(relativePath: { eq: "home/3.0 Client 1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    homeBuyersOwners: file(relativePath: { eq: "home/3.1 Clietn 2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    veterans: file(relativePath: { eq: "home/3.2 Cient 3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    purchase: file(relativePath: { eq: "home/5.0 Purchase.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    refinance: file(relativePath: { eq: "home/4.0 Refinance.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    conventional: file(relativePath: { eq: "home/6.0 Conventional.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    FHA: file(relativePath: { eq: "home/6.1 FHA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    VA: file(relativePath: { eq: "home/7.0 VA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    jumbo: file(relativePath: { eq: "home/7.1 Jumbo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
  }
`;
export default Page;
