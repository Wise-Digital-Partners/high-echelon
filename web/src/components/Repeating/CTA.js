import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import houseImg from '../../../src/images/bg.png';
const CTA = ({ heading, headingLevel, subtext, className }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    // <section
    //   className={`bg-cta pt-14 md:pt-20 pb-18 md:pb-10 ${
    //     className || ""
    //   }`}
    // >
    <section class = "bg-no-repeat bg-cover bg-center md:pt-20 pb-18 md:pb-10" style={{backgroundImage: `url('${houseImg}')`}}>
      <div className="container">
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
            <ButtonSolid
                href="/request-rates/"
                text="Book a Call"
                className="w-full md:w-auto"
              />
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default CTA;
