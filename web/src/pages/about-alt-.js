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
import Portfolio from "../components/Repeating/Portfolio";

import goldStripe from "../images/global/goldStripe.svg"


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

  const closeContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "none"; 
  }

  // const [bookCall, setBookCall] = useState(0);

  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="About Us | Small Business CPA Firm | Atlanta | High Echelon"
        description="High Echelon is a nationwide CPA firm based in Atlanta, Georgia. Learn more about us and our focus on small businesses here!"
      />
      {/* HERO DESKTOP */}
      <section className="hidden md:block mb-20 md:mb-32">
        <div className="container">
          <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-10">
              <GatsbyImage
                image={data.aboutProfileImage.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="md:absolute bg-secondary-400 shadow-inner md:col-start-6 md:col-span-7 p-12">
              <h2 className="font-light text-4xl text-primary-200 mb-6">
                About High Echelon
              </h2>
              <p className="font-light text-base text-primary-200">
                High Echelon, P.C. is a nationwide CPA firm based in Atlanta,
                Georgia. It was founded by Michelle Frank, who built the type of
                firm she always wanted to work for herself—one focused on a
                great client experience. She maintains the highest standards and
                ethics as a CPA and values transparency, so clients always know
                exactly what they’re getting.
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
      {/* END OF HERO DESKTOP */}

      {/* HERO MOBILE */}
      <section className="md:hidden mb-20 md:mb-32">
        <div className="container">
          <div className="relative grid md:grid-cols-12 lg:gap-x-16 items-center">
            <div className="md-hidden">
              <GatsbyImage
                image={data.aboutProfileMobile.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="z-20 mt-[-128px] mx-4 bg-secondary-400 shadow-inner py-10 px-6">
              <h2 className="text-primary-200 font-light">
                About High Echelon
              </h2>
              <p className="font-light text-base text-primary-200">
                High Echelon, P.C. is a nationwide CPA firm based in Atlanta,
                Georgia. It was founded by CPA Michelle Frank, who built the
                type of firm she always wanted to work for herself—one focused
                on a great client experience. She maintains the highest
                standards and ethics as a CPA and values transparency, so
                clients always know exactly what they’re getting.
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
      </section>
      {/* END OF HERO MOBILE */}

      {/* ABOUT THE FIRM */}
      <section className="mt-12 mb-20 md:mb-32">
        <div className="container">
          <div className="lg:flex items-center md:block">
            <div className="hidden md:block lg:w-1/2 mr-0 lg:mr-20 mb-8">
              <GatsbyImage
                image={data.aboutTheFirm.childImageSharp.gatsbyImageData}
                alt="Small Business Consulting"
                className="rounded-[8px]"
              />
            </div>
            <div className="md:hidden mb-10">
              <GatsbyImage
                image={data.aboutTheFirm.childImageSharp.gatsbyImageData}
                alt="Small Business Consulting"
                className="rounded-[8px]"
              />
            </div>
            <div className="block w-full md:flex justify-center flex-col lg:w-1/2">
              <div className="md:px-4">
                <p className="text-4xl md:text-4xl font-thin mb-6">
                  The Story Behind the Firm
                </p>
                <p className="text-base font-light  mb-6">
                  CPA work is in Michelle’s blood. She follows in the footsteps
                  of her father, Robert 'Bob' Fendrick, who owned and managed
                  his own public accounting firm, Fendrick & Associates, for 25
                  years.
                  <br />
                  <br />
                  Michelle named the company after her grandfather Jerry
                  Fendrick's Thoroughbred horse, High Echelon. High Echelon won
                  the 1970 Belmont Stakes, one-third of the Triple Crown of
                  Thoroughbred Racing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF ABOUT THE FIRM */}

      {/* OUR MISION */}
      <section>
        <div className="flex justify-center items-center flex-col mb-20 md:mb-24">
          <img src={goldStripe} />
          <div className="mt-20 md:mt-28 mx-0 text-center lg:px-44 md:px-20">
            <p className="text-4xl md:text-4xl-x font-thin mb-6">Our Mission</p>
            <p className="text-base font-light">
              High Echelon provides top-quality work with total transparency. We
              believe accounting doesn’t need to be complicated and that clients
              should get the experience they deserve, which includes:
            </p>
          </div>
          <div className="mb-20 md:mb-24 justify-center flex-col items-center">
            <div className="flex mx-100 items-center justify-start flex-col">
              <div className="md:mx-100 mx-8">
                <div className="flex">
                  <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                  <p className="text-base font-semibold mb-4">
                    The BEST accounting, tax, and payroll services
                  </p>
                </div>
                <div className="flex">
                  <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                  <p className="text-base font-semibold mb-4">
                    The BEST communication and data flow
                  </p>
                </div>
                <div className="flex">
                  <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                  <p className="text-base font-semibold mb-4">
                    The BEST automation and security
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={goldStripe} />
        </div>
      </section>
      {/* END OF OUR MISION */}

      <ValueProps />

      {/* ABOUT */}
      <section>
        {/* MICH */}
        <div className="container mx-auto">
          <div className="flex-col-reverse gap-8 flex gap-x-5 my-12 md:grid grid-cols-1  md:grid-cols-12 justify-around">
            <div className="col-start-1 col-span-6 lg:col-start-2 h-full">
              <div className="lg:max-w-[550px] mr-0">
                <h3 className="text-4xl md:text-4xl-x font-thin mb-6">
                  Meet Michelle Frank
                </h3>
                <p className="text-base mb-2">
                  Michelle is sharp and fiercely determined, bringing those
                  attributes to all elements of the firm and her life.
                  Previously, she was a partner at Fendrick & Associates before
                  joining the team at Peachtree Capital, then later starting her
                  own business, High Echelon.
                </p>
                <p className="text-base mb-4">
                  Michelle received her undergraduate degree at Emory and
                  postgraduate at Georgia State University. When she isn’t being
                  a top Atlanta CPA, she’s running marathons, hosting a podcast,
                  and raising three girls.
                </p>
                <ButtonSolidGold
                  data-modal-open="bottom-right-modal"
                  onKeyDown={clickHandler}
                  onClick={clickHandler}
                  text="Book a Call"
                />
              </div>
            </div>
            {/* IMAGE COL */}
            <div className="grid !sm:order-2 sm:col-span-4 col-span-auto md:col-span-4 lg:col-span-5 ">
              <div className="place-self-start">
                <GatsbyImage
                  image={
                    data.michellProfileImage.childImageSharp.gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="rounded-[8px]"
                />
              </div>
            </div>
            {/* END OF IMAGE COL */}
          </div>
        </div>
        {/* END OF MICH */}

        {/* ROB */}
        <div className="container">
          <div className="gap-8 flex flex-wrap gap-x-5 my-12 md:grid  lg:grid-cols-12  ">
            <div className="col-span-4 md:col-start-1  lg:col-end-6 h-full">
              <div className=" grid md:col-span-4 lg:col-span-5 ">
                <div className="place-self-end">
                  <GatsbyImage
                    image={
                      data.robertProfileImage.childImageSharp.gatsbyImageData
                    }
                    alt="Small Business Consulting"
                    className="rounded-[8px]"
                  />
                </div>
              </div>
            </div>
            {/* TEXT COL */}
            <div className="col-start-6  md:col-end-12">
              <h3 className="text-4xl md:text-4xl-x font-thin mb-6">
                Meet Robert Fendrick
              </h3>
              <p className="text-sm mb-3">
                Robert Bob Fendrick comes to High Echelon with over 50 years of
                experience in the public accounting industry. He has a wide
                breadth of knowledge in all business matters, both nationally
                and internationally. He is a business consultant and an expert
                in payroll, accounting, and taxation matters. The majority of
                his career was spent as the founder and CEO of his own
                accounting firm, Fendrick & Associates. He joins High Echelon in
                an advisory role.
              </p>
              <p className="text-sm mb-3">
                Bob is a 1970 graduate of Miami University in Oxford, Ohio, with
                a Bachelor of Science in accounting. He was admitted to the
                State Board of Accountancy in New York in 1973 and has been an
                active CPA in Georgia since 1989. He spent the first part of his
                career in Manhattan working for Arthur Andersen. When he moved
                to Georgia, he went to work for an Atlanta-based chemical
                company as the European Controller and lived in Rome, Italy, for
                three years. Upon returning to Atlanta and prior to starting
                Fendrick & Associates, he was a founding member of Novartis
                (Ciba Vision Care), and then he helped start up an additional
                vision company. Bob founded Fendrick & Associates in 1987 and
                spent 30 years running his own public accounting firm before
                selling it.
              </p>
              <p className="text-sm">
                When Bob isn t in a CPA role, he can be found either playing
                bridge or tennis. He is a national champion and Grand Life
                Master of the American Contract Bridge League and has won
                numerous city and state championships in his ALTA and USTA
                tennis leagues. Bob is a father to two daughters, Michelle and
                Laura, and grandfather to five granddaughters. He and his wife,
                Judy, have been married for 25 years and reside in Marietta,
                Georgia.
              </p>
              <ButtonSolidGold
                data-modal-open="bottom-right-modal"
                onKeyDown={clickHandler}
                onClick={clickHandler}
                text="Book a Call"
              />
              {/* <ButtonSolidGold
                data-modal-open="bottom-right-modal"
                onKeyDown={clickHandler}
                onClick={clickHandler}
                text="Book a Call"
              className="md:mt-2"
              /> */}
            </div>
            {/* END OF TEXT COL */}
          </div>
        </div>
        {/* END OF ROB */}
        
        <div className="container">
          <div className="gap-8 flex flex-wrap gap-x-5 my-12 md:grid  lg:grid-cols-12  ">
            <div className="col-span-4 md:col-start-1  lg:col-end-6 h-full">
              <div className=" grid md:col-span-4 lg:col-span-5 ">
                <div className="place-self-end">
                  <GatsbyImage
                    image={
                      data.robertProfileImage.childImageSharp.gatsbyImageData
                    }
                    alt="Small Business Consulting"
                    className="rounded-[8px]"
                  />
                </div>
              </div>
            </div>
            {/* TEXT COL */}
            <div className="col-start-6  md:col-end-12">
              <h3 className="text-4xl md:text-4xl-x font-thin mb-6">
                Meet Robert Fendrick
              </h3>
              <p className="text-sm mb-3">
                Robert Bob Fendrick comes to High Echelon with over 50 years of
                experience in the public accounting industry. He has a wide
                breadth of knowledge in all business matters, both nationally
                and internationally. He is a business consultant and an expert
                in payroll, accounting, and taxation matters. The majority of
                his career was spent as the founder and CEO of his own
                accounting firm, Fendrick & Associates. He joins High Echelon in
                an advisory role.
              </p>
              <p className="text-sm mb-3">
                Bob is a 1970 graduate of Miami University in Oxford, Ohio, with
                a Bachelor of Science in accounting. He was admitted to the
                State Board of Accountancy in New York in 1973 and has been an
                active CPA in Georgia since 1989. He spent the first part of his
                career in Manhattan working for Arthur Andersen. When he moved
                to Georgia, he went to work for an Atlanta-based chemical
                company as the European Controller and lived in Rome, Italy, for
                three years. Upon returning to Atlanta and prior to starting
                Fendrick & Associates, he was a founding member of Novartis
                (Ciba Vision Care), and then he helped start up an additional
                vision company. Bob founded Fendrick & Associates in 1987 and
                spent 30 years running his own public accounting firm before
                selling it.
              </p>
              <p className="text-sm">
                When Bob isn t in a CPA role, he can be found either playing
                bridge or tennis. He is a national champion and Grand Life
                Master of the American Contract Bridge League and has won
                numerous city and state championships in his ALTA and USTA
                tennis leagues. Bob is a father to two daughters, Michelle and
                Laura, and grandfather to five granddaughters. He and his wife,
                Judy, have been married for 25 years and reside in Marietta,
                Georgia.
              </p>
              <ButtonSolidGold
                data-modal-open="bottom-right-modal"
                onKeyDown={clickHandler}
                onClick={clickHandler}
                text="Book a Call"
              />
              {/* <ButtonSolidGold
                data-modal-open="bottom-right-modal"
                onKeyDown={clickHandler}
                onClick={clickHandler}
                text="Book a Call"
              className="md:mt-2"
              /> */}
            </div>
            {/* END OF TEXT COL */}
          </div>
        </div>
      </section>
      {/* END OF ABOUT */}

      <Testimonials />
    </Layout>
  );
};


export const query = graphql`
  {
    aboutProfileImage: file(
      relativePath: { eq: "6.0 About/1.0 Hero desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 920)
      }
    }
    aboutProfileMobile: file(
      relativePath: { eq: "6.0 About/1.0 Hero mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 350)
      }
    }
    michellProfileImage: file(
      relativePath: { eq: "common/mich.jpg" }
    ) {
      childImageSharp {
      gatsbyImageData(layout: FIXED, width: 350, transformOptions: {fit: FILL})
      }
    }    
    robertProfileImage: file(
      relativePath: { eq: "common/rob.jpg" }
    ) {
      childImageSharp {
      gatsbyImageData(layout: FIXED, width: 350, transformOptions: {fit: FILL})
      }
    }
    aboutTheFirm: file(
      relativePath: { eq: "6.0 About/2.0 story collage static.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
