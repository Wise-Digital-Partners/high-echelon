export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63bdf1786db87e09e94e33d8",
                  title: "Sanity Studio",
                  name: "high-echelon-cms",
                  apiId: "8cfcae62-549a-47f9-9ae0-168625d76dac",
                },
                {
                  buildHookId: "63bdf1eb4d4f84089d5ee9ed",
                  title: "Website",
                  name: "high-echelon",
                  apiId: "7de97307-b99d-412a-8ab5-a738a3c8eac6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Wise-Digital-Partners/high-echelon",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://high-echelon.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
