import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonGhost from "../Button/ButtonGhost";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      aboutDesktop: file(
        relativePath: { eq: "repeating/about/Michelle_HE_109-2 1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 941)
        }
      }
      aboutMobile: file(
        relativePath: { eq: "repeating/about/michelle-frank-mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 941)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
<div className="container">
  <div className="w-full grid grid-cols-12">
          <div className="relative col-span-8 md:col-span-5 ">
      <div className="md:my-18 md:mt-16 absolute w-full bg-white shadow-xl z-[5] px-[25px] py-[50px] lg:p-[60px]">
        <h3 className="font-heading/50 heading-one font-thin">
                Who We Are
        </h3>
        <p>
                CPA Michelle Frank founded High Echelon to help small businesses simplify and streamline their finances so they can focus on growth and success. Accounting doesn’t need to be complicated—we make it easy.
        </p>
              <ButtonGhost href="/about/" altStyle={1} text="Read Our Story" />
                


      </div>
    </div>
    <div className="col-span-12 w-[850px] col-start-4">
            <div className="hidden md:block md:col-start-1 md:col-span-10">
              <GatsbyImage image={data.aboutDesktop.childImageSharp.gatsbyImageData} />
            </div>
            <div className="md:hidden md:col-start-1 md:col-span-10">
              <GatsbyImage image={data.aboutMobile.childImageSharp.gatsbyImageData} />
            </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default About;
