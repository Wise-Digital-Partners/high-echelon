import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { mapEdgesToNodes } from "../../lib/helpers";
import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-arrow {
    ${tw`w-16 h-16 rounded-full bg-primary-100 hover:bg-primary-700 flex items-center justify-center text-white hover:text-white text-3xl no-underline`}
  }
  .slick-prev {
    ${tw`md:-left-10 lg:-left-44 xl:-left-48`}
  }
  .slick-next {
    ${tw`md:-right-10 lg:-right-44 xl:-right-48`}
  }
  .slick-dots {
    ${tw`relative mt-7 md:mt-0 justify-center items-center space-x-3 !flex transition-all duration-[260ms] ease`}
    li {
      ${tw`h-1  rounded-[8px] bg-primary-100/30 hover:bg-primary-500 mr-0 flex-1 transition-colors duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-primary-100`}
      }
    }
  }


`;

const Testimonial = ({ className, category }) => {
  const data = useStaticQuery(graphql`
    {
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
      <div className="container">
        <div className="rounded-4xl bg-primary-700 px-6 pt-12 pb-8 text-center md:px-20 md:pt-20 md:pb-10 lg:px-40">
          <StyledSlider className="relative">
            <Slider>
              {testimonialsNodes.slice(0, 6).map((testimonial, i) => {
                return (
                  <div key={i}>
                    <blockquote className="mx-auto md:max-w-[720px] md:px-8">
                      <footer className="mb-10">
                        <div>
                          <cite className="not-italic">
                            <div className="heading-three mb-0 text-white">
                              {testimonial.name}
                            </div>
                            {testimonial.businessNameTitle && (
                              <div className="text-sm font-medium uppercase tracking-wide text-primary-100">
                                {testimonial.businessNameTitle}
                              </div>
                            )}
                          </cite>
                        </div>
                      </footer>

                      <q className="mb-10 text-white/95 before:hidden">
                        {testimonial.review}
                      </q>

                      <div className="mb-14 flex justify-center">
                        {testimonial.platform === "Google" && (
                          <GatsbyImage
                            image={data.google.childImageSharp.gatsbyImageData}
                          />
                        )}

                        {testimonial.platform === "Yelp" && (
                          <GatsbyImage
                            image={data.yelp.childImageSharp.gatsbyImageData}
                          />
                        )}

                        {testimonial.platform === "Facebook" && (
                          <GatsbyImage
                            image={
                              data.facebook.childImageSharp.gatsbyImageData
                            }
                          />
                        )}
                      </div>
                    </blockquote>
                  </div>
                );
              })}
            </Slider>
          </StyledSlider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
