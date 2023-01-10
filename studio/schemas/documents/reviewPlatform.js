export default {
  title: "Review Platforms",
  name: "reviewPlatform",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Order",
      name: "order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
