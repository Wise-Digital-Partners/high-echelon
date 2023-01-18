export default {
  title: "Testimonials",
  name: "testimonial",
  type: "document",

  fields: [
    {
      title: "Testimonial",
      name: "testimonial",
      type: "text",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Make this testimonial featured",
      description: "Will appear in the repeated testimonials module",
      name: "featured",
      type: "boolean",
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          title: "Reference to Testimonial Categories",
          type: "reference",
          options: {
            disableNew: true,
          },
          to: {
            type: "testimonialCategory",
          },
        },
      ],
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
  preview: {
    select: {
      title: "testimonial",
      category0: "categories.0.title",
    },
    prepare({ title = "No title", category0 }) {
      return {
        title,
        subtitle: category0,
      };
    },
  },
};
