import { React, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import CarouselForm from "../components/Repeating/Carousel";
import Accordian from "../components/Accordion/TaxAccordion";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
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
  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };
  const openContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "block";
  }

  const closeContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "none"; 
  }

  const [bookCall, setBookCall] = useState(0);

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
                    <div className="md:absolute bg-primary-700 shadow-inner md:col-start-6 md:col-span-7 p-20">
                        <h2 className="font-light text-5xl text-primary-200 mb-6">
                            Tax Preparation Services in Greater Atlanta
                        </h2>
                        <p className="font-light text-base text-primary-200 mb-6">
                            Ease the stress of taxes with professional tax preparation. 
                            And if you’re already using us to manage your financial statements and payroll, taxes get even easier!
                        </p>
                        <ButtonSolidGold
                            className="font-light"
                            onClick={()=>openContactModal()}
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
                        <ButtonSolidGold
                            className="font-light"
                            onClick={()=>openContactModal()}
                            text="Book a Call"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-12 flex justify-content items-center flex-col">
            <div className="flex justify-content items-center flex-col md:mx-70 md:min-w-120 sm:mx-8 px-7">
                <p className="text-4xl-x font-thin mb-6 text-center md:text-start">Streamlined Business & Personal Tax Preparation</p>
                <p className="text-xl font-light leading-7 text-center md:text-start mb-10 md:mb-0">
                    When we do your accounting and payroll, it flows directly into your business tax return and delivers
                    the data with the highest accuracy. And from there, the relevant information is imported directly
                    to your personal tax return.
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
                <line x1="0.900024" y1="1" x2="323.1" y2="1" stroke="url(#paint0_linear_1192_6745)" stroke-width="2"/>
                <defs>
                  <linearGradient id="paint0_linear_1192_6745" x1="0.900024" y1="2.50435" x2="315.429" y2="2.50107" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A2A09D" stop-opacity="0"/>
                  <stop offset="0.145833" stop-color="#CB9636"/>
                  <stop offset="0.265625" stop-color="#CFA855"/>
                  <stop offset="0.427083" stop-color="#FCE4A7"/>
                  <stop offset="0.578125" stop-color="#F0D592"/>
                  <stop offset="0.713542" stop-color="#CFA855"/>
                  <stop offset="0.828125" stop-color="#CB9636"/>
                  <stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/>
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
                            <ButtonSolidGold
                                className="font-light"
                                onClick={()=>openContactModal()}
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

        <section className="mb-20 md:mb-32">
            <div className="container">
                <div className="gap-y-8 md:gap-x-10 lg:gap-x-16">
                    <div className="mb-8 flex justify-center items-center flex-col">
                        <h3 className="text-primary-700 text-4xl font-thin mb-12">
                          Streamline Everything. Get The Full Benefit.
                        </h3>
                        <p className="md:w-2/3 sm:w-full text-xl md:text-base sm:text-base font-light mb-12">
                          Get the best results when you combine our expert advice with end-to-end services that manage your finances in a full-stack solution
                        </p>
                    </div>
                    <div className="md:flex sm:block">
                        <AniLink fade to="/payroll-management-services-atlanta/" className="mr-10 mb-6 w-1/3">
                          <div className="max-w-140">
                            <GatsbyImage
                              image={
                                  data.payrollManagementImage.childImageSharp.gatsbyImageData
                              }
                              alt="Payroll Management"
                              className="mb-6 rounded-[8px] h-60 w-full"
                              />
                            </div>
                            <div className="justify-center flex-col py-2">
                                <h3 className="text-lg mb-4 text-primary-700">
                                  Payroll Management
                                </h3>
                                <p className="text-base">
                                  Lighten your load with automated payroll processing, hiring, and termination.
                                </p>    
                            </div>
                        </AniLink>
                        <AniLink fade to="/small-business-accounting-services-atlanta/" className="mr-10 mb-6 w-1/3">
                          <div className=" max-w-140">
                            <GatsbyImage
                            image={
                                data.accountServicesImage.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Accounting Services"
                            className="mb-6 rounded-[8px] h-60 w-full"
                            />
                          </div>
                            <div className="justify-center flex-col py-2">
                                <h3 className="text-lg mb-4 text-primary-700">
                                  Accounting Services
                                </h3>
                                <p className="text-base">
                                  Gain a clear understanding of your financials so you can make smart business decisions.
                                </p>
                            </div>
                        </AniLink>
                        
                        <AniLink fade to="/small-business-consulting-services-atlanta/" className="mr-10 mb-6 w-1/3 h-60">
                          <div className="max-w-140">
                            <GatsbyImage
                            image={
                                data.smallBusinessConsultingImage.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="mb-6 rounded-[8px] h-60 max-w-140"
                            />
                          </div>
                            <div className="justify-center flex-col py-2">
                            <h3 className="text-lg mb-4 text-primary-700">
                                Small Business Consulting
                            </h3>
                            <p className="text-base">
                                Get wise advice on starting a new business or restructuring an existing one.
                            </p>
                            </div>
                        </AniLink>
                    </div>
                </div>
            </div>
        </section>
      {/* <ValueProps /> */}
      {/* <Testimonials /> */}
      
      <About />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      <CallToAction
        subtext="Call today to get started on professional tax preparation services from High Echelon, your premier Atlanta, Georgia, CPA."
      />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      
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
                      href="tel:404-446-9338"
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
                    <button className={bookCall==1 ? "w-full md:w-1/2 block md:flex justify-center items-center border-black bg-primary-100 py-2 text-white mb-3 md:mb-0" : "block w-full md:w-1/2 md:flex justify-center items-center bg-gray-200 py-2 mb-3 md:mb-0"} onClick={()=>setBookCall(1)}>
                      <div className="flex justify-center items-center">
                        <i className="fal fa-calendar mr-2 text-xl"></i>
                        <p className="m-0">Book a Call</p>
                      </div>
                    </button>
                    <button className={bookCall==0 ? "w-full md:w-1/2 block md:flex justify-center items-center border-black bg-primary-100 py-2 text-white mb-3 md:mb-0" : "block w-full md:w-1/2 md:flex justify-center items-center bg-gray-200 py-2 mb-3 md:mb-0"} onClick={()=>setBookCall(0)}>
                      <div className="flex justify-center items-center">
                        <i class="fal fa-envelope mr-2 text-xl"></i>
                        <p className="m-0">Contact Us</p>
                      </div>
                    </button>
                  </div>
                  { bookCall==0 ?
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
                  : 
                    <div className="mb-8">
                      <iframe src="https://calendly.com/michellehighechelon/30min" className="w-full h-full overflow-hidden min-h-[1200px]"></iframe>
                    </div>
                  }
                        
                </div>
            </div>
        </div>
      </div>
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
      relativePath: { eq: "1.0 Homepage/3.0 Small Business desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    accountServicesImage: file(
      relativePath: { eq: "1.0 Homepage/3.1 Accounting Services desktop.jpg" }
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
