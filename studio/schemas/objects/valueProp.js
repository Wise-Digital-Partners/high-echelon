export default {
  title: "Value Prop",
  name: "valueProp",
  type: "object",
  fields: [
    {
      title: "Image/Icon",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
