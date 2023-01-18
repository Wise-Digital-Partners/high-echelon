export default {
   title: "Video",
   name: "videoObject",
   type: "object",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
      },
      {
         title: "Video Poster Image",
         name: "videoPosterImage",
         type: "image",
      },
      {
         title: "Video Source",
         name: "videoSource",
         type: "url",
         validation: (Rule) =>
            Rule.uri({
               scheme: ["http", "https"],
               allowRelative: true,
            }),
      },
   ],
};
