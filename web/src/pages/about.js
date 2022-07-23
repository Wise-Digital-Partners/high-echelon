import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />
        <section className="mb-20 md:mb-32 mt-12">
            <div className="container">
                <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
                    <div className="md:col-start-1 md:col-span-12">
                        <GatsbyImage image={data.aboutProfileImage.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="md:absolute bg-primary-700 shadow-inner md:col-start-6 md:col-span-7 p-12">
                        <h2 className="font-light text-4xl text-primary-200">
                            Small Business Accounting Services in Greater Atlanta
                        </h2>
                        <p className="font-light font-display text-xl md:text-xl">
                            You can’t manage a business without accurate financial statements. 
                            We can get you there.
                        </p>
                        <ButtonSolid
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
                <div className="flex items-center">
                    <div className="w-1/2 mr-20">
                        <GatsbyImage
                            image={
                                data.quotes.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="flex justify-center flex-col w-1/2">
                        <div className="">
                            <p className="text-4xl font-thin mb-6">How To Get Started</p>
                            <p className="text-base font-light  mb-6">
                                We begin with an introductory call at no cost to you.
                                First, we want to understand your goals and align on expectations,
                                timeline, and outcomes. And from there, we’ll present you with a
                                proposal outlining a plan and the associated costs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20 md:mb-32">
          <div className="container">
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
            <div className="px-40 mt-28 mb-8 text-center">
              <p className="text-4xl font-thin mb-6">Our Mission</p>
              <p className="text-base font-light">
                High Echelon provides top-quality work with
                total transparency. We believe accounting doesn’t
                need to be complicated and that clients should get
                the experience they deserve, which includes:
              </p>
            </div>
            <div className="mb-24 justify-center flex-col items-center">
              <div className="flex mx-100 items-center justify-center flex-col">
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
        </section>

        <ValueProps />

        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="px-20 flex">
              <div className="w-7/12 flex items-start flex-col px-16 mr-30">
                <div className="text-4xl text-thin mb-6">Meet Michelle Frank</div>
                <div className="text-base text-light mb-6">
                  Michelle is sharp and fiercely determined, bringing those attributes
                  to all elements of the firm and her life. Previously, she was a partner
                  at Fendrick & Associates before joining the team at Peachtree Capital, then
                  later starting her own business, High Echelon.

                  Michelle received her undergraduate degree at Emory and post-graduate at Georgia
                  State University. When she isn’t being a top Atlanta CPA, she’s running marathons,
                  hosting a podcast, and raising three girls.
                </div>
                <ButtonSolid
                  className="font-light"
                  href="/about/"
                  text="Book a Call"
              />
              </div>
              <div className="w-5/12">
                <GatsbyImage
                  image={data.michellProfileImage.childImageSharp.gatsbyImageData}
                  alt="Michell Profile"
                  className="mx-10 md:mx-16 min-w-[96px]"
                />
              </div>
            </div>
          </div>
        </section>
      {/* <Testimonials /> */}
    </Layout>
  );
};

export const query = graphql`
  {
    aboutProfileImage: file(relativePath: { eq: "6.0 About/1.0 Hero desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
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
