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
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      mobileBg: file(
        relativePath: { eq: "common/0.0_repeating_testimonial-bkg-mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      yelp: file(relativePath: { eq: "repeating/testimonials/Yelp-alt.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 110, quality: 100)
        }
      }
      google: file(relativePath: { eq: "repeating/testimonials/Google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 110, quality: 100)
        }
      }
      facebook: file(
        relativePath: { eq: "repeating/testimonials/Facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 110, quality: 100)
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
    <section className={`pb-20 md:pb-32  ${className}`}>
      <div className="container mx-auto text-center pb-8 pt-6">
        <h3 className="text-4xl md:text-4xl-x font-thin mb-6 ">
          Our Clients Say It Best
        </h3>
      </div>
      <div className="container relative">
        <div className="md:p-2 relative ">
          <div className=" rounded-4xl overflow-hidden bg-transparent hidden md:block md:px-20  absolute left-0 top-0 mx-auto w-full h-full">
            <GatsbyImage
              className="w-full h-full"
              image={data.desktopBg.childImageSharp.gatsbyImageData}
            />
          </div>
          <div className="md:px-20 md:hidden  absolute left-0 top-0 mx-auto w-full h-full overflow-hidden rounded-2xl">
            <GatsbyImage
              className="w-full h-full"
              image={data.mobileBg.childImageSharp.gatsbyImageData}
            />
          </div>
          <div className=" pt-[6.5rem] pb-8 text-center  md:pt-12 md:pb-10 ">
            <StyledSlider className="relative">
              <Slider className="relative">
                {testimonialsNodes.slice(0, 6).map((testimonial, i) => {
                  return (
                    <div key={i}>
                      <blockquote className="mx-auto md:max-w-[720px] md:px-8">
                        <footer className="mb-5">
                          <div>
                            <cite className="not-italic">
                              <div className="heading-four font-light mb-4 text-body">
                                {testimonial.name}
                              </div>
                            </cite>
                          </div>
                        </footer>
                        <q className=" text-sm px-4 lg:text-body font-normal mb-1.5 text-black/95 before:hidden">
                          {testimonial.review}
                        </q>
                        <div className="mb-14 flex justify-center mt-5">
                          {testimonial.platform === "Google" && (
                            <GatsbyImage
                              image={
                                data.google.childImageSharp.gatsbyImageData
                              }
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
      </div>
    </section>
  );
};

export default Testimonial;
