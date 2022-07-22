import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

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
                        <GatsbyImage image={data.accountServicesImage.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="md:absolute bg-primary-700 shadow-inner md:col-start-6 md:col-span-7 ml p-12">
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

      <section className="mt-80 md:mt-120 mb-20 md:mb-32 pt-16 md:pt-24">
        <div className="container">
          <div className="gap-y-8 md:gap-x-10 lg:gap-x-16 items-center">
            <div className="mb-8">
              <h3 className="w-2/3 text-primary-700 text-4xl">
                We are Here To Make Your Business Better
              </h3>
              <p className="w-2/3 font-display italic text-xl md:text-base mt-6">
                Get streamlined end-to-end services for everything from entity
                formation to accounting, payroll, and taxes. It’s all here, in a
                single, full-stack solution that simplifies it all.
              </p>
            </div>
            <div className="flex mb-5">
              <AniLink fade to="/va-loans-chicago/" className="flex mr-5 w-1/2">
                <GatsbyImage
                  image={
                    data.smallBusinessConsultingImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-2 text-primary-700">
                    Small Business Consulting
                  </h3>
                  <p className="text-base">
                    Need advice or help in navigating the best way to form your
                    business? Talk with the experts.
                  </p>
                </div>
              </AniLink>
              <AniLink fade to="/va-loans-chicago/" className="flex mr-5 w-1/2">
                <GatsbyImage
                  image={
                    data.accountServicesImage.childImageSharp.gatsbyImageData
                  }
                  alt="Accounting Services"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-4 text-primary-700">
                    Accounting Services
                  </h3>
                  <p className="text-base">
                    Receive accurate, secure delivery of monthly, quarterly, and
                    annual financial statements.
                  </p>
                </div>
              </AniLink>
            </div>
            <div className="flex mb-5">
              <AniLink fade to="/va-loans-chicago/" className="flex mr-5 w-1/2">
                <GatsbyImage
                  image={
                    data.payrollManagementImage.childImageSharp.gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-4 text-primary-700">
                    Payroll Management
                  </h3>
                  <p className="text-base">
                    Get lightweight, user-friendly, cost-efficient payroll
                    processing, and hiring/termination automation.
                  </p>
                </div>
              </AniLink>
              <AniLink fade to="/va-loans-chicago/" className="flex mr-5 w-1/2">
                <GatsbyImage
                  image={
                    data.incomeTaxPreparationImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-4 text-primary-700">
                    Income Tax Preparation
                  </h3>
                  <p className="text-base">
                    Get propt tax preparation for yourself or your business,
                    including help with complicated returns.
                  </p>
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      </section>
      <ValueProps />
      <Testimonials />
      <About />
      {/* <RecentBlogPosts /> */}
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
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
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    accountServicesImage: file(
      relativePath: { eq: "3.0 Accounting Services/1.0 Hero desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 651)
      }
    }
    payrollManagementImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    incomeTaxPreparationImage: file(
      relativePath: { eq: "1.0 Homepage/3.3 Income Tax Prep desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
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
