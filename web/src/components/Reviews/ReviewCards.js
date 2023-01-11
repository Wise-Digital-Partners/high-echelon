import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { mapEdgesToNodes } from "../../lib/helpers";

const ReviewCards = () => {
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 74)
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 85)
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 123)
        }
      }
reviews: allSanityReview(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            review
            name
            platform {
              title
            }
          }
        }
      }
    }
  `);

  const reviewNodes = (data || {}).reviews ? mapEdgesToNodes(data.reviews) : [];

  return (
    <>
      {reviewNodes.map((review, i) => {
        return (
          <div
            className="break-inside w-full bg-black rounded-lg mb-8 md:mb-10 py-8 md:py-12 px-6 md:px-8"
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <div className="ml-3.5">
                  <span className="text-primary-50 font-bold">
                    {review.name}
                  </span>
                </div>
              </div>

              {review.platform.title === "Google" && (
                <GatsbyImage
                  image={data.google.childImageSharp.gatsbyImageData}
                />
              )}

              {review.platform.title === "Yelp" && (
                <GatsbyImage
                  image={data.yelp.childImageSharp.gatsbyImageData}
                />
              )}

              {review.platform.title === "Facebook" && (
                <GatsbyImage
                  image={data.facebook.childImageSharp.gatsbyImageData}
                />
              )}
            </div>
            <blockquote>
              <q className="block mb-0 font-normal before:hidden">
                {review.review}
              </q>
            </blockquote>
          </div>
        );
      })}
    </>
  );
};

export default ReviewCards;
