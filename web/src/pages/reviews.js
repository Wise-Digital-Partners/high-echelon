import React from "react";
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
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />

      <Hero
        backgroundImages={data.reviewsBack.childImageSharp.gatsbyImageData}
        backgroundPosition="0 50%"
        mobileRemoveBackground={true}
        textAlignment="text-center md:text-left"
        padding="pt-10 md:pt-24 pb-14 md:pb-32"
      >
        <div className="flex justify-center items-center flex-col text-white">
          <h1 className="mb-6 text-white">Testimonials</h1>
          <p className="text-base ">
            Don’t just take our word for it—hear feedback directly from our clients.
          </p>

          <ButtonSolidGold href="/review-us/" text="Leave a Review" />
        </div>
      </Hero>

      <section className="pt-16 md:pt-28 pb-22 md:pb-32">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      <CallToAction />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#FCE4A7"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#FCE4A7"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
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
