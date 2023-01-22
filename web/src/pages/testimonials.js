import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewCards from "../components/Reviews/ReviewCards";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
    return (
      <Layout headerDarkMode={true}>
            <SearchEngineOptimization
                title="Reviews | High Echelon CPA"
                openGraphImage={data.openGraphImage.publicURL}
                twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
              <h1 className="mb-6 text-white font-light">Testimonials</h1>
              <p className="text-base ">
                Don’t just take our word for it—hear feedback directly from our clients.
              </p>

              <ButtonSolidGold href="/review-us/" text="Leave a Review" />
            </div>
          </Hero>
        </section>
        <section className="block md:hidden bg-primary-700 px-4">

          <div className="flex justify-center items-center flex-col text-white pt-10 pb-14">
            <h1 className="mb-6 font-light text-white">Testimonials</h1>
            <p className="text-base text-center">
              Don’t just take our word for it—hear feedback directly from our clients.
            </p>

            <ButtonSolidGold href="/reviews/" text="Leave a Review" />
          </div>
        </section>

            <section className="pt-16 md:pt-20 pb-20 md:pb-32">
                <div className="container">
                    <div >
                        <ReviewCards className="grid" />
                    </div>
                </div>
            </section>

            <CallToAction />
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
    hero: file(relativePath: { eq: "reviews/Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Page;
