import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState } from "react";

import nestLogo from "../../images/global/Nest Logo.svg";
import highEchelonLogo from "../../images/global/Logo.svg";
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
        className={`bg-primary-700 pb-12 lg:pb-6 ${hideFooter && "hidden"}`}
      >
        {/* <div className="text-center">
            <svg width="1094" height="2" viewBox="0 0 1712 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center">
              <line y1="1.5" x2="1094" y2="1.5" stroke="url(#paint0_linear_1569_821)" strokeWidth="3"/>
              <defs>
              <linearGradient id="paint0_linear_1569_821" x1="0" y1="3.50435" x2="1094" y2="3.4388" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A2A09D" stopOpacity="0"/>
              <stop offset="0.145833" stopColor="#CB9636"/>
              <stop offset="0.265625" stopColor="#CFA855"/>
              <stop offset="0.427083" stopColor="#FCE4A7"/>
              <stop offset="0.578125" stopColor="#F0D592"/>
              <stop offset="0.713542" stopColor="#CFA855"/>
              <stop offset="0.828125" stopColor="#CB9636"/>
              <stop offset="1" stopColor="#A7A7A7" stopOpacity="0"/>
              </linearGradient>
              </defs>
            </svg> 
          </div> */}
        <div className="container pt-20">
          <div className="grid lg:grid-cols-12 lg:justify-between space-y-16 lg:space-y-0 lg:space-x-8 mb-10 md:mb-16">
            <div className="lg:col-start-1 lg:col-span-3">
              <div className="grid md:grid-cols-2 md:flex md:flex-col items-end md:items-start">
                <AniLink fade to="/" className="flex justify-center md:block">
                  <img src={highEchelonLogo} alt="High Echelon logo" />

                </AniLink>
                <div className="md:flex md:items-center pl-4 md:pt-6 pt-10">
                  <ul class="text-white text-sm list-none flex justify-center items-center flex-col md:block">
                    <li>
                      <a
                        href="tel:404-446-9338"
                        className="hover:text-primary-100"
                      >
                        (404) 446-9338
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@highecheloncpa.com"
                        className="hover:text-primary-100"
                      >
                        info@highecheloncpa.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-end-13 md:col-span-9 md:pt-5 pt-0 mt-10">
              <ul class="block text-white text-sm md:float-right md:flex items-stretch">
                <li class="md:ml-9 lg:ml-9 text-center mb-6">
                  <AniLink
                    fade
                    to="/small-business-consulting-services-atlanta/"
                    className="font-heading hover:text-primary-100"
                  >
                    Small Business Consulting
                  </AniLink>
                </li>
                <li class="md:ml-9 lg:ml-9 text-center mb-6">
                  <AniLink
                    fade
                    to="/small-business-accounting-services-atlanta/"
                    className="font-heading hover:text-primary-100"
                  >
                    Accounting
                  </AniLink>
                </li>
                <li class="md:ml-9 lg:ml-9 text-center mb-6">
                  <AniLink
                    fade
                    to="/payroll-management-services-atlanta/"
                    className="font-heading hover:text-primary-100"
                  >
                    Payroll Management
                  </AniLink>
                </li>
                <li class="md:ml-9 lg:ml-9 text-center">
                  <AniLink
                    fade
                    to="/small-business-tax-preparation-services-atlanta/"
                    className="font-heading hover:text-primary-100"
                  >
                    Tax Preparation
                  </AniLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between lg:items-center lg:pt-4">
            {/* <div className="mb-10 md:hidden">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <ul className="flex items-center flex-wrap space-x-4 justify-center lg:justify-start">
                  <li class = "text-3xl">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-600 transition-colors duration-300 ease-linear"
                    >
                      <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.529928 2.529928 0 01-.19561.97659A2.5301 2.5301 0 016.39 6.352c-.4836.48062-1.13819.74965-1.82.748-.68061-.00046-1.33369-.2688-1.818-.747a2.548165 2.548165 0 01-.55566-.82657A2.548052 2.548052 0 012 4.55c0-.677.27-1.325.753-1.803.48389-.47884 1.13724-.7473 1.818-.747.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z" fill="#fff"/>
                      </svg>
                    </a>
                  </li>
                  <li class = "text-3xl">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-600 transition-colors duration-300 ease-linear"
                    >
                      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2124 12.375l.6221-3.98148H8.94471V5.8098c0-1.08925.54338-2.15101 2.28549-2.15101h1.7684V.268984S11.3938 0 9.85953 0C6.65615 0 4.56228 1.90695 4.56228 5.35906v3.03446H1.00146V12.375h3.56082V22h4.38243v-9.625h3.26769z" fill="#fff"/></svg>
                    </a>
                  </li>
                  <li class = "text-3xl">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-600 transition-colors duration-300 ease-linear"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.93708c-.835.37-1.732.62-2.675.733.973-.58221 1.701-1.49854 2.048-2.578-.9141.54299-1.9146.92519-2.958 1.13-.7016-.74914-1.6309-1.24568-2.6437-1.41253-1.0127-.16685-2.0522.00532-2.9571.48978-.9048.48446-1.6244 1.25411-2.047 2.18945-.4227.93534-.5247 1.98405-.2902 2.9833a13.228982 13.228982 0 01-5.31856-1.4131 13.228884 13.228884 0 01-4.28343-3.4549c-.4.69-.63 1.49-.63 2.342a4.660012 4.660012 0 002.072 3.878 4.64708 4.64708 0 01-2.11-.583v.06c-.00007 1.07572.37203 2.11842 1.05318 2.95102.68115.8326 1.62939 1.4039 2.68382 1.617-.68621.1857-1.40566.213-2.104.08.2975.9256.877 1.735 1.65737 2.3149.78037.5799 1.72255.9013 2.69463.9191-1.65017 1.2954-3.68811 1.9981-5.786 1.995a9.499752 9.499752 0 01-1.111998-.065c2.129478 1.3692 4.608338 2.0958 7.139998 2.093 8.56999 0 13.25499-7.098 13.25499-13.25402 0-.2-.005-.402-.014-.602a9.470192 9.470192 0 002.323-2.41l.002-.003z" fill="#fff"/></svg>
                    </a>
                  </li>
                
                </ul>
              </div>
            </div> */}
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
                  {/* <li>
                    <AniLink
                      fade
                      to="/privacy-policy/"
                      className="text-gray-50 hover:text-primary-100 no-underline"
                    >
                      Accessibility Statement
                    </AniLink>
                  </li> */}
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

            {/* <div className="hidden md:block">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <ul className="flex items-center flex-wrap space-x-4 justify-center lg:justify-start">
                  <li class = "text-3xl">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-600 transition-colors duration-300 ease-linear"
                    >
                      <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.529928 2.529928 0 01-.19561.97659A2.5301 2.5301 0 016.39 6.352c-.4836.48062-1.13819.74965-1.82.748-.68061-.00046-1.33369-.2688-1.818-.747a2.548165 2.548165 0 01-.55566-.82657A2.548052 2.548052 0 012 4.55c0-.677.27-1.325.753-1.803.48389-.47884 1.13724-.7473 1.818-.747.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z" fill="#fff"/>
                      </svg>
                    </a>
                  </li>
                  <li class = "text-3xl">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-600 transition-colors duration-300 ease-linear"
                    >
                      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2124 12.375l.6221-3.98148H8.94471V5.8098c0-1.08925.54338-2.15101 2.28549-2.15101h1.7684V.268984S11.3938 0 9.85953 0C6.65615 0 4.56228 1.90695 4.56228 5.35906v3.03446H1.00146V12.375h3.56082V22h4.38243v-9.625h3.26769z" fill="#fff"/></svg>
                    </a>
                  </li>
                  <li class = "text-3xl">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-600 transition-colors duration-300 ease-linear"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.93708c-.835.37-1.732.62-2.675.733.973-.58221 1.701-1.49854 2.048-2.578-.9141.54299-1.9146.92519-2.958 1.13-.7016-.74914-1.6309-1.24568-2.6437-1.41253-1.0127-.16685-2.0522.00532-2.9571.48978-.9048.48446-1.6244 1.25411-2.047 2.18945-.4227.93534-.5247 1.98405-.2902 2.9833a13.228982 13.228982 0 01-5.31856-1.4131 13.228884 13.228884 0 01-4.28343-3.4549c-.4.69-.63 1.49-.63 2.342a4.660012 4.660012 0 002.072 3.878 4.64708 4.64708 0 01-2.11-.583v.06c-.00007 1.07572.37203 2.11842 1.05318 2.95102.68115.8326 1.62939 1.4039 2.68382 1.617-.68621.1857-1.40566.213-2.104.08.2975.9256.877 1.735 1.65737 2.3149.78037.5799 1.72255.9013 2.69463.9191-1.65017 1.2954-3.68811 1.9981-5.786 1.995a9.499752 9.499752 0 01-1.111998-.065c2.129478 1.3692 4.608338 2.0958 7.139998 2.093 8.56999 0 13.25499-7.098 13.25499-13.25402 0-.2-.005-.402-.014-.602a9.470192 9.470192 0 002.323-2.41l.002-.003z" fill="#fff"/></svg>
                    </a>
                  </li>
                
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
