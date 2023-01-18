export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      layout: { width: "medium" },
      options: {
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/Wise-Digital-Partners/high-echelon",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "high-echelon.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { width: "small" } },
    {
      name: "netlify",
      layout: { width: "medium" },
      options: {
        title: "Netlify deploys",
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
};
