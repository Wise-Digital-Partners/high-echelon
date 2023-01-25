import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { React, useState } from "react";

import Accordian from "../components/Accordion/TaxAccordion";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import Layout from "../components/Layout";
import About from "../components/Repeating/About";
import Portfolio from "../components/Repeating/Portfolio";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";
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
        title="Small Business Tax Preparation Services Atlanta | CPA Firm"
        description="Ease the stress of taxes with our Atlanta based small business tax preparation services. We prepare your returns & help handle IRS notices and correspondence."
      />
      <section className="hidden md:block mb-20 md:mb-32 mt-12">
        <div className="container">
          <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-10">
              <GatsbyImage image={data.incomeTaxDesktop.childImageSharp.gatsbyImageData} />
            </div>
            <div className="md:absolute bg-secondary-400 shadow-inner md:col-start-6 md:col-span-7 p-12">
              <h2 className="font-light text-5xl text-primary-200 mb-6">
                Tax Preparation Services in Greater Atlanta
              </h2>
              <p className="font-light text-base text-primary-200 mb-6">
                Ease the stress of taxes with professional tax preparation.
                And if you’re already using us to manage your financial statements and payroll, taxes get even easier!
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
              <GatsbyImage image={data.incomeTaxMobile.childImageSharp.gatsbyImageData} />
            </div>
            <div className="z-20 mt-[-128px] mx-4 bg-primary-700 shadow-inner py-10 px-6">
              <h2 className="text-primary-200 font-light text-4xl">
                Tax Preparation Services in Greater Atlanta
              </h2>
              <p className="font-light text-xl text-primary-200">
                Ease the stress of taxes with professional tax preparation.
                And if you’re already using us to manage your financial statements and payroll, taxes get even easier!
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
        <div className="flex justify-content items-center flex-col md:mx-70 md:min-w-120 sm:mx-8 px-7">
          <p className="text-4xl-x font-thin mb-6 text-center md:text-start">Streamlined Business & Personal Tax Preparation</p>
          <p className="text-xl md:w-[760px] font-light leading-7 text-center md:text-start mb-10 md:mb-0">
            When we do your accounting and payroll, it flows directly into your business tax return and delivers
            the data with the highest accuracy. And from there, the relevant information is imported directly
            to your personal tax return.
          </p>
        </div>
        <div className=" md:block flex justify-center items-center md:pt-32 md:pb-32 pb-20">
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
            <line x1="0.900024" y1="1" x2="323.1" y2="1" stroke="url(#paint0_linear_1192_6745)" stroke-width="2" />
            <defs>
              <linearGradient id="paint0_linear_1192_6745" x1="0.900024" y1="2.50435" x2="315.429" y2="2.50107" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A2A09D" stop-opacity="0" />
                <stop offset="0.145833" stop-color="#CB9636" />
                <stop offset="0.265625" stop-color="#CFA855" />
                <stop offset="0.427083" stop-color="#FCE4A7" />
                <stop offset="0.578125" stop-color="#F0D592" />
                <stop offset="0.713542" stop-color="#CFA855" />
                <stop offset="0.828125" stop-color="#CB9636" />
                <stop offset="1" stop-color="#A7A7A7" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="mb-20 md:mb-32 mt-12">
        <div className="container">
          <div className="lg:flex items-start md:block">
            <div className="md:hidden md:block w-full mb-8">
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
                  data.taxImage.childImageSharp.gatsbyImageData
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

      <Portfolio />
      <Testimonials />

      <About />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3" /><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0" /><stop offset=".145833" stop-color="#FCE4A7" /><stop offset=".265625" stop-color="#CFA855" /><stop offset=".427083" stop-color="#FCE4A7" /><stop offset=".578125" stop-color="#F0D592" /><stop offset=".713542" stop-color="#FCE4A7" /><stop offset=".828125" stop-color="#CB9636" /><stop offset="1" stop-color="#A7A7A7" stop-opacity="0" /></linearGradient></defs></svg>
      <CallToAction
        subtext="Call today to get started on professional tax preparation services from High Echelon, your premier Atlanta, Georgia, CPA."
      />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3" /><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0" /><stop offset=".145833" stop-color="#FCE4A7" /><stop offset=".265625" stop-color="#CFA855" /><stop offset=".427083" stop-color="#FCE4A7" /><stop offset=".578125" stop-color="#F0D592" /><stop offset=".713542" stop-color="#FCE4A7" /><stop offset=".828125" stop-color="#CB9636" /><stop offset="1" stop-color="#A7A7A7" stop-opacity="0" /></linearGradient></defs></svg>


    </Layout>
  );
};

export const query = graphql`
  {
    serviceImage: file(
        relativePath: { eq: "5.0 Sm Business Tax Prep/2.0 Service pages.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    
    taxPrepImage: file(
      relativePath: { eq: "5.0 Sm Business Tax Prep/2.0 How we can help.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }

    incomeTaxDesktop: file(
      relativePath: { eq: "5.0 Sm Business Tax Prep/1.0 Hero desktop.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }
    incomeTaxMobile: file(
      relativePath: { eq: "5.0 Sm Business Tax Prep/1.0 Hero mobile.jpg" }
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    }
  }
    accountingStartImage: file(
        relativePath: { eq: "1.0 Homepage/3.1 Accounting Services desktop.jpg" }
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
    smallBusinessConsultingImage: file(
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
    heroDesktop: file(relativePath: { eq: "home/1.0 Hero desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
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