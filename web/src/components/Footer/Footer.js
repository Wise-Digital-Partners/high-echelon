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
      <>
        {/*
     This example requires Tailwind CSS v2.0+ 
     
     This example requires some changes to your config:
     
     ```
     // tailwind.config.js
     module.exports = {
       // ...
       plugins: [
         // ...
         require('@tailwindcss/forms'),
       ],
     }
     ```
   */}
        <footer className="bg-secondary-400" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="mt-8 xl:mt-0">
                <AniLink fade to="/" className="flex justify-center md:block">
                  <img src={Logo} alt="logo" />
                </AniLink>

                <p className=" mt-4 text-base text-center md:text-left text-white hover:text-primary-400">
                  <a href="tel:404-446-9338">(404) 446-9338</a>
                </p>
                <p className="mt-4 text-base text-center md:text-left text-white hover:text-primary-400 ">
                  <a
                    href="mailto:info@highecheloncpa.com"
                    
                  >
                    info@highecheloncpa.com
                  </a>
                </p>
              </div>
              <div className="grid  gap-8 xl:col-span-2 mt-8">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-200 tracking-wider uppercase">
                      Servies
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a
                          href="/small-business-consulting-services-atlanta/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Small Business Consulting
                        </a>
                      </li>

                      <li>
                        <a
                          href="/small-business-accounting-services-atlanta/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Accounting Services
                        </a>
                      </li>

                      <li>
                        <a
                          href="/payroll-management-services-atlanta/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Payroll Management
                        </a>
                      </li>

                      <li>
                        <a
                          href="/small-business-tax-preparation-services-atlanta/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Income Tax Preparation
                        </a>
                      </li>

                      <li>
                        <a
                          href="/business-coaching-advisory-services-atlanta/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Business Coaching & Advisory Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/cyber-security-data-protection-atlanta/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Cybersecurity & Data Protection
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary-200 tracking-wider uppercase">
                      About
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a
                          href="/testimonials/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Reviews
                        </a>
                      </li>

                      <li>
                        <a
                          href="/about/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          About High Echelon
                        </a>
                      </li>

                      <li>
                        <a
                          href="/financial-advisor-cpa/"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          Financial Advisors | CPA Referral Program
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-200 tracking-wider uppercase">
                      Company
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          About{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Blog{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Jobs{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Press{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Partners{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary-200 tracking-wider uppercase">
                      Legal
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Claim{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Privacy{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-sm text-white hover:text-primary-400"
                        >
                          {" "}
                          Terms{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center justify-center">
              <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between lg:items-center lg:pt-4">
                <div className="lg:flex lg:items-center mb-8 lg:mb-0 text-sm">
                  <ul className="block md:flex md:items-center md:flex-wrap space-x-4 justify-center text-center lg:justify-start">
                    <li className="text-gray-50">© {getYear()} High Echelon</li>
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
                        <p className="text-primary-200 mb-0 text-sm">
                          Powered by
                        </p>{" "}
                        <img src={nestLogo} alt="NEST logo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>

      <ModalContact />
    </>
  );
};

export default Footer;
