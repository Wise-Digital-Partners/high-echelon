import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SliderOverflow from "../Slider/SliderOverflow";
import { GatsbyImage } from "gatsby-plugin-image";
import placeHolder from "../../images/common/0.0_repeating-services_cybersecurity.jpg"

const Portfolio = ({ node, headingLevel, className }) => {
  const data = useStaticQuery(graphql`
    {
      image1: file(
        relativePath: { eq: "14.0 Portfolio/concrete-tile-large.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 145)
        }
      }
      image2: file(
        relativePath: { eq: "14.0 Portfolio/gaf-single-ply-large-sd.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 145)
        }
      }
      image3: file(
        relativePath: { eq: "common/0.0_repeating-services_cybersecurity.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 145)
        }
      }
      image4: file(
        relativePath: {
          eq: "14.0 Portfolio/shingle-cool-shasta-white-large.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 145)
        }
      }
      image5: file(
        relativePath: { eq: "14.0 Portfolio/shingle-cool-summerwood.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 145)
        }
      }
      image6: file(
        relativePath: {
          eq: "14.0 Portfolio/shingle-designer-collection-large.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 145)
        }
      }
    }
  `);



  return (
    <>
      <section
        className={` ${className || "mb-20 overflow-x-hidden md:mb-32"}`}
      >
        <div className="container overflow-hidden">
 

          <SliderOverflow>
            <div className="max-w-140">
              <GatsbyImage
                image={placeHolder}
                alt="Payroll Management"
                className="h-10"
              />
              <div className="justify-center flex-col py-2">


                <h3 className="text-lg mb-4 text-primary-700">
                  Accounting Services              </h3>
                <p className="text-base">
                  Lighten your load with automated payroll processing, hiring, and termination.
                </p>
              </div>
            </div>            
            <div className="max-w-140">
              <GatsbyImage
                image={placeHolder}
                alt="Payroll Management"
                className="h-10"
              />
              <div className="justify-center flex-col py-2">


                <h3 className="text-lg mb-4 text-primary-700">
                  Accounting Services              </h3>
                <p className="text-base">
                  Lighten your load with automated payroll processing, hiring, and termination.
                </p>
              </div>
            </div>            
            <div className="max-w-140">
              <GatsbyImage
                image={placeHolder}
                alt="Payroll Management"
                className="h-10"
              />
              <div className="justify-center flex-col py-2">


                <h3 className="text-lg mb-4 text-primary-700">
                  Accounting Services              </h3>
                <p className="text-base">
                  Lighten your load with automated payroll processing, hiring, and termination.
                </p>
              </div>
            </div>            <div className="max-w-140">
              <GatsbyImage
                image={placeHolder}
                alt="Payroll Management"
                className="h-10"
              />
              <div className="justify-center flex-col py-2">


                <h3 className="text-lg mb-4 text-primary-700">
                  Accounting Services              </h3>
                <p className="text-base">
                  Lighten your load with automated payroll processing, hiring, and termination.
                </p>
              </div>
            </div>            
            <div className="max-w-140">
              <GatsbyImage
                image={placeHolder}
                alt="Payroll Management"
                className="h-10"
              />
              <div className="justify-center flex-col py-2">


                <h3 className="text-lg mb-4 text-primary-700">
                  Accounting Services              </h3>
                <p className="text-base">
                  Lighten your load with automated payroll processing, hiring, and termination.
                </p>
              </div>
            </div>            
            <div className="max-w-140">
              <GatsbyImage
                image={placeHolder}
                alt="Payroll Management"
                className="h-10"
              />
              <div className="justify-center flex-col py-2">


                <h3 className="text-lg mb-4 text-primary-700">
                  Accounting Services              </h3>
                <p className="text-base">
                  Lighten your load with automated payroll processing, hiring, and termination.
                </p>
              </div>
            </div>
          </SliderOverflow>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
