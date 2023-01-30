import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState } from "react";
import "../sass/global.scss";

import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonGhost from "../components/Button/ButtonGhost";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import Hero from "../components/Hero/HeroFullWidth";
import Layout from "../components/Layout";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import SearchEngineOptimization from "../components/SEO";
import mark from "../images/1.0 Homepage/1.0 Homepage/2.0 HE seal.png";

// const StyledContent = styled.div`
//   .card {
//     ${tw`transition-all ease duration-300`}
//     img {
//       ${tw`bg-primary-500`}
//     }  
//     .card:hover {
//     ${tw`transition-all ease duration-[260ms]`}
//     img {
//       ${tw`bg-primary-500`}
//     }
//   }
// `;
const Page = ({ data }) => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);


  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
    document.getElementById("bottom-right-modal").style.display = "block"
  };
  // const openContactModal = () => {
  //   document.getElementById("bottom-right-modal").style.display = "block";
  // }

  // const closeContactModal = () => {
  //   document.getElementById("bottom-right-modal").style.display = "none"; 
  // }

  // const [bookCall, setBookCall] = useState(0);

  return (
    <Layout className="bg-secondary-400" headerDarkMode={true}>
      <SearchEngineOptimization
        title="Small Business CPA Atlanta | High Echelon"
        description="High Echelon is a small business CPA firm serving Atlanta & beyond specializing in small businesses here to simplify your books. Learn more here!"
      />
      <section className="hidden 2xl:block">
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
      </section>

      <section className="bg-white w-full block 2xl:hidden relative">
        <GatsbyImage
          image={data.heroMobile.childImageSharp.gatsbyImageData}
          className=" w-full"
        />
        <div className="absolute top-0 px-6 pt-32 pb-14 text-center mx-auto w-full">
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
        <div className="relative mb-32 flex justify-center"></div>
      </section>
      {/* ABSTRACT HERO CONTENT */}
      <div className="  relative 2xl:top-[-100px] top-[-180px] mx-4 lg:mx-18 sm:mx-4 mb-20 flex justify-center">
        <div className="absolute  container bg-secondary-400 flex justify-center items-center flex-col rounded-[8px] overflow-x-hidden">
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

          <p className="text-5xl text-white font-body mt-9 mb-6 max-w-[560px] md:w-3/5 sm:w-full text-center">
            A Small Business CPA Firm Serving Atlanta & Beyond
          </p>
          <div className="mb-20 flex justify-center max-w-[736px] md:w-2/3 sm:w-full ">
            <p className="text-base text-white font-body text-center leading-[30px]">
              If you’re looking for a modern CPA firm that can simplify your
              books, you’ve come to the right place. At High Echelon, we value
              client communication, accuracy, a streamlined workflow, and
              creating a positive experience for our clients.
            </p>
          </div>
        </div>
      </div>
      {/*END OF ABSTRACT HERO CONTENT */}
      {/* SERVICE CARDS */}
      <section className="  mb-20 md:mb-32 md:pt-24">
        <div className="container">
          <div className="mx-auto md:pt-[12rem] pt-[15rem]">
            <div className="md:w-[850px] sm:w-full mx-auto lg:mx-0">
              <h3 className="md:mt-24  mt-[8rem] mx-auto md:mx-0 text-primary-700 text-4xl font-light md:text-4xl-x md:font-normal">
                We are Here To Make Your Business Better
              </h3>
              <p className="text-xl mb-10 md:text-base mt-6">
                Get streamlined, end-to-end services for everything from your
                business entity formation to accounting, payroll, and income tax
                needs.
              </p>
            </div>
            {/* MOBILE LAYOUT */}
            <div className="md:hidden flex-wrap gap-x-4 grid p-6 sm:grid-cols-2 md:grid-cols-2 md:p-0">
              <AniLink
                to="small-business-consulting-services-atlanta/"
                className="pb-4 md:gap-6 md:grid md:grid-cols-2"
              >
                <div className="text-left w-full xl:pr-2">
                  <GatsbyImage
                    image={
                      data.smallBusinessConsultingImage.childImageSharp
                        .gatsbyImageData
                    }
                    className="block h-56 mx-auto object-cover w-full md:p-2 md:rounded-xl"
                  />
                </div>
                <div className="h-full">
                  <h3 className="my-4 lg:my-3 text-secondary-400 text-xl">
                    <p>Small Business Consulting</p>
                  </h3>
                  <p className="lg:text-base mb-0 lg:mb-[inherit] text-sm ">
                    Need advice or help in navigating the best way to form your
                    business? The small business consulting experts at High
                    Echelon are here to help.
                  </p>
                  <p className="pt-[15px] mb-20 lg:hidden inline-block w-[95px] background-[linear-gradient(180deg, #CFA750 1.04%, #D2B15E 29.69%, #D0AB55 46.88%, #D1AD58 65.1%, #CFA64D 100%);] bg-clip-text border-b-[3px] border-b-primary-400 border-b-solid">
                    Learn More
                  </p>
                </div>
              </AniLink>

              <AniLink
                to="/payroll-management-services-atlanta/"
                className="pb-4 md:gap-6 md:grid md:grid-cols-2"
              >
                <div className="text-left w-full xl:pr-2">
                  <GatsbyImage
                    image={
                      data.payrollManagementImage.childImageSharp
                        .gatsbyImageData
                    }
                    className="block h-56 mx-auto object-cover w-full md:p-2 md:rounded-xl"
                  />
                </div>
                <div className="h-full">
                  <h3 className="my-4 lg:my-3 text-secondary-400 text-xl">
                    <p>Payroll Management</p>
                  </h3>
                  <p className="text-sm lg:text-base ">
                    Get lightweight, user-friendly, cost-efficient payroll
                    processing, complete with automated hiring and termination
                    of employees.
                  </p>
                  <p className="pt-[15px] mb-20 lg:hidden inline-block w-[95px] background-[linear-gradient(180deg, #CFA750 1.04%, #D2B15E 29.69%, #D0AB55 46.88%, #D1AD58 65.1%, #CFA64D 100%);] bg-clip-text border-b-[3px] border-b-primary-400 border-b-solid">
                    Learn More
                  </p>
                </div>
              </AniLink>

              <AniLink
                to="/small-business-accounting-services-atlanta/"
                className="pb-4 md:gap-6 md:grid md:grid-cols-2"
              >
                <div className="text-left w-full xl:pr-2">
                  <GatsbyImage
                    image={
                      data.accountServicesImage.childImageSharp.gatsbyImageData
                    }
                    className="block h-56 mx-auto object-cover w-full md:p-2 md:rounded-xl"
                  />
                </div>
                <div className="h-full">
                  <h3 className="my-4 lg:my-3 text-secondary-400 text-xl">
                    <p>Accounting Services</p>
                  </h3>
                  <p className="text-sm lg:text-base ">
                    Preparation of monthly, quarterly, or annual financial
                    statements for your business.
                  </p>
                  <p className="pt-[15px] mb-20 lg:hidden inline-block w-[95px] background-[linear-gradient(180deg, #CFA750 1.04%, #D2B15E 29.69%, #D0AB55 46.88%, #D1AD58 65.1%, #CFA64D 100%);] bg-clip-text border-b-[3px] border-b-primary-400 border-b-solid">
                    Learn More
                  </p>
                </div>
              </AniLink>

              <AniLink
                to="/small-business-tax-preparation-services-atlanta/"
                className="pb-4 md:gap-6 md:grid md:grid-cols-2"
              >
                <div className="text-left w-full xl:pr-2">
                  <GatsbyImage
                    image={data.taxImage.childImageSharp.gatsbyImageData}
                    className="block h-56 mx-auto object-cover w-full md:p-2 md:rounded-xl"
                  />
                </div>
                <div className="h-full">
                  <h3 className="my-4 lg:my-3 text-secondary-400 text-xl">
                    <p>Tax Preparation</p>
                  </h3>
                  <p className="text-sm lg:text-base ">
                    Get tax preparation for yourself or your business.
                  </p>
                  <p className="pt-[15px] mb-20 lg:hidden inline-block w-[95px] background-[linear-gradient(180deg, #CFA750 1.04%, #D2B15E 29.69%, #D0AB55 46.88%, #D1AD58 65.1%, #CFA64D 100%);] bg-clip-text border-b-[3px] border-b-primary-400 border-b-solid">
                    Learn More
                  </p>
                </div>
              </AniLink>

              <AniLink to="/business-coaching-advisory-services-atlanta/">
                <div className="pb-4 md:gap-6 md:grid md:grid-cols-2">
                  <div className="text-left w-full xl:pr-2">
                    <GatsbyImage
                      image={
                        data.coachBusinessConsultingImage.childImageSharp
                          .gatsbyImageData
                      }
                      className="block h-56 mx-auto object-cover w-full md:p-2 md:rounded-xl"
                    />
                  </div>
                  <div className="h-full">
                    <h3 className="my-4 lg:my-3 text-secondary-400 text-xl">
                      <p>Business Coaching and Advisory</p>
                    </h3>
                    <p className="text-sm lg:text-base ">
                      We provide a sounding board for what you want to
                      accomplish and help you get there.
                    </p>
                    <p className="pt-[15px] mb-20 lg:hidden inline-block w-[95px] background-[linear-gradient(180deg, #CFA750 1.04%, #D2B15E 29.69%, #D0AB55 46.88%, #D1AD58 65.1%, #CFA64D 100%);] bg-clip-text border-b-[3px] border-b-primary-400 border-b-solid">
                      Learn More
                    </p>
                  </div>
                </div>
              </AniLink>

              <AniLink
                to="/cyber-security-data-protection-atlanta/"
                className="pb-4 md:gap-6 md:grid md:grid-cols-2"
              >
                <div className="text-left w-full xl:pr-2">
                  <GatsbyImage
                    image={
                      data.cyberServicesImage.childImageSharp.gatsbyImageData
                    }
                    className="block h-56 mx-auto object-cover w-full md:p-2 md:rounded-xl"
                  />
                </div>
                <div className="h-full">
                  <a href="#" className="hover:text-blue-600"></a>
                  <h3 className="my-4 lg:my-3 text-secondary-400 text-xl">
                    <p>Cybersecurity and Data Protection</p>
                  </h3>
                  <p>
                    We help ensure you&rsquo;re safe from destructive cyber
                    attacks, breaches, and theft as a result of hackers.
                  </p>
                  <p className="pt-[15px] mb-20 lg:hidden inline-block w-[95px] background-[linear-gradient(180deg, #CFA750 1.04%, #D2B15E 29.69%, #D0AB55 46.88%, #D1AD58 65.1%, #CFA64D 100%);] bg-clip-text border-b-[3px] border-b-primary-400 border-b-solid">
                    Learn More
                  </p>
                </div>
              </AniLink>
            </div>
            {/* END OF MOBILE LAYOUT */}
            {/* DESKTOP */}
            <div className="container">
              <div className="grid grid-cols-12 gap-y-[30px]">
                <div className="col-span-6">
                  <AniLink
                    to="small-business-consulting-services-atlanta/"
                    className="group card"
                  >
                    <div className="md:grid p-0 hidden grid-cols-12 gap-x-[24px]">
                      <div className="col-span-4 overflow-hidden rounded-xl max-h-[150px] h-[150px]">
                        <GatsbyImage
                          image={
                            data.smallBusinessConsultingImage.childImageSharp
                              .gatsbyImageData
                          }
                          imgClassName=""
                          className=" h-full block mx-auto rounded-xl transition-all linear duration-300 scale-100 group-hover:scale-110 "
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="flex-col flex">
                          <h3 className="text-lg font-semibold mb-4">
                            Small Business Consulting
                          </h3>
                          <p className="lg:max-w-[350px] ml-0">
                            Need advice or help in navigating the best way to
                            form your business? Talk with the experts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AniLink>
                </div>
                <div className="col-span-6">
                  <AniLink
                    to="/payroll-management-services-atlanta/"
                    className="group card"
                  >
                    <div className="md:grid p-0 hidden grid-cols-12 gap-x-[24px]">
                      <div className="col-span-4 overflow-hidden rounded-xl max-h-[150px] h-[150px]">
                        <GatsbyImage
                          image={
                            data.payrollManagementImage.childImageSharp
                              .gatsbyImageData
                          }
                          imgClassName=""
                          className=" h-full block mx-auto rounded-xl transition-all linear duration-300 scale-100 group-hover:scale-110 "
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="flex-col flex">
                          <h3 className="text-lg font-semibold mb-4">
                            Payroll Management
                          </h3>
                          <p className="lg:max-w-[350px] ml-0">
                            Get lightweight, user-friendly, cost-efficient
                            payroll processing, complete with automated hiring
                            and termination of employees.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AniLink>
                </div>
                <div className="col-span-6">
                  <AniLink
                    to="small-business-consulting-services-atlanta/"
                    className="group card"
                  >
                    <div className="md:grid p-0 hidden grid-cols-12 gap-x-[24px]">
                      <div className="col-span-4 overflow-hidden rounded-xl max-h-[150px] h-[150px]">
                        <GatsbyImage
                          image={
                            data.accountServicesImage.childImageSharp
                              .gatsbyImageData
                          }
                          imgClassName=""
                          className=" h-full block mx-auto rounded-xl transition-all linear duration-300 scale-100 group-hover:scale-110 "
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="flex-col flex">
                          <h3 className="text-lg font-semibold mb-4">
                            Accounting Services
                          </h3>
                          <p className="lg:max-w-[350px] ml-0">
                            Preparation of monthly, quarterly, or annual
                            financial statements for your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AniLink>
                </div>
                <div className="col-span-6">
                  <AniLink
                    to="/small-business-tax-preparation-services-atlanta/"
                    className="group card"
                  >
                    <div className="md:grid p-0 hidden grid-cols-12 gap-x-[24px]">
                      <div className="col-span-4 overflow-hidden rounded-xl max-h-[150px] h-[150px]">
                        <GatsbyImage
                          image={
                            data.incomeTaxPreparationMobileImage.childImageSharp
                              .gatsbyImageData
                          }
                          imgClassName=""
                          className=" h-full block mx-auto rounded-xl transition-all linear duration-300 scale-100 group-hover:scale-110 "
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="flex-col flex">
                          <h3 className="text-lg font-semibold mb-4">
                            Tax Preparation
                          </h3>
                          <p className="lg:max-w-[350px] ml-0">
                            Get tax preparation for yourself or your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AniLink>
                </div>
                <div className="col-span-6">
                  <AniLink
                    to="/business-coaching-advisory-services-atlanta/"
                    className="group card"
                  >
                    <div className="md:grid p-0 hidden grid-cols-12 gap-x-[24px]">
                      <div className="col-span-4 overflow-hidden rounded-xl max-h-[150px] h-[150px]">
                        <GatsbyImage
                          image={
                            data.coachBusinessConsultingImage.childImageSharp
                              .gatsbyImageData
                          }
                          imgClassName=""
                          className=" h-full block mx-auto rounded-xl transition-all linear duration-300 scale-100 group-hover:scale-110 "
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="flex-col flex">
                          <h3 className="text-lg font-semibold mb-4">
                            Business Coaching and Advisory
                          </h3>
                          <p className="lg:max-w-[350px] ml-0">
                            We provide a sounding board for what you want to
                            accomplish and help you get there.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AniLink>
                </div>
                <div className="col-span-6">
                  <AniLink
                    to="/cyber-security-data-protection-atlanta/"
                    className="group card"
                  >
                    <div className="md:grid p-0 hidden grid-cols-12 gap-x-[24px]">
                      <div className="col-span-4 overflow-hidden rounded-xl max-h-[150px] h-[150px] ">
                        <GatsbyImage
                          image={
                            data.cyberServicesImage.childImageSharp
                              .gatsbyImageData
                          }
                          imgClassName=""
                          className=" h-full block mx-auto rounded-xl transition-all linear duration-300 scale-100 group-hover:scale-110 "
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="flex-col flex">
                          <h3 className="text-lg font-semibold mb-4">
                            Cybersecurity and Data Protection
                          </h3>
                          <p className="lg:max-w-[350px] ml-0">
                            We help ensure you’re safe from destructive cyber
                            attacks, breaches, and theft as a result of hackers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AniLink>
                </div>
              </div>
            </div>
            {/* END OF DESKTOP */}
          </div>
        </div>
      </section>
      {/*END OF SERVICE CARDS */}
      <ValueProps />
      <Testimonials />
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
coachBusinessConsultingImage: file(
relativePath: { eq: "common/0.0_repeating-services_coaching.jpg" }
) {
childImageSharp {
gatsbyImageData(layout: CONSTRAINED, width: 360)
}
}
cyberServicesImage: file(
relativePath: { eq: "common/0.0_repeating-services_cybersecurity.jpg" }
) {
childImageSharp {
gatsbyImageData(layout: CONSTRAINED, width: 360)
}
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
taxImage: file(
relativePath: { eq: "1.0 Homepage/tax desktop.jpg" }
) {
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