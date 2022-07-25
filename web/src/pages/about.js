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
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="About MacAsh | Chicago Mortgage Lender"
        description="Meet MacAsh, a Chicago area, family-owned mortgage lending company. We're a team of skilled mortgage experts and loan officers ready to work for you. Apply now!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-32 pt-10 md:pt-0 overflow-x-hidden">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-5 lg:gap-x-10 gap-y-8 items-center">
            <div className="relative z-20 md:col-start-1 md:col-span-5">
              <h1>Meet The MacAsh Family</h1>
              <p className="font-display italic text-xl md:text-2xl">
                We’re a family-owned mortgage broker built on honesty and trust.
                Our customers are truly at the heart of everything we do. Our
                goal is to help guide you and your family through one of the
                biggest decisions you’ll make—purchasing a home.
              </p>
              <ButtonSolid href="/request-rates/" text="Let’s Begin" />
            </div>
            <div className="relative md:h-[540px] -mx-4 md:mx-0 md:col-end-13 md:col-span-7">
              <div className="md:absolute md:left-0 md:w-[58vw] md:h-full overflow-hidden">
                <div className="hidden md:block bg-white w-60 transform rotate-[-20deg] h-screen absolute -left-20 top-0 z-10"></div>
                <GatsbyImage
                  image={data.heroDesktop.childImageSharp.gatsbyImageData}
                  className="w-full md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="max-w-[950px] mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="bg-gray-200 h-0.5 w-full"></div>
              <GatsbyImage
                image={data.quotes.childImageSharp.gatsbyImageData}
                alt="Quotes"
                className="mx-10 md:mx-16 min-w-[96px]"
              />
              <div className="bg-gray-200 h-0.5 w-full"></div>
            </div>

            <blockquote className="font-display text-center px-10 mb-12 md:mb-16">
              <q className="mb-6 block">
                When I first started the business, my 11-year-old daughter,
                Macayla Ashley, asked me what I do. I patiently walked her
                through how a loan works, and she said, "so you help people get
                a home." Yes, exactly, I told her. This sat with me, and I
                realized that if my child can understand our company's vision,
                we have to be doing something right. She's the inspiration
                behind the company name, MacAsh.
              </q>
              <cite>
                <div className="font-display italic text-xl md:text-2xl">
                  Kevin "KC" Duffy
                </div>
              </cite>
            </blockquote>

            <div className="bg-gray-200 h-0.5 w-full"></div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-10 lg:gap-x-16 items-center">
            <div className="md:col-start-1 md:col-span-7">
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Top Mortgage Lender Focused on Chicago"
              />
            </div>
            <div className="md:col-end-13 md:col-span-5">
              <h2>The Team Working For You</h2>
              <p className="font-display tracking-wide">
                Our team of skilled loan officers is ready to help you buy your
                new home. At MacAsh, we work with you to find the best programs
                and rates, and we make the loan process quick and easy—from
                application to close.
              </p>
              <ButtonGhost
                href="/team/"
                text="Get To Know Us"
                icon="far fa-arrow-right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>What We Stand For</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-16 md:gap-x-10 lg:gap-x-20">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div>
                <img src={data.honesty.publicURL} alt="Honesty" />
              </div>
              <div>
                <h3 className="heading-four mb-2">Honesty</h3>
                <p className="mb-0">
                  We highly value the relationships we form with customers.
                  They’re always built on honesty and trust.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div>
                <img src={data.transparency.publicURL} alt="Transparency" />
              </div>
              <div>
                <h3 className="heading-four mb-2">Transparency</h3>
                <p className="mb-0">
                  Everything we know, you know. We’re transparent about the loan
                  process from start to finish.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div>
                <img src={data.trust.publicURL} alt="Trust" />
              </div>
              <div>
                <h3 className="heading-four mb-2">Trust</h3>
                <p className="mb-0">
                  What we say is what we do. You can trust us to guide you and
                  fulfill our promises.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div>
                <img src={data.communication.publicURL} alt="Communication'" />
              </div>
              <div>
                <h3 className="heading-four mb-2">Communication</h3>
                <p className="mb-0">
                  We’ll give advice, answer questions, and help guide you every
                  step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ValueProps />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
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
    quotes: file(relativePath: { eq: "7.0 About/quotes.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 96)
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
