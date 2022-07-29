import React from "react";
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
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />
        <section className="hidden md:block mb-20 md:mb-32 mt-12">
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
                          High Echelon Certified Public Accountants is a nationwide CPA firm based in Atlanta, Georgia.
                          It was founded by CPA Michelle Frank, who built the type of firm she always wanted to work for
                          herself—one focused on a great client experience. She maintains the highest standards and ethics
                          as a CPA and values transparency, so clients always know exactly what they’re getting.
                        </p>
                        <ButtonSolidGold
                            className="font-light"
                            href="/about/"
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
                        <GatsbyImage image={data.aboutProfileMobile.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="z-20 mt-[-128px] mx-4 bg-primary-700 shadow-inner py-10 px-6">
                        <h2 className="text-primary-200 font-light">
                          About High Echelon
                        </h2>
                        <p className="font-light text-base text-primary-200">
                          High Echelon Certified Public Accountants is a nationwide CPA firm based in Atlanta, Georgia.
                          It was founded by CPA Michelle Frank, who built the type of firm she always wanted to work for
                          herself—one focused on a great client experience. She maintains the highest standards and ethics
                          as a CPA and values transparency, so clients always know exactly what they’re getting.
                        </p>
                        <ButtonSolidGold
                            className="font-light"
                            href="/about/"
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
                    <div className="flex justify-center flex-col lg:w-1/2">
                        <div className="md:px-4">
                            <p className="text-5xl font-thin mb-6">The Story Behind the Firm</p>
                            <p className="text-base font-light  mb-6">
                            CPA work is in Michelle’s blood—she follows in the footsteps of her grandfather,
                            Jerry Fendrick, and father, Bob Fendrick. Both founded CPA firms of their own,
                            and the family has decades of experience in the industry.<br/>
                            Michelle named the company after her grandfather’s famous thoroughbred horse,
                            High Echelon, which won the 1970 Belmont Stakes, one-third of the Triple Crown of Thoroughbred Racing.
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
              <div className="mt-28 mx-0 text-center lg:px-44 md:px-20">
                <p className="text-4xl-x font-thin mb-6">Our Mission</p>
                <p className="text-base font-light">
                  High Echelon provides top-quality work with
                  total transparency. We believe accounting doesn’t
                  need to be complicated and that clients should get
                  the experience they deserve, which includes:
                </p>
              </div>
              <div className="mb-24 justify-center flex-col items-center">
              
                <div className="flex mx-100 items-center justify-start flex-col">
                  <div className="mx-100">
                    <div className="flex">
                        <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                        <p className="text-base font-semibold mb-4">styleName: Body Medium/Medium-Semi-bold;</p>
                    </div>
                    <div className="flex">
                        <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                        <p className="text-base font-semibold mb-4">The BEST communication and data flow</p>
                    </div>
                    <div className="flex">
                        <i className="fa fa-check text-primary-100 mr-4 text-2xl"></i>
                        <p className="text-base font-semibold mb-4">The BEST accounting, tax, and payroll services</p>
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
              <div className="lg:w-7/12 flex items-start justify-center flex-col lg:px-16 md:px-4 sm:px-2 mr-30 sm:w-full mb-8">
                <div className="text-5xl text-thin mb-6">Meet Michelle Frank</div>
                <div className="text-base text-light mb-6">
                  <p>
                  Michelle is sharp and fiercely determined, bringing those attributes
                  to all elements of the firm and her life. Previously, she was a partner
                  at Fendrick & Associates before joining the team at Peachtree Capital, then
                  later starting her own business, High Echelon.
                  </p><p className="mb-0">
                  Michelle received her undergraduate degree at Emory and post-graduate at Georgia
                  State University. When she isn’t being a top Atlanta CPA, she’s running marathons,
                  hosting a podcast, and raising three girls.</p>
                </div>
                <ButtonSolidGold
                  className="font-light"
                  href="/about/"
                  text="Book a Call"
              />
              </div>
              <div className="lg:w-5/12 sm:w-2/3">
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
      <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <p className="text-4xl-x font-light mb-0 text-center">Our Clients Say Its Best</p>
        <CarouselForm />
      </section>
      <CallToAction />
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
