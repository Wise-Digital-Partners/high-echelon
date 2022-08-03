import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonSolidGold from "../Button/ButtonSolidGold";
import ButtonGhost from "../Button/ButtonGhost";
import ButtonWire from "../Button/ButtonWire";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerDarkMode,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  // const [modalState, setModalState] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const openContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "block";
  }

  const closeContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "none"; 
  }
  
  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Logo desktop.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 310, placeholder: NONE)
        }
      }

      mobileLogo: file(relativePath: {eq: "global/Logo desktop.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 200, placeholder: NONE)
        }
      }
    }
  `);

  

  // Define logos based on header style
  let initialLogo = null,
      mobileLogo = null,
    // stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // mobileLogo = data.mobileLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else if (headerDarkMode) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // mobileLogo = data.mobileLogo.childImageSharp.gatsbyImageData;
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // mobileLogo = data.mobileLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // mobileLogo = data.mobileLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    loanPrograms: [
      {
        name: "Services",
        href: "/"
      },
      {
        name: "Small Business Consulting",
        href: "/small-business-consulting-services-atlanta/",
      },
      {
        name: "Account Services",
        href: "/small-business-accounting-services-atlanta/",
      },
      {
        name: "Payroll Management",
        href: "/payroll-management-services-atlanta/",
      },
      {
        name: "Income Tax Preparation",
        href: "/small-business-tax-preparation-services-atlanta/",
      },
    ],
    about: [
      {
        name: "About",
        href: "/about/",
      },
    ],
  };

  return (
    <nav
      id="main-navigation"
      className={`py-0 lg:py-2 bg-white shadow-5xl lg:shadow-none w-full transition duration-300 ease-linear ${
        headerStyle === "overlap" ? "lg:bg-transparent" : "lg:bg-black"
      } ${
        headerHasBorder && "lg:border-b lg:border-solid lg:border-gray-300"
      } ${offcanvasOpen ? "" : ""} ${headerDarkMode && "lg:!bg-white"} ${
        scrolled && "!fixed !bg-white top-0 left-0 w-full !shadow-5xl z-50"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvas-open={offcanvasOpen}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center lg:hidden"> 
          <a
            href="tel:440-469-9338"
            className="text-sm font-semibold text-white hover:text-primary-100"
          >
            {/* <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1.5"
            >
              <path
                d="M1.08124.769072L4.33117.019088c.35312-.081249.71561.103122.85936.434365L6.6905 3.95338c.13125.30624.04375.66561-.21562.87498L4.58117 6.37833c1.12498 2.39682 3.09056 4.39057 5.53743 5.53737l1.5499-1.8937c.2125-.25937.5688-.34687.875-.21562l3.4999 1.49992c.3344.1469.5188.5094.4375.8625l-.75 3.25c-.0781.3375-.3781.5812-.7312.5812C6.99674 16 .5 9.51576.5 1.50031c0-.35.240621-.653115.58124-.731238z"
                fill="#000000"
              />
            </svg> */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2571 19.75H17.1296C2.39215 18.9025 0.299644 6.4675 0.00714362 2.6725C-0.0164249 2.37744 0.0184601 2.08062 0.1098 1.79906C0.20114 1.5175 0.347139 1.25673 0.539432 1.03169C0.731725 0.80665 0.966533 0.621766 1.2304 0.48763C1.49427 0.353493 1.78201 0.272741 2.07714 0.250001H6.20964C6.51006 0.24971 6.80365 0.339633 7.05237 0.508122C7.30109 0.676611 7.49349 0.915903 7.60464 1.195L8.74464 4C8.85441 4.27266 8.88165 4.57156 8.82298 4.85957C8.76431 5.14758 8.62232 5.412 8.41464 5.62L6.81714 7.2325C7.06668 8.65056 7.74578 9.95775 8.76257 10.9772C9.77935 11.9967 11.0847 12.6792 12.5021 12.9325L14.1296 11.32C14.3408 11.1146 14.6077 10.9759 14.8971 10.9213C15.1865 10.8666 15.4856 10.8983 15.7571 11.0125L18.5846 12.145C18.8595 12.2597 19.0941 12.4536 19.2584 12.702C19.4226 12.9504 19.5093 13.2422 19.5071 13.54V17.5C19.5071 18.0967 19.2701 18.669 18.8481 19.091C18.4262 19.5129 17.8539 19.75 17.2571 19.75ZM2.25714 1.75C2.05823 1.75 1.86747 1.82902 1.72681 1.96967C1.58616 2.11032 1.50714 2.30109 1.50714 2.5V2.56C1.85214 7 4.06464 17.5 17.2121 18.25C17.3107 18.2561 17.4094 18.2427 17.5028 18.2105C17.5961 18.1783 17.6822 18.1281 17.756 18.0626C17.8299 17.9971 17.8901 17.9176 17.9332 17.8288C17.9763 17.74 18.0014 17.6436 18.0071 17.545V13.54L15.1796 12.4075L13.0271 14.545L12.6671 14.5C6.14214 13.6825 5.25714 7.1575 5.25714 7.09L5.21214 6.73L7.34214 4.5775L6.21714 1.75H2.25714Z" fill="#152636"/>
            </svg>
          </a>
        </div>
        <div className="flex-auto flex justify-center lg:justify-start">
          <AniLink fade to="/">
            <div className={`flex justify-between ${scrolled && "hidden"}`}>
              <div className="hidden lg:block md:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px] sm:h-[30] sm:w-[200]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={data.mobileLogo.childImageSharp.gatsbyImageData}
                  alt="MacAsh Home Loans Logo"
                  className="md:h-[64px] md:w-[310px] sm:h-[30px] sm:w-[200px]"
                />
              </div>
            </div>

            <div className={`hidden ${scrolled && "!block"}`}>
              <div className="hidden lg:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="MacAsh Home Loans Logo"
                  className=" md:h-[64px] md:w-[310px] sm:h-[30px] sm:w-[200px]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={data.mobileLogo.childImageSharp.gatsbyImageData}
                  alt="MacAsh Home Loans Logo"
                  className="md:h-[64px] md:w-[310px] sm:h-[30px] sm:w-[200px]"
                />
              </div>
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:mr-8"
          >
            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu1}
              onMouseLeave={notHoveringSubMenu1}
            >
              <AniLink
                fade
                to="/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  subMenuHovering1
                    ? "after:w-full after:left-0 after:right-auto"
                    : "after:w-0 after:left-auto after:right-0"
                } ${scrolled && "text-gray-900"} ${
                  headerLinkColor === "white" ? "text-gray-900" : "text-white"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                Services
              </AniLink>
              <div
                className={`absolute top-0 bg-white shadow-3xl w-auto transform -translate-x-8 p-10 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering1
                    ? " visible translate-y-14 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                <div>
                  <ul className="flex flex-col space-y-5">
                    {navigation.loanPrograms.slice(1).map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="group inline-flex items-center justify-between w-full relative text-black hover:text-primary-100"
                        >
                          <p className="mb-0">{item.name}</p>
                          {/* <i className="far fa-arrow-right text-xl text-gray-900 group-hover:text-gray-900 relative left-0 group-hover:left-2 transition-all duration-300 ease-linear"></i> */}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li className="group">
              <AniLink
                fade
                to="/about/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:w-0 hover:after:w-full after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white" ? "text-white" : "text-gray-900"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                About
              </AniLink>
            </li>

            {/* <li className="group">
              <AniLink
                fade
                to="/reviews/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:w-0 hover:after:w-full after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white" ? "text-white" : "text-gray-900"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                Reviews
              </AniLink>
            </li> */}

            <li className="group">
              <ButtonSolid
                onClick={()=>openContactModal()}
                text="Contact US"
                altStyle={true}
                className="bg-primary-700 min-w-0 text-base"
              />
            </li>
          </ul>

          <div className="lg:hidden" ref={node}>
            {/* Burger */}
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />

            {/* Mobile Nav  */}
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation" className=" bg-primary-700">
              <div className="px-7 py-12">
                <ul id="navigation-mobile" className="mb-12">
                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-7"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="text-lg text-primary-200 hover:text-primary-100 no-underline mb-4 transition-colors duration-300 ease-linear">
                            Services
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3">
                            {navigation.loanPrograms.slice(1).map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  className="relative block text-primary-200 hover:text-primary-100"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/about/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="text-lg text-primary-200 hover:text-primary-100 no-underline transition-colors duration-300 ease-linear pt-3"
                      >
                        About
                      </AniLink>
                    </li>

                    {/* <li>
                      <AniLink
                        fade
                        to="/reviews/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="text-lg text-primary-200 hover:text-primary-100 no-underline transition-colors duration-300 ease-linear"
                      >
                        Reviews
                      </AniLink>
                    </li> */}

                    <li>
                      <button
                        onClick={()=>openContactModal()}
                        className="text-lg text-primary-200 hover:text-primary-100 no-underline cursor-pointer transition-colors duration-300 ease-linear"
                      >
                        <i className="fa fa-sign-in mr-2"></i>
                        Client Portal
                      </button>
                    </li>
                  </Accordion>
                </ul>

                <ButtonSolidGold
                  onClick={()=>openContactModal()}
                  text="Contact"
                  className="w-full mb-4 border-1"
                />
                <ButtonWire
                  href="/"
                  className="w-full text-primary-100"
                  text="Book a Call"
                />
              </div>
            </OffCanvas>
          </div>
        </div>
          <div id="bottom-right-modal" data-modal-placement="bottom-right" tabindex="-1" className="h-full fade hidden overflow-y-auto overflow-x-hidden bg-white fixed top-0 right-0 right-0 z-50 w-full md:w-1/2 h-modal md:h-full">
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
                          href="tel:(404) 446-9338"
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
                        <button className="block w-full md:w-1/2 md:flex justify-center items-center bg-gray-200 py-2 mb-3 md:mb-0">
                          <div className="flex justify-center items-center">
                            <i className="fal fa-calendar mr-2 text-xl"></i>
                            <p className="m-0">Book a Call</p>
                          </div>
                        </button>
                        <button className="w-full md:w-1/2 block md:flex justify-center items-center border-black bg-primary-100 py-2 text-white">
                          <div className="flex justify-center items-center">
                            <i class="fal fa-envelope mr-2 text-xl"></i>
                            <p className="m-0">Contact Us</p>
                          </div>
                        </button>
                      </div>
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
                            
                    </div>
                </div>
            </div>
          </div>
      </div>
    </nav>
  );
};
export default MainNav;
