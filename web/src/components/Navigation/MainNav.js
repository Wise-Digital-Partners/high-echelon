import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
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
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

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
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    // stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else if (headerDarkMode) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.lightLogo.childImageSharp.gatsbyImageData;
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    loanPrograms: [
      {
        name: "Small Business Consulting",
        href: "/home-purchase/",
      },
      {
        name: "Account Services",
        href: "/conventional-loans-chicago/",
      },
      {
        name: "Payroll Management",
        href: "/fha-loans-chicago/",
      },
      {
        name: "Income Tax Preparation",
        href: "/jumbo-loans-chicago/",
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
      className={`py-2 lg:py-2 bg-white shadow-5xl lg:shadow-none w-full transition duration-300 ease-linear ${
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
        <div className="flex-auto flex justify-center lg:justify-start">
          <AniLink fade to="/">
            <div className={`${scrolled && "hidden"}`}>
              <div className="hidden lg:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={data.darkLogo.childImageSharp.gatsbyImageData}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
            </div>

            <div className={`hidden ${scrolled && "!block"}`}>
              <div className="hidden lg:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={data.darkLogo.childImageSharp.gatsbyImageData}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
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
                to="/home-purchase/"
                className={`font-body relative text-[16px] font-semibold pb-8 after:absolute after:bottom-6 after:h-1 after:bg-primary-400 after:transition-all after:duration-300 after:ease-linear ${
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
                          className="group inline-flex items-center justify-between w-full relative font-body text-xl font-medium text-gray-900 hover:text-gray-900"
                        >
                          <span>{item.name}</span>
                          <i className="far fa-arrow-right text-xl text-gray-900 group-hover:text-gray-900 relative left-0 group-hover:left-2 transition-all duration-300 ease-linear"></i>
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
                to="/home-refinance-chicago/"
                className={`font-body relative text-[16px] font-semibold pb-8 after:absolute after:bottom-6 after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:w-0 hover:after:w-full after:h-1 after:bg-primary-400 after:transition-all after:duration-300 after:ease-linear ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white" ? "text-white" : "text-gray-900"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                About
              </AniLink>
            </li>

            <li className="group">
              <AniLink
                fade
                to="/about/"
                className={`font-body relative text-[16px] font-semibold pb-8 after:absolute after:bottom-6 after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:w-0 hover:after:w-full after:h-1 after:bg-primary-400 after:transition-all after:duration-300 after:ease-linear ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white" ? "text-white" : "text-gray-900"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                Reviews
              </AniLink>
            </li>

            <li className="group">
              <ButtonSolid
                href="/request-rates/"
                text="Contact US"
                altStyle={true}
                className="bg-primary-700 min-w-0 text-[16px]"
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

            {/* Mobile Nav */}
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div>
                <ul id="navigation-mobile" className="mb-12">
                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-7"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline mb-0 transition-colors duration-300 ease-linear">
                            Services
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3">
                            {navigation.loanPrograms.map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  className="relative block font-body font-semibold text-gray-900 hover:text-gray-900"
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
                        to="/home-refinance-chicago/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline transition-colors duration-300 ease-linear"
                      >
                        About
                      </AniLink>
                    </li>

                    <li>
                      <AccordionItem uuid={2}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline mb-0 transition-colors duration-300 ease-linear">
                            Reviews
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3">
                            {navigation.about.map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  onKeyDown={clickHandler}
                                  onClick={clickHandler}
                                  className="relative block font-body font-semibold text-gray-900 hover:text-gray-900"
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
                        data-modal-open="modal-contact"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline cursor-pointer transition-colors duration-300 ease-linear"
                      >
                        Contact
                      </AniLink>
                    </li>
                  </Accordion>
                </ul>

                <ButtonSolid
                  href="/request-rates/"
                  text="Request Rates"
                  className="w-full"
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
