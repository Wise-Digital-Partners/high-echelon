import { React, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
// import Testimonials from "../components/Repeating/Testimonials";
import Accordian from "../components/Accordion/TaxAccordion";
import Portfolio from "../components/Repeating/Portfolio";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";

import ButtonSolidGold from "../components/Button/ButtonSolidGold";

import OffCanvas from "../components/OffCanvas/OffCanvas";
// import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";



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
        title="Small Business Consulting Services Atlanta | CPA"
        description=" Deciding how to structure your business is a critical first step & can have huge implications. Our Atlanta based small business consulting services can help!"
      />
      <section className="hidden md:block mb-20 md:mb-32 mt-12">
        <div className="container">
          <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-10">
              <GatsbyImage image={data.consultingDesktop.childImageSharp.gatsbyImageData} />
            </div>
            <div className="md:absolute bg-secondary-400 shadow-inner md:col-start-6 md:col-span-7 p-20">
              <h2 className="font-light text-4xl text-primary-200 mb-6">
                Atlanta Small Business Consulting Services
              </h2>
              <p className="font-light text-base text-primary-200">
                Looking to get started with forming a business, or need to restructure an already existing business?
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
              <GatsbyImage image={data.consultingMobile.childImageSharp.gatsbyImageData} />
            </div>
            <div className="z-20 mt-[-128px] mx-4 bg-secondary-400 shadow-inner py-10 px-6">
              <h2 className="text-primary-200 font-light text-4xl">
                Atlanta Small Business Consulting Services
              </h2>
              <p className="font-light text-xl text-primary-200">
                Looking to get started with forming a business, or need to restructure an already existing business?
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
          <p className="text-4xl-x font-thin mb-6 text-center md:text-start">Get Expert Advice.</p>
          <p className="text-4xl-x font-thin mb-6 text-center md:text-start">Make Strategic Moves.</p>
          <p className="text-xl md:w-[760px] font-light leading-7 text-center md:text-start mb-10 md:mb-0">
            Are you just getting started? Deciding how to structure your new business is a critical
            first step and can have enormous implications. Or are you already operating a business and need to make a shift? Smart advice starts here.
          </p>
        </div>
        <div className="hidden md:block flex justify-center items-center md:pt-32 md:pb-32 pb-20">
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
          <div className="lg:flex items-start md:block">
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
                <p className="text-4xl font-thin mb-6">Our Services</p>
                <p className="text-base font-light  mb-6">
                  At High Echelon, we prepare your returns and help you handle IRS notices and correspondence.
                </p>
                <p className="text-4xl font-thin mb-6">Business Tax Return Preparation</p>
                <div className="text-base font-light">
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Corporate</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">S corporate</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Partnership</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Extension filing</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Assistance with IRS tax notices</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Correspondence with IRS</p>
                  </div>
                </div>
                <p className="text-4xl font-thin mb-6">Individual Tax Returns</p>
                <div className="text-base font-light">
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Extension filing</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Assistance with IRS tax notices</p>
                  </div>
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Correspondence with IRS</p>
                  </div>
                </div>
                <p className="text-4xl font-thin mb-6">Estates and Trusts</p>
                <div className="text-base font-light">
                  <div className="flex">
                    <i className="fa fa-check text-primary-100 mr-3"></i>
                    <p className="text-base font-semibold mb-3">Income tax return for estates and trusts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mr-0 md:mr-20 md:mb-8 mb-8">
              <GatsbyImage
                image={
                  data.taxPrepImage.childImageSharp.gatsbyImageData
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
                  data.taxPrepImage.childImageSharp.gatsbyImageData
                }
                alt="Small Business Consulting"
                className="rounded-[8px] w-full"
              />
            </div>
            <div className="block md:flex justify-center flex-col lg:w-1/2 md:w-full mt-10 md:mt-0">
              <div className="px-0 md:px-10">
                <p className="text-4xl font-thin mb-6">How To Get Started</p>
                <p className="text-base font-light">
                  First, we'll review your prior year tax return(s) and discuss any questions or concerns you might have.
                  Next, we will discuss any significant changes that might've occurred during the most recent tax year,
                  and give you an idea of how that change might (or might not) affect your income taxes. And finally,
                  we will prepare a proposal denoting the scope of work and then once you sign we will get started.
                </p>
                <p>For the next steps, we:</p>
                <div className="mb-6">
                  <li>Give you a draft to review, with questions</li>
                  <li>Outline changes that we made</li>
                  <li>Review, then sign off on the filing</li>
                  <li>Provide you with a secure link for upload</li>
                </div>
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
        </div>
      </section>

      <section className="mb-20 md:mb-32 mt-0 md:mt-12">
        <div className="container">
          <p className="text-4xl-x mb-12">Answers To Frequently Asked Questions</p>
          <Accordian />
        </div>
      </section>

      {/* <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10">
        <p className="text-4xl-x font-light mb-0 text-center">Our Clients Say Its Best</p>
        <CarouselForm />
      </section> */}


      {/* <Testimonials /> */}
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
        relativePath: { eq: "2.0 Business Consulting/2.0 How we can help.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    
    consultingDesktop: file(
      relativePath: { eq: "2.0 Business Consulting/1.0 Hero desktop.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }
    consultingMobile: file(
      relativePath: { eq: "2.0 Business Consulting/1.0 Hero mobile.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }

  }
`;
export default Page;
