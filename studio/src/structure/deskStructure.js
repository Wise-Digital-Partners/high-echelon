import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import { MdPerson, MdDescription, MdLocalOffer } from "react-icons/md";
import {
  FcDocument,
  FcReading,
  FcStart,
  FcGlobe,
  FcRating,
  FcList,
  FcAudioFile,
  FcSalesPerformance,
  FcConferenceCall,
  FcGoogle,
  FcTemplate,
} from "react-icons/fc";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://high-echelon.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Content")
    .items([

      S.listItem()
        .title("Blog posts")
        .icon(MdDescription)
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts")),
      S.listItem()
        .title("Authors")
        .icon(MdPerson)
        .schemaType("author")
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Categories")
        .icon(MdLocalOffer)
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Review Platforms")
        .icon(FcGoogle)
        .schemaType("reviewPlatform")
        .child(S.documentTypeList("reviewPlatform").title("Review Platforms")),
      S.listItem()
        .title("Reviews")
        .icon(FcTemplate)
        .schemaType("review")
        .child(S.documentTypeList("review").title("Reviews")),

      S.listItem()
        .title("Testimonials")
        .icon(FcRating)
        .schemaType("testimonials")
        .child(S.documentTypeList("testimonials").title("Testimonials")),

      S.listItem()
        .title("Testimonial Categories")
        .icon(FcList)
        .schemaType("testimonialCategory")
        .child(
          S.documentTypeList("testimonialCategory").title(
            "Testimonial Categories"
          )
        ),

        
        
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      // ...S.documentTypeListItems().filter(
      //   (listItem) =>
      //     !["category", "author", "post", "siteSettings"].includes(
      //       listItem.getId()
      //     )
      // ),
    ]);
