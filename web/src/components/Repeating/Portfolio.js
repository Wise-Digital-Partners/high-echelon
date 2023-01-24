import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SliderOverflow from "../Slider/SliderOverflow";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
const Portfolio = ({ node, headingLevel, className, title }) => {
  const data = useStaticQuery(graphql`
    {
      image1: file(
        relativePath: { eq: "common/services-business_consulting.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350 )
        }
      }
      image2: file(
        relativePath: { eq: "common/services-payroll.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350 )
        }
      }
      image3: file(
        relativePath: { eq: "common/services-accounting.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350 )
        }
      }
      image4: file(
        relativePath: {
          eq: "common/services-tax_prep.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350 )
        }
      }
      image5: file(
        relativePath: { eq: "common/services-business_coaching.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350 )
        }
      }
      image6: file(
        relativePath: {
          eq: "common/services-cybersecurity.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350 )
        }
      }
   
    }
  `);

  const HeadingTag = headingLevel || "h2";

  const portfolio = [
    {
      image: data.image6.childImageSharp.gatsbyImageData,
    },
    {
      image: data.image5.childImageSharp.gatsbyImageData,
    },
    {
      image: data.image4.childImageSharp.gatsbyImageData,
    },
    {
      image: data.image3.childImageSharp.gatsbyImageData,
    },
    {
      image: data.image2.childImageSharp.gatsbyImageData,
    },
    {
      image: data.image1.childImageSharp.gatsbyImageData,
    },

  ];

  return (
    <>
      <section
        className={` ${className || "mb-20 overflow-x-hidden md:mb-32"}`}
      >
        <div className="container">
          <div className="container 
"><p className="text-4xl font-thin block pl-[16px] 
mb-6">Streamline Everything. Get The Full Benefit.
            </p>          <p className="pl-[16px] 
mb-6 w-[600px]">
              Get the best results when you combine our expert advice with end-to-end services that manage your finances in a full-stack solution.</p>   </div> 
      
          <SliderOverflow>
     
            <div className="w-[350px] ">
              <AniLink fade to="/small-business-consulting-services-atlanta/" className="mr-10 mb-6 w-1/3">
              <GatsbyImage image={data.image1.childImageSharp.gatsbyImageData}/>
              <h3 className="heading-four">
                Small Business Consulting
              </h3>
              <div className="block">
                <p className="text-sm mb-4">
                  Need advice or help in navigating the best way to form your business?
                  The small business consulting experts at High Echelon are here to help.
                </p>
              </div>
              </AniLink>
            </div>            
            <div className="w-[350px] ">
              <AniLink fade to="/payroll-management-services-atlanta/" className="mr-10 mb-6 w-1/3">
              <GatsbyImage image={data.image2.childImageSharp.gatsbyImageData} />

              <h3 className="heading-four">
                Payroll Management
              </h3>
              <div className="block">
                <p className="text-sm mb-4">
                  Get lightweight, user-friendly, cost-efficient payroll processing, complete with automated hiring and termination of employees.
                </p>
              </div>
              </AniLink>
            </div>          
            <div className="w-[350px] ">
              <AniLink fade to="/small-business-accounting-services-atlanta/" className="mr-10 mb-6 w-1/3">
              <GatsbyImage image={data.image3.childImageSharp.gatsbyImageData} />

              <h3 className="heading-four">
                Accounting Services
              </h3>
              <div className="block">
                <p className="text-sm mb-4">
                  Get wise advice on starting a new business or restructuring an existing one.
                </p>
              </div>
              </AniLink>
            </div>           
            <div className="w-[350px] ">
              <AniLink fade to="/business-coaching-advisory-services-atlanta/" className="mr-10 mb-6 w-1/3">
              <GatsbyImage image={data.image4.childImageSharp.gatsbyImageData} />

              <h3 className="heading-four">
                Tax Preparation
              </h3>
              <div className="block">
                <p className="text-sm mb-4">
                  Get tax preparation for yourself or your business.

                </p>
              </div>
              </AniLink>
            </div>            
            <div className="w-[350px] ">
              <AniLink fade to="/business-coaching-advisory-services-atlanta/" className="mr-10 mb-6 w-1/3">
              <GatsbyImage image={data.image5.childImageSharp.gatsbyImageData} />

              <h3 className="heading-four">
                Business Coaching and Advisory
              </h3>
              <div className="block">
                <p className="text-sm mb-4">
                  We provide a sounding board for what you want to accomplish and help you get there.

                </p>
              </div>
              </AniLink>
            </div>            
            <div className="w-[350px] ">
              <AniLink fade to="/cyber-security-data-protection-atlanta/" className="mr-10 mb-6 w-1/3">
              <GatsbyImage image={data.image6.childImageSharp.gatsbyImageData} />

              <h3 className="heading-four">
                Business Coaching and Advisory
              </h3>
              <div className="block">
                <p className="text-sm mb-4">
                  We provide a sounding board for what you want to accomplish and help you get there.

                </p>
              </div>
              </AniLink>
            </div>
          </SliderOverflow>
        </div>
      </section>
    </>
  );
};

export default Portfolio;