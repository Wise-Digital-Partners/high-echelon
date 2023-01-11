import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { mapEdgesToNodes } from "../../lib/helpers";

const ReviewCards = ({ gridLayout }) => {
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 123)
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 123)
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 123)
        }
      }
            headshot: file(relativePath: { eq: "reviews/user.svg" }) {
        publicURL
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

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }


  const reviewNodes = (data || {}).reviews ? mapEdgesToNodes(data.reviews) : [];

  return (
    <>
      {reviewNodes.map((review, i) => {
        return (
          <div
            className={`w-full bg-white shadow-2xl rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-3.5">
                  <span className="text-gray-900 font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
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
