import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import ButtonSolidGold from "../Button/ButtonSolidGold";
import houseImg from '../../../src/images/bg.png';
const CTA = ({ heading, headingLevel, subtext, className }) => {
  const HeadingTag = headingLevel || "h2";
  const isBrowser = typeof window !== "undefined";
  // const currentWidth = 0;
  // if (isBrowser) {
  //   const currentWidth = window.innerWidth;
  // }


 
  return (
    // <section
    //   className={`bg-cta pt-14 md:pt-20 pb-18 md:pb-10 ${
    //     className || ""
    //   }`}
    // >
    <section class = "bg-no-repeat bg-cover bg-center md:pb-18 md:pb-18" style={{backgroundImage: `url('${houseImg}')`}}>
      
      <div className="container pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end md:mb-8">
          <header className="max-w-2xl text-center md:text-left">          
            <HeadingTag class = "text-primary-100">
              {heading || ["Get a Free Consultation"]}
            </HeadingTag>

            <p className="font-display text-base md:text-base text-white md:mb-0">
              {subtext ||
                "Work smarter, not harder. Get started with High Echelon, a top small business CPA serving the greater Atlanta area and Georgia, today."}
            </p>
          </header>

          <div className="flex items-center space-x-4">
            <ButtonSolidGold
                href="/request-rates/"
                text="Book a Call"
                className="w-full md:w-auto"
              />
          </div>
        </div>
      
      </div>
      <div className="text-center justify-center flex">
        {/* <svg width="1920" height="2" viewBox="0 0 1920 3" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center">
          <line y1="1.5" x2="1920" y2="1.5" stroke="url(#paint0_linear_1569_821)" stroke-width="3"/>
          <defs>
          <linearGradient id="paint0_linear_1569_821" x1="0" y1="3.50435" x2="2280.71" y2="3.4388" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A2A09D" stop-opacity="0"/>
          <stop offset="0.145833" stop-color="#CB9636"/>
          <stop offset="0.265625" stop-color="#CFA855"/>
          <stop offset="0.427083" stop-color="#FCE4A7"/>
          <stop offset="0.578125" stop-color="#F0D592"/>
          <stop offset="0.713542" stop-color="#CFA855"/>
          <stop offset="0.828125" stop-color="#CB9636"/>
          <stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>  */}
        <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#CB9636"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#CFA855"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      </div>
    </section>
  );
};

export default CTA;
