import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 70)
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 86)
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110)
        }
      }
      zillow: file(relativePath: { eq: "reviews/zillow.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 88)
        }
      }
      headshot: file(relativePath: { eq: "reviews/user.svg" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "Karen 	Angsten",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "Refinancing was so easy with MacAsh Loans. KC made sure it was stress free, quick close and they came to my home for the signing. Oh, and lowered my interest rate. I would definitely recommend them.",
    },
    {
      name: "Scott C Reed",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "I just wanted to comment on MacAsh, I worked with Kevin and it seem very simple!He worked with me the entire time and that was pretty cool! I was shocked at how fast my refi was the whole thing only took about  10 days!",
    },
    {
      name: "Hennessy Lisa",
      platform: data.zillow.childImageSharp.gatsbyImageData,
      quote:
        "We went to Kevin to help us get a mortgage on the home we were renting. We had some credit “challenges” but that did not deter Kevin. He got us a fantastic rate and we closed as expected. He is very good at staying on top of every detail that needs to resolved to complete the loan.",
    },
    {
      name: "ajvijay",
      platform: data.zillow.childImageSharp.gatsbyImageData,
      quote:
        "I never expected that we could re-finance our investment property in 3 weeks. Kevin was super responsive, the entire process was very seamless and fast. We had a fantastic experience with Kevin from our very first call until closing. Thank you Kevin and MacAsh for helping us through this.",
    },
    {
      name: "jsilva125",
      platform: data.zillow.childImageSharp.gatsbyImageData,
      quote:
        "Communication, respect and responsiveness are very important to me and I can not say enough about Kevin and Macash when it comes to these attributes. I highly recommend them not only for this, but the superior rates he was able to secure me. Great communication every step of the way via email, call and text.",
    },
    {
      name: "RefugioBautista",
      platform: data.zillow.childImageSharp.gatsbyImageData,
      quote:
        "There's no shortage of lenders and broker's out there. It's a very competitive space but Kevin set the bar high. I refinanced with him and the entire process was easy, quick and efficient. I was always kept in the loop from applying to closing and felt like Kevin gave his 100% attention to my loan. Thank you!!",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
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
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
