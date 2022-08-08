import React, {useState} from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";
import CallToAction from "../components/Repeating/CTA";

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
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />

      <section className="hidden md:block">
        <Hero
          backgroundImages={data.reviewsBack.childImageSharp.gatsbyImageData}
          backgroundPosition="0 50%"
          mobileRemoveBackground={true}
          textAlignment="text-center md:text-left"
          padding="pt-0 md:pt-10 md:pt-24 pb-0 md:pb-14 md:pb-32"
        >
          <div className="flex justify-center items-center flex-col text-white">
            <h1 className="mb-6 text-white">Testimonials</h1>
            <p className="text-base ">
              Don’t just take our word for it—hear feedback directly from our clients.
            </p>

            <ButtonSolidGold href="/reviews/" text="Leave a Review" />
          </div>
        </Hero>
      </section>
      <section className="block md:hidden bg-primary-700 px-4">
        
          <div className="flex justify-center items-center flex-col text-white pt-10 pb-14">
            <h1 className="mb-6 text-white">Testimonials</h1>
            <p className="text-base text-center">
              Don’t just take our word for it—hear feedback directly from our clients.
            </p>

            <ButtonSolidGold href="/reviews/" text="Leave a Review" />
          </div>
      </section>

      <section className="pt-16 md:pt-28 pb-22 md:pb-32">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      <CallToAction />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      
      {/* <div id="bottom-right-modal" data-modal-placement="bottom-right" tabindex="-1" className="h-full fade hidden overflow-y-auto overflow-x-hidden bg-white fixed top-0 right-0 right-0 z-50 w-full md:w-1/2 h-modal md:h-full">
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
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  {
    reviewsBack: file(relativePath: { eq: "reviews/reviews-back.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    reviewMobile: file(relativePath: { eq: "reviews/1.0 Hero mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Reviews.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "reviews/Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "reviews/Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`;

export default Page;
