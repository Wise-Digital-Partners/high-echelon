import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="MacAsh Reviews | Chicago Mortgage Broker"
        description="Our testimonials speak for themselves. See why customers like you have much love for MacAsh, your local Chicago area independent mortgage broker."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        backgroundPosition="0 50%"
        mobileRemoveBackground={true}
        textMaxWidth="md:max-w-[427px]"
        textAlignment="text-center md:text-left"
        padding="pt-10 md:pt-24 pb-14 md:pb-32"
      >
        <h1>Love For MacAsh</h1>
        <p className="font-display italic text-xl md:text-2xl">
          If you're happy, we're happy. That’s why we love hearing from our
          customers.
        </p>

        <ButtonSolid href="/review-us/" text="Leave a Review" />
      </Hero>

      <GatsbyImage
        image={data.heroMobile.childImageSharp.gatsbyImageData}
        className="md:hidden w-full"
      />

      <section className="pt-16 md:pt-28 pb-22 md:pb-32">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
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
