import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import ReviewCards from "../components/Reviews/ReviewCards";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
    return (
        <Layout>
            <SearchEngineOptimization
                title="Client Testimonials | Colorado Lawyer | JBP"
                description="We value your feedback. Share your experience with Jorgensen Brownell & Pepin, P.C. by leaving a review."
                openGraphImage={data.openGraphImage.publicURL}
                twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
            />

            <section className="relative py-16 md:py-32">
                <div className="absolute top-0 left-0 w-full h-full">
                    <GatsbyImage
                        image={data.hero.childImageSharp.gatsbyImageData}
                        className="h-full"
                    />
                </div>

                <div className="container relative">
                    <header className="md:max-w-[640px]">
                        <h1>Testimonials</h1>
                        <p>
                            We’ve helped thousands of people just like you. Here’s what our
                            clients say about their experience working with our team.
                        </p>

                        <ButtonSolid
                            altStyle={3}
                            href="/review-us/"
                            text="Leave a Review"
                        />
                    </header>
                </div>
            </section>

            <section className="pt-16 md:pt-20 pb-20 md:pb-32">
                <div className="container">
                    <div >
                        <ReviewCards className="md:col-count-2" />
                    </div>
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
    hero: file(relativePath: { eq: "reviews/Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Page;
