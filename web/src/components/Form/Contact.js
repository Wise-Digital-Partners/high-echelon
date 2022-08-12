import React, { useState, Component, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear`}
  }
`;




// export default class Form extends Component {
//  const Form = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { isValidated: false };
  // }

//  const [name, setName] = useState();
//  const [number, setNumber] = useState();
//  const [email, setEmail] = useState();
//  const [service, setService] = useState();
//  const [message, setMessage] = useState();
  
//  const [bookCall, setBookCall] = useState(1);
  // const [isValidated, setIsValidated] = useState(false);

  // const handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // useEffect = (() =>{
    
  // }, [bookCall])
 /* const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": name,
        "form-number" : number,
        "form-email" : email,
        "form-service" : service,
        "form-message" : message,
      }),
    })
      .then(
        () =>
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for contacting us! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "contactFormSubmission",
        })
      )
      .catch((error) => alert(error));
  }; */

 // return (
  //  <StyledForm>
    //  { <div id="contact-form-ajax-response"></div>
    /*  <form
        name="Contact"
        method="post"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="Contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>

        <div className="mb-5">
          <label
            className="font-body text-sm font-semibold text-gray-900 block mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
          <div className="mb-5">
            <label
              className="font-body text-sm font-semibold text-gray-900 block mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              required={true}
            />
          </div>
          <div className="mb-5">
            <label
              className="font-body text-sm font-semibold text-gray-900 block mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              required={true}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            className="font-body text-sm font-semibold text-gray-900 block mb-1"
            htmlFor="what-can-we-help-you-with"
          >
            What Can We Help You With?
          </label>
          <select
            name="what-can-we-help-you-with"
            onBlur={this.handleChange}
            required={true}
          >
            <option value="">Select one...</option>
            <option value="I want to purchase a home">
              I want to purchase a home
            </option>
            <option value="I want to refinance my home">
              I want to refinance my home
            </option>
            <option value="I have another question">
              I have another question
            </option>
          </select>
        </div>

        <div className="mb-5">
          <label
            className="font-body text-sm font-semibold text-gray-900 block mb-1"
            htmlFor="message"
          >
            Message (optional)
          </label>
          <textarea
            className="textarea"
            name="message"
            onChange={this.handleChange}
            rows="4"
            required={false}
          />
        </div>

        <ButtonSolid type="submit" text="Send Message" />
      </form> }*/


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
                  <>
                    <div id="contact-form-ajax-response"></div>
                    <form
                      name="contact-form"
                      method="POST"
                      data-netlify="true"
                    >
                     
          
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
                            <select name="service" className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear">
                              <option value="0" disabled selected>Select Ones ...</option>
                              <option value="Consulting">Consulting</option>
                              <option value="Accounting">Accounting</option>
                              <option value="Payroll">Payroll</option>
                              <option value="Tax">Income Tax Prep</option>
                              <option value="Other">Other</option>
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
                             
                              required={true}
                              rows="5"
                              className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                            />
                          </div>
                          <ButtonSolid
                            type="submit"
                            text="Send"
                            altStyle={true}
                            className="bg-primary-700 min-w-0 text-base w-1/3"
                          />
                        </div>
                    </form>
                  </>
                : 
                  <div className="mb-8">
                    <iframe src="https://calendly.com/michellehighechelon/30min" className="w-full h-full overflow-hidden min-h-[1200px]"></iframe>
                  </div>
                }
                      
              </div>

//   </StyledForm>
//  );
//}

export default Form;
