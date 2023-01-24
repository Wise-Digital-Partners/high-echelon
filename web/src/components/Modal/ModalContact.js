import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
// import tw from "twin.macro";

import Contact from "../Form/Contact";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

const closeContactModal = () => {
  document.getElementById("bottom-right-modal").style.display = "none";
}

  return (
    <StyledModal>
      {/* <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black/40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center pt-12 pb-4 md:py-4 px-5 border-b border-black-20">
              <a
                href="tel:773-501-3997"
                className="text-gray-900 hover:text-primary-100 hover:text-primary-400 font-medium"
              >
                <i className="fas fa-phone-alt mr-1"></i> (773) 501-3997
              </a>
              <i
                className="close fal fa-times text-xl text-black hover:text-primary-100 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-10 px-6 md:px-18 pb-24">
              <header className="mb-7 md:mb-5">
                <p className="heading-three">Contact Us</p>
                <p>
                  Ready to get started? We’d love to hear from you! Get in touch
                  with us today.
                </p>
              </header>

              <Contact />
            </div>
          </div>
        </div>
      </div> */}

      <div id="bottom-right-modal" data-modal-placement="bottom-right" tabindex="-1" className="modal h-full hidden z-50 fade overflow-y-auto overflow-x-hidden bg-white fixed top-0 right-0 right-0 w-full md:w-1/2 h-modal md:h-full" aria-hidden="false">
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
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <Contact />
            </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
