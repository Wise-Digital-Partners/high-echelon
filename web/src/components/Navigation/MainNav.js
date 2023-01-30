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

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  // const [modalState, setModalState] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  // handle click of navigation items
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

  const [bookCall, setBookCall] = useState(0);

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Logo desktop.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }

      mobileLogo: file(relativePath: { eq: "global/logo-mobile.png" }) {
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
        href: "#",
      },
      {
        name: "Small Business Consulting",
        href: "/small-business-consulting-services-atlanta/",
      },
      {
        name: "Accounting Services",
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
      {
        name: "Business Coaching & Advisory Services",
        href: "/business-coaching-advisory-services-atlanta/",
      },
      {
        name: "Cybersecurity & Data Protection",
        href: "/cyber-security-data-protection-atlanta/",
      },
    ],
    about: [
      {
        name: "About High Echelon",
        href: "/about/",
      },
      {
        name: "Reviews",
        href: "/testimonials/",
      },
      {
        name: "Financial Advisors | CPA Referral Program",
        href: "/financial-advisor-cpa/",
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
            <i className="text-xl fal fa-rotate-90 fa-phone text-secondary-400 hover:text-primary-400 transition-all linear duration-300" />
          </a>
        </div>
        <div className="flex-auto flex justify-center lg:justify-start">
          <AniLink fade to="/">
            <div class  Name={`flex justify-between `}>
              <div className="p-2">
                <GatsbyImage
                  image={initialLogo}
                  alt="High Echelon P.C. Logo"
                  className="  w-[250px] lg:w-[310px] h-[44px]  "
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
                to="#"
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
            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu2}
              onMouseLeave={notHoveringSubMenu2}
            >
              <AniLink
                fade
                to="/about/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  subMenuHovering2
                    ? "after:w-full after:left-0 after:right-auto"
                    : "after:w-0 after:left-auto after:right-0"
                } ${scrolled && "text-gray-900"} ${
                  headerLinkColor === "white" ? "text-gray-900" : "text-white"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                About
              </AniLink>
              <div
                className={`absolute top-0 bg-white shadow-3xl w-auto transform -translate-x-8 p-10 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering2
                    ? " visible translate-y-14 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                <div>
                  <ul className="flex flex-col space-y-5">
                    {navigation.about.slice(0).map((item) => (
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
              <ButtonSolid
                onClick={clickHandler}
                onKeyDown={clickHandler}
                data-modal-open="bottom-right-modal"
                text="Contact Us"
                altStyle={true}
                className="bg-secondary-400 min-w-0 text-base"
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
            <OffCanvas
              offcanvasOpen={offcanvasOpen}
              id="offcanvas-navigation"
              className=" bg-secondary-400"
            >
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
                    {/* item 2*/}
                    <li>
                      <AccordionItem uuid={2}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="text-lg text-primary-200 hover:text-primary-100 no-underline mb-4 transition-colors duration-300 ease-linear">
                            About
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3">
                            {navigation.about.slice(0).map((item) => (
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
                      <button className="text-lg text-primary-200 hover:text-primary-100 no-underline cursor-pointer transition-colors duration-300 ease-linear">
                        <a href="https://highecheloncpa.smartvault.com">
                          <i className="fa fa-sign-in mr-2"></i>
                          Client Portal
                        </a>
                      </button>
                    </li>
                    <li>
                      <button className="text-lg text-primary-200 hover:text-primary-100 no-underline cursor-pointer transition-colors duration-300 ease-linear">
                        <a href="https://app02.us.bill.com/p/highecheloncpa">
                          <i className="fa fa-sign-in mr-2"></i>
                          Pay Your Invoice
                        </a>
                      </button>
                    </li>
                  </Accordion>
                </ul>

                <ButtonSolidGold
                  data-modal-open="bottom-right-modal"
                  onKeyDown={clickHandler}
                  onClick={clickHandler}
                  text="Contact"
                  className="w-full mb-4 border-1"
                />
                <ButtonWire
                  data-modal-open="bottom-right-modal"
                  onKeyDown={clickHandler}
                  onClick={clickHandler}
                  className="w-full text-primary-100 mb-4"
                  text="Book a Call"
                />
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
