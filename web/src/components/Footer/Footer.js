import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState } from "react";

import nestLogo from "../../images/global/Nest Logo.svg";
import Logo from "../../images/global/Logo.svg";
import ModalContact from "../Modal/ModalContact";

const Footer = ({ hideFooter }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

// const currentWidth=0;

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);


  // const isBrowser = typeof window !== "undefined"
  // if (isBrowser) {
  //   currentWidth = window.innerWidth;
  // }



  return (
    <>
      <footer
        className={`bg-secondary-400 pb-12 lg:pb-6 ${
          hideFooter && "hidden"
        }`}
      >

        <div className="container pt-20">
          <div className="grid lg:grid-cols-12 lg:justify-between space-y-16 lg:space-y-0 mb-10 md:mb-16">
            <div className="lg:col-start-1 lg:col-span-3">
              <div className="grid md:grid-cols-2 md:flex md:flex-col items-end md:items-start">
                <AniLink fade to="/" className="flex justify-center md:block">
                  <img src={Logo} alt="logo" />
                </AniLink>
                <div className="md:flex md:items-center pl-4 md:pt-6 pt-10">
                  <ul className="text-white text-sm list-none flex justify-center items-center flex-col md:block">
                    <li><a href="tel:404-446-9338" className="hover:text-primary-100">(404) 446-9338</a></li> 
                    <li><a href="mailto:info@highecheloncpa.com" className="hover:text-primary-100">info@highecheloncpa.com</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-end-13 md:col-span-9 md:pt-5 pt-0 mt-10">
              <ul className="grid-cols-3 grid-rows-2 grid text-white lg:justify-end lg:gap-x-5 justify-around items-stretch">
                  <li class = " text-center">
                    <AniLink
                        fade
                        to="/small-business-consulting-services-atlanta/"
                        className="text-sm font-heading hover:text-primary-100"
                      >
                      Small Business Consulting
                    </AniLink>                
                  </li>
                  <li class = " text-center">
                    <AniLink
                        fade
                        to="/small-business-accounting-services-atlanta/"
                        className="text-sm font-heading hover:text-primary-100"
                      >
                      Accounting
                    </AniLink>                
                  </li>
                  <li class = " text-center">
                    <AniLink
                        fade
                        to="/payroll-management-services-atlanta/"
                        className="text-sm font-heading hover:text-primary-100"
                      >
                      Payroll Management
                    </AniLink>                
                  </li>
                  <li class = " text-center">
                    <AniLink
                        fade
                        to="/small-business-tax-preparation-services-atlanta/"
                        className="text-sm font-heading hover:text-primary-100"
                      >
                      Tax Preparation
                    </AniLink>                
                  </li>                  
                  <li class = " text-center">
                    <AniLink
                        fade
                      to="/business-coaching-advisory-services-atlanta/"
                        className="text-sm font-heading hover:text-primary-100"
                      >
                    Business Coaching & Advisory Services
                    </AniLink>                
                  </li>                  
                  <li class = " text-center">
                    <AniLink
                        fade
                      to="/cyber-security-data-protection-atlanta/"
                        className="text-sm font-heading hover:text-primary-100"
                      >
                    Cybersecurity & Data Protection
                    </AniLink>                
                  </li>
                </ul>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between lg:items-center lg:pt-4">
 
            <div className="lg:flex lg:items-center mb-8 lg:mb-0 text-sm">
              <ul className="block md:flex md:items-center md:flex-wrap space-x-4 justify-center text-center lg:justify-start">
                <li className="text-gray-50">
                  © {getYear()} High Echelon
                </li>
                <div className="flex justify-center mt-6 md:mt-0">
                  <li className="">
                    <AniLink
                      fade
                      to="/privacy-policy/"
                      className="text-gray-50 hover:text-primary-100 no-underline"
                    >
                      Privacy Policy
                    </AniLink>
                  </li>

                </div>
                <li className="block md:flex w-full md:w-auto mt-6 md:mt-0">
                  <a
                    className="no-underline text-gray-50 hover:text-primary-100 flex items-center justify-center lg:justify-start space-x-1"
                    href="https://www.wisedigitalpartners.com/nest-by-wise/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-primary-200 mb-0 text-sm">Powered by</p>{" "}
                    <img src={nestLogo} alt="NEST logo" />
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
