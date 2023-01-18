// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import youtube from './documents/youtube';
import review from "./documents/review";
import siteSettings from "./documents/siteSettings";
import reviewPlatform from "./documents/reviewPlatform";
import testimonial from "./documents/testimonial";
import testimonialCategory from "./documents/testimonialCategory";
// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import iframe from "./objects/iframe";
// Object types
import accordion from "./objects/accordion";
import valueProp from "./objects/valueProp";
import reviews from "./objects/reviews";

import navLinks from "./objects/navLinks";
import list from "./objects/list";
import videoObject from "./objects/videoObject";
import link from "./objects/link";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    youtube,
    post,
    category,
    author,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    review,
    reviewPlatform,
    testimonial,
    testimonialCategory,
    siteSettings,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    iframe,
    accordion,
    valueProp,
    navLinks,
    list,
    link,
    videoObject,
    reviews,
  ]),
});
