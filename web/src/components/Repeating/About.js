import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonGhost from "../Button/ButtonGhost";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      aboutDesktop: file(relativePath: { eq: "repeating/about/Michelle B&W.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 941)
        }
      }
      aboutMobile: file(relativePath: { eq: "repeating/about/Michelle B&W mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 941)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="md:container">
        <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
          <div className="hidden md:block md:col-start-1 md:col-span-10">
            <GatsbyImage image={data.aboutDesktop.childImageSharp.gatsbyImageData} />
          </div>
          <div className="md:hidden md:col-start-1 md:col-span-10">
            <GatsbyImage image={data.aboutMobile.childImageSharp.gatsbyImageData} />
          </div>
          <div className="relative">
            <div className="absolute top-[-128px] mx-4 md:mt-0 bg-white shadow-inner md:col-start-6 md:col-span-7 ml p-6 py-20 md:p-20">
              <HeadingTag className="text-primary-700 font-light">
                Who We Are
              </HeadingTag>
              <p className="text-base md:text-base">
                CPA Michelle Frank founded High Echelon to help small businesses simplify 
                and streamline their finances so they can focus on growth and success. 
                Accounting doesn’t need to be complicated—we make it easy.
              </p>
              <ButtonGhost
                href="/about/"
                text="Read Our Story"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
