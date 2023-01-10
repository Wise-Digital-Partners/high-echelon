export default {
  title: "Reviews",
  name: "review",
  type: "document",

  fields: [
    {
      title: "Date",
      name: "date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Profile Picture",
      name: "profilePicture",
      type: "image",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Stars",
      name: "stars",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5).integer().required(),
    },
    {
      title: "Review",
      name: "review",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Platform",
      name: "platform",
      type: "reference",
      options: {
        disableNew: true,
      },
      to: [{ type: "reviewPlatform" }],
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
      title: "name",
      platform: "platform.title",
      media: "profilePicture",
    },
    prepare({ title = "No title", platform, media }) {
      return {
        title,
        subtitle: platform,
        media,
      };
    },
  },
};
