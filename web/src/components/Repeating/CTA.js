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
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end md:mb-8">
          <header className="max-w-2xl md:text-left">          
            <HeadingTag class = "text-primary-100 text-4xl-x mb-3 font-light">
              {heading || ["Get a Free Consultation"]}
            </HeadingTag>

            <p className="text-base md:text-base text-white md:mb-0">
              {subtext ||
                "Work smarter, not harder. Get started with High Echelon, a top small business CPA serving the greater Atlanta area and Georgia, today."}
            </p>
          </header>

          <div className="block md:flex md:items-center md:space-x-4">
            <ButtonSolidGold
                href="/"
                text="Book a Call"
                className="w-full md:w-auto mb-28 md:mb-0"
              />
          </div>
        </div>
      
      </div>
      <div className="text-center justify-center flex">
      </div>
    </section>
  );
};

export default CTA;
