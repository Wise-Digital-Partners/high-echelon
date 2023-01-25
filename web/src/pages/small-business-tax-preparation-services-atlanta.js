import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { React, useState } from "react";

import Accordian from "../components/Accordion/AccountingAccordion";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import Layout from "../components/Layout";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import Portfolio from "../components/Repeating/Portfolio.js";
import Testimonials from "../components/Repeating/Testimonials";
import SearchEngineOptimization from "../components/SEO";

// import ButtonSolid from "../Button/ButtonSolid";



const Page = ({ data }) => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  // const handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

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

  // const [bookCall, setBookCall] = useState(0);

  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Small Business Cyber Security & Data Protection | Atlanta"
        description="Get an extra layer of protection to ensure you're safe from cyber attacks, breaches, and theft as a result of hackers. Book a call with High Echelon today.
        "
      />

      <section className="hidden md:block mb-20 md:mb-32 mt-12">
        <div className="container ">
          <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-10">
              <GatsbyImage image={data.accountingDesktop.childImageSharp.gatsbyImageData} />
            </div>
            <div className="md:absolute bg-secondary-400 shadow-inner md:col-start-6 md:col-span-7 p-20">
              <h1 className="font-light text-4xl text-primary-200 mb-6">
                Atlanta Small Business Cybersecurity and Data Protection Services
              </h1>
              <p className="font-light text-base text-primary-200">
                Worried about IT security, the security of your data, or how to manage your passwords?
              </p>
              {/* <ButtonSolidGold
                            className="font-light"
                            onClick={()=>openContactModal()}
                            text="Book a Call"
                        /> */}
              <ButtonSolidGold
                data-modal-open="bottom-right-modal"
                onKeyDown={clickHandler}
                onClick={clickHandler}
                text="Book a Call"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:hidden mb-20 md:mb-32 mt-12">
        <div className="container">
          <div className="relative grid md:grid-cols-12 lg:gap-x-16 items-center">
            <div className="md-hidden">
              <GatsbyImage image={data.accountingMobile.childImageSharp.gatsbyImageData} />
            </div>
            <div className="z-20 mt-[-128px] mx-4 bg-secondary-400 shadow-inner py-10 px-6">
              <h2 className="text-primary-200 font-light text-4xl">
                Atlanta Small Business Cybersecurity and Data Protection Services
              </h2>
              <p className="font-light text-xl text-primary-200">
                Worried about IT security, the security of your data, or how to manage your passwords?
              </p>
              {/* <ButtonSolidGold
                            className="font-light"
                            onClick={()=>openContactModal()}
                            text="Book a Call"
                        /> */}
              <ButtonSolidGold
                data-modal-open="bottom-right-modal"
                onKeyDown={clickHandler}
                onClick={clickHandler}
                text="Book a Call"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 flex justify-content items-center flex-col">
        <div className="flex justify-content items-center flex-col md:mx-24 md:min-w-120 sm:mx-8 px-7">
          <p className="text-4xl-x font-thin mb-6 text-center md:text-start">Make Sure What You’ve Built is Safe From Cyber Attacks</p>
          <p className="text-xl md:w-[760px] font-light leading-7 text-center md:text-start mb-10 md:mb-0">
            As an add-on service to what we do for you, add an extra layer of protection to ensure that you are safe from destructive cyber attacks, breaches, and theft as a result of hackers.
          </p>
        </div>
        <div className="hidden md:block justify-center items-center md:pt-32 md:pb-32 pb-20">
          <svg
            height="3"
            viewBox="0 0 1094 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.5h1094"
              stroke="url(#paint0_linear_1129_1425)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1129_1425"
                x1="0"
                y1="2.00435"
                x2="w-10/12"
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
        </div>
        <div className="md:hidden flex justify-center items-center md:pt-32 md:pb-32 pb-20">
          <svg width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-7">
            <line x1="0.900024" y1="1" x2="323.1" y2="1" stroke="url(#paint0_linear_1192_6745)" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear_1192_6745" x1="0.900024" y1="2.50435" x2="315.429" y2="2.50107" gradientUnits="userSpaceOnUse">
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
        </div>
      </section>

      <section className="mb-20 md:mb-32 mt-12">
        <div className="container">
          <div className="lg:flex items-center md:block">
            <div className="md:hidden w-full mb-8">
              <GatsbyImage
                image={
                  data.serviceImage.childImageSharp.gatsbyImageData
                }
                alt="Small Business Consulting"
                className="rounded-[8px]"
              />
            </div>
            <div className="flex justify-center flex-col lg:w-1/2 md:w-full md:mb-8 sm:mb-8">
              <div className="md:pl-10 pl-0">
                <p className="text-4xl font-thin mb-6">How We Can Protect Your Small Business
                </p>
                <p className="text-base font-light  mb-6">
                  We built on industry-standard, proven IT security frameworks to ensure your systems are safe:
                </p>
                <div className="text-base font-light">
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Password manager setup and ongoing management for your team</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Multi-factor authentication configuration and management for all logins</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Training, Q&A, and support for you and your employees</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mr-0 md:mr-20 md:mb-8 mb-8">
              <GatsbyImage
                image={
                  data.serviceImage.childImageSharp.gatsbyImageData
                }
                alt="Small Business Consulting"
                className="rounded-[8px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32 mt-12">
        <div className="container">
          <div className="lg:flex items-center md:block">
            <div className="lg:w-1/2 md:w-full mr-0 md:mr-20 md:mb-8 sm:mb-8">
              <GatsbyImage
                image={
                  data.accountingGetStarted.childImageSharp.gatsbyImageData
                }
                alt="Small Business Consulting"
                className="rounded-[8px] w-full"
              />
            </div>
            <div className="block md:flex justify-center flex-col lg:w-1/2 md:w-full mt-10 md:mt-0">
              <div className="px-0 md:px-10">
                <p className="text-4xl font-thin mb-6">How To Get Started
                </p>
                <p className="text-base font-light  mb-6">
                  We begin with an introductory discovery call at no cost to you. First, we want to understand the current cyber risks to your business and have a preliminary discussion about the best strategies and methods to mitigate those risks. From there, we’ll present you with a proposal outlining a plan and the associated costs.
                </p>

                <ButtonSolidGold
                  data-modal-open="bottom-right-modal"
                  onKeyDown={clickHandler}
                  onClick={clickHandler}
                  text="Book a Call"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32 mt-0 md:mt-12">
        <div className="container">
          <p className="text-4xl-x mb-12">Answers To Frequently Asked Questions</p>
          <Accordian />
        </div>
      </section>


      <Testimonials />
      <Portfolio />

      <About />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" strokeWidth="3" /><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stopColor="#A2A09D" stopOpacity="0" /><stop offset=".145833" stopColor="#FCE4A7" /><stop offset=".265625" stopColor="#CFA855" /><stop offset=".427083" stopColor="#FCE4A7" /><stop offset=".578125" stopColor="#F0D592" /><stop offset=".713542" stopColor="#FCE4A7" /><stop offset=".828125" stopColor="#CB9636" /><stop offset="1" stopColor="#A7A7A7" stopOpacity="0" /></linearGradient></defs></svg>
      <CallToAction />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" strokeWidth="3" /><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stopColor="#A2A09D" stopOpacity="0" /><stop offset=".145833" stopColor="#FCE4A7" /><stop offset=".265625" stopColor="#CFA855" /><stop offset=".427083" stopColor="#FCE4A7" /><stop offset=".578125" stopColor="#F0D592" /><stop offset=".713542" stopColor="#FCE4A7" /><stop offset=".828125" stopColor="#CB9636" /><stop offset="1" stopColor="#A7A7A7" stopOpacity="0" /></linearGradient></defs></svg>

    </Layout>
  );
};

export const query = graphql`
  {
    serviceImage: file(
        relativePath: { eq: "common/Cybersecurity_2.0-tools.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }

    accountingDesktop: file(
      relativePath: { eq: "common/Cybersecurity_1.0-hero.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }
  accountingGetStarted: file(
      relativePath: { eq: "common/Cybersecurity_3.0-get-started.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }
    accountingMobile: file(
      relativePath: { eq: "3.0 Accounting Services/1.0 Hero mobile.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }
    accountingStartImage: file(
        relativePath: { eq: "1.0 Homepage/IncomeTax desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
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
    consultingImage: file(
      relativePath: { eq: "1.0 Homepage/2.0 Business Consulting.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    accountServicesImage: file(
      relativePath: { eq: "1.0 Homepage/2.0 Accounting.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    payrollManagementImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    taxImage: file(
      relativePath: { eq: "1.0 Homepage/tax desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }

  }
`;
export default Page;
