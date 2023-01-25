import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { mapEdgesToNodes } from "../../lib/helpers";
import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-arrow {
    ${tw`w-16 h-16 rounded-full bg-primary-100 hover:bg-secondary-400 flex items-center justify-center text-white hover:text-white text-3xl no-underline`}
  }
  .slick-prev {
    ${tw`md:-left-10 lg:-left-44 xl:-left-48`}
  }
  .slick-next {
    ${tw`md:-right-10 lg:-right-44 xl:-right-48`}
  }

`;

const Testimonial = ({ className, category }) => {
  const data = useStaticQuery(graphql`
    {
      desktopBg: file(
        relativePath: { eq: "common/0.0_repeating_testimonial_desktop.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      mobileBg: file(
        relativePath: { eq: "common/0.0_repeating_testimonial-bkg-mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 74)
        }
      }
      yelp: file(relativePath: { eq: "repeating/testimonials/Yelp-alt.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 74)
        }
      }
      google: file(relativePath: { eq: "repeating/testimonials/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 85)
        }
      }
      facebook: file(
        relativePath: { eq: "repeating/testimonials/facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 123)
        }
      }
      testimonials: allSanityTestimonials(
        sort: { fields: [order], order: ASC }
      ) {
        edges {
          node {
            id
            review
            name
            businessNameTitle
            featured
            platform
            categories {
              title
            }
          }
        }
      }
    }
  `);
  let testimonialsNodes = [];

  category && Array.isArray(category) && category.length > 0
    ? (testimonialsNodes = (data || {}).testimonials
        ? mapEdgesToNodes(data.testimonials).filter((array) =>
            category.some((filterArray) =>
              array.categories.some((item) => item.title === filterArray.title)
            )
          )
        : [])
    : category && category.length > 0
    ? (testimonialsNodes = (data || {}).testimonials
        ? mapEdgesToNodes(data.testimonials).filter((items) =>
            items.categories.find((item) => item.title === category)
          )
        : [])
    : (testimonialsNodes = (data || {}).testimonials
        ? mapEdgesToNodes(data.testimonials).filter((items) => items.featured)
        : []);
  return (
    <section className={`pb-20 md:pb-32 ${className}`}>

      <div className="container relative">
        <div>
          <div className="px-20 absolute left-0 top-0 mx-auto w-full h-full">
            <GatsbyImage className="w-full" image={data.desktopBg.childImageSharp.gatsbyImageData} />
          </div>
          <div className="rounded-4xl bg-transparent  pt-6 pb-8 text-center  md:pt-12 md:pb-10 ">
            <StyledSlider className="relative">
              <Slider className="relative">
                {testimonialsNodes.slice(0, 6).map((testimonial, i) => {
                  return (
                    <div key={i}>
                      <blockquote className="mx-auto md:max-w-[720px] md:px-8">
                        <footer className="mb-5">
                          <div>
                            <cite className="not-italic">
                              <div className="heading-three mb-0 text-gray-800">
                                {testimonial.name}
                              </div>
   
                            </cite>
                          </div>
                        </footer>
                        <q className="text-body font-normal mb-1.5 text-black/95 before:hidden">
                          {testimonial.review}
                        </q>

                        <div className="mb-14 flex justify-center">
     
                        </div>
                      </blockquote>
                    </div>
                  );
                })}
              </Slider>
            </StyledSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
