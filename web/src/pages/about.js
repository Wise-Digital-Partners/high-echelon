import React, {useState} from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import CarouselForm from "../components/Repeating/Carousel";
import ValueProps from "../components/Repeating/ValueProps";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import ButtonGhost from "../components/Button/ButtonGhost";


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

  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />
        <section className="hidden md:block mb-20 md:mb-32">
            <div className="container">
                <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
                    <div className="md:col-start-1 md:col-span-10">
                        <GatsbyImage image={data.aboutProfileImage.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="md:absolute bg-primary-700 shadow-inner md:col-start-6 md:col-span-7 p-20">
                        <h2 className="font-light text-5xl text-primary-200 mb-6">
                          About High Echelon
                        </h2>
                        <p className="font-light text-base text-primary-200">
                          High Echelon, P.C. is a nationwide CPA firm based in Atlanta, Georgia.
                          It was founded by Michelle Frank, who built the type of firm she always wanted to work for
                          herself—one focused on a great client experience. She maintains the highest standards and ethics
                          as a CPA and values transparency, so clients always know exactly what they’re getting.
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
        <section className="md:hidden mb-20 md:mb-32">
            <div className="container">
                <div className="relative grid md:grid-cols-12 lg:gap-x-16 items-center">
                    <div className="md-hidden">
                        <GatsbyImage image={data.aboutProfileMobile.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="z-20 mt-[-128px] mx-4 bg-primary-700 shadow-inner py-10 px-6">
                        <h2 className="text-primary-200 font-light">
                          About High Echelon
                        </h2>
                        <p className="font-light text-base text-primary-200">
                          High Echelon, P.C. is a nationwide CPA firm based in Atlanta, Georgia.
                          It was founded by CPA Michelle Frank, who built the type of firm she always wanted to work for
                          herself—one focused on a great client experience. She maintains the highest standards and ethics
                          as a CPA and values transparency, so clients always know exactly what they’re getting.
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

        <section className="mt-12 mb-20 md:mb-32">
            <div className="container">
                <div className="lg:flex items-center md:block">
                    <div className="hidden md:block lg:w-1/2 mr-0 lg:mr-20 mb-8">
                        <GatsbyImage
                            image={
                                data.quotes.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="md:hidden mb-10">
                        <GatsbyImage
                            image={
                                data.quotesMobile.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="block w-full md:flex justify-center flex-col lg:w-1/2">
                        <div className="md:px-4">
                            <p className="text-4xl md:text-5xl font-thin mb-6">The Story Behind the Firm</p>
                            <p className="text-base font-light  mb-6">
                            CPA work is in Michelle’s blood. She follows in the footsteps of her father, Robert 'Bob' Fendrick, who owned and managed his own public accounting firm, Fendrick & Associates, for 25 years.<br /><br />

Michelle named the company after her grandfather Jerry Fendrick's Thoroughbred horse, High Echelon.  High Echelon won the 1970 Belmont Stakes, one-third of the Triple Crown of Thoroughbred Racing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="flex justify-center">
              <svg width="1197" height="3" viewBox="0 0 1197 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="1197" y2="1.5" stroke="url(#paint0_linear_1186_1352)" stroke-width="3"/>
                <defs>
                <linearGradient id="paint0_linear_1186_1352" x1="0" y1="3.50435" x2="1168.5" y2="3.45905" gradientUnits="userSpaceOnUse">
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
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20 md:mt-28 mx-0 text-center lg:px-44 md:px-20">
                <p className="text-4xl md:text-4xl-x font-thin mb-6">Our Mission</p>
                <p className="text-base font-light">
                  High Echelon provides top-quality work with
                  total transparency. We believe accounting doesn’t
                  need to be complicated and that clients should get
                  the experience they deserve, which includes:
                </p>
              </div>
              <div className="mb-20 md:mb-24 justify-center flex-col items-center">
              
                <div className="flex mx-100 items-center justify-start flex-col">
                  <div className="md:mx-100 mx-8">
                    <div className="flex">
                        <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                        <p className="text-base font-semibold mb-4">The BEST accounting, tax, and payroll services</p>
                    </div>
                    <div className="flex">
                        <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                        <p className="text-base font-semibold mb-4">The BEST communication and data flow</p>
                    </div>
                    <div className="flex">
                        <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                        <p className="text-base font-semibold mb-4">The BEST automation and security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <svg width="1197" height="3" viewBox="0 0 1197 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="1197" y2="1.5" stroke="url(#paint0_linear_1186_1352)" stroke-width="3"/>
                <defs>
                <linearGradient id="paint0_linear_1186_1352" x1="0" y1="3.50435" x2="1168.5" y2="3.45905" gradientUnits="userSpaceOnUse">
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
          </div>
        </section>

        <ValueProps />

        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="lg:px-20 md:px-4 lg:flex sm:block">
            <div className="md:hidden mb-10">
                <div className="flex justify-center items-center">
                  <GatsbyImage
                    image={data.michellProfileImage.childImageSharp.gatsbyImageData}
                    alt="Michell Profile"
                    className="mx-0 md:mx-16 min-w-[96px] w-full"
                  />
                </div>
              </div>
              <div className="lg:w-7/12 flex items-start justify-center flex-col lg:px-16 md:px-4 sm:px-2 mr-30 sm:w-full mb-8">
                <div className="text-4xl md:text-5xl text-thin mb-6">Meet Michelle Frank</div>
                <div className="text-base text-light mb-6">
                  <p>
                  Michelle is sharp and fiercely determined, bringing those attributes
                  to all elements of the firm and her life. Previously, she was a partner
                  at Fendrick & Associates before joining the team at Peachtree Capital (PeachCap), then
                  later starting her own business, High Echelon.
                  </p><p className="mb-0">
                  Michelle received her undergraduate degree at Emory and post-graduate at Georgia
                  State University. When she isn’t being a top Atlanta CPA, she’s running marathons,
                  hosting a podcast, and raising three girls.</p>
                </div>
                <ButtonSolidGold
                  className="font-light"
                  onClick={()=>openContactModal()}
                  text="Book a Call"
              />
              </div>
              <div className="hidden md:block lg:w-5/12">
                <div className="flex justify-center items-center">
                  <GatsbyImage
                    image={data.michellProfileImage.childImageSharp.gatsbyImageData}
                    alt="Michell Profile"
                    className="mx-10 md:mx-16 min-w-[96px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* <Testimonials /> */}
      {/* <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10">
        <p className="text-4xl-x font-light mb-0 text-center">Our Clients Say Its Best</p>
        <CarouselForm />
      </section> */}
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      <CallToAction />
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
    </Layout>
  );
};


export const query = graphql`
  {
    aboutProfileImage: file(relativePath: { eq: "6.0 About/1.0 Hero desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 920)
      }
    }
    aboutProfileMobile: file(relativePath: { eq: "6.0 About/1.0 Hero mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 920)
      }
    }
    michellProfileImage: file(relativePath: { eq: "6.0 About/3.0 Michelle.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
      }
    }
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/About.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/About.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "7.0 About/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
      }
    }
    intro: file(relativePath: { eq: "7.0 About/3.0 Team.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 651)
      }
    }
    quotes: file(relativePath: { eq: "6.0 About/2.0 story collage static.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    quotesMobile: file(relativePath: { eq: "6.0 About/2.0 story collage static.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    honesty: file(relativePath: { eq: "7.0 About/4.1 Honesty.svg" }) {
      publicURL
    }
    transparency: file(relativePath: { eq: "7.0 About/4.2 Transparency.svg" }) {
      publicURL
    }
    trust: file(relativePath: { eq: "7.0 About/4.3 Trust.svg" }) {
      publicURL
    }
    communication: file(relativePath: { eq: "7.0 About/4.4 Communic.svg" }) {
      publicURL
    }
  }
`;
export default Page;
