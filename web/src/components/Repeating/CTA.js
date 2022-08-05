import React, {useState} from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import ButtonSolidGold from "../Button/ButtonSolidGold";
import houseImg from '../../../src/images/bg.png';
const CTA = ({ heading, headingLevel, subtext, className }) => {
  const HeadingTag = headingLevel || "h2";
  const isBrowser = typeof window !== "undefined";
  // const currentWidth = 0;
  // if (isBrowser) {
  //   const currentWidth = window.innerWidth;
  // }

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
    // <section
    //   className={`bg-cta pt-14 md:pt-20 pb-18 md:pb-10 ${
    //     className || ""
    //   }`}
    // >
    <section class = "bg-no-repeat bg-cover bg-center md:pb-18 md:pb-18" style={{backgroundImage: `url('${houseImg}')`}}>
      
      <div className="container pt-20">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end md:mb-8">
          <header className="max-w-2xl md:text-left">          
            <HeadingTag class = "text-primary-100 text-4xl-x mb-3 font-light">
              {heading || ["Get a Free Consultation"]}
            </HeadingTag>

            <p className="text-base md:text-base text-white md:mb-0">
              {subtext ||
                "Work smarter, not harder. Get started with High Echelon, a top small business CPA firm serving the greater Atlanta area and Georgia, today."}
            </p>
          </header>

          <div className="block md:flex md:items-center md:space-x-4">
            <ButtonSolidGold
                onClick={()=>openContactModal()} 
                text="Book a Call"
                className="w-full md:w-auto mb-28 md:mb-0"
              />
          </div>
        </div>
      
      </div>
      <div className="text-center justify-center flex">
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
    </section>
  );
};

export default CTA;
