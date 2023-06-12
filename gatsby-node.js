const path = require("path")
const NewsTemplate = path.resolve("./src/templates/news.js")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all posts
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            slug
          }
        }
      }
      allWpNews {
        edges {
          node {           
            slug
          }
        }
      }
      allWpEvents {
        edges {
          node {           
            slug
          }
        }
      }
      allWpPartners {
        edges {
          node {           
            slug
          }
        }
      }
      allWpVideos {
        edges {
          node {           
            slug
          }
        }
      }
    }
  `)

  // Create pages for each post
  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
  // Create pages for each news item
  result.data.allWpNews.edges.forEach(({ node }) => {
    createPage({
      path: `/news/${node.slug}`, // Specify the path for the new page
      component: path.resolve("./src/templates/news.js"), // Specify the template for the new page
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
  result.data.allWpEvents.edges.forEach(({ node }) => {
    createPage({
      path: `/event/${node.slug}`, // Specify the path for the new page
      component: path.resolve("./src/templates/event_detail.js"), // Specify the template for the new page
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
  result.data.allWpPartners.edges.forEach(({ node }) => {
    createPage({
      path: `/partner/${node.slug}`, // Specify the path for the new page
      component: path.resolve("./src/templates/partner_detail.js"), // Specify the template for the new page
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`, // Specify the path for the new page
      component: path.resolve("./src/templates/blog_detail.js"), // Specify the template for the new page
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
  result.data.allWpVideos.edges.forEach(({ node }) => {
    createPage({
      path: `/video/${node.slug}`, // Specify the path for the new page
      component: path.resolve("./src/templates/videos_detail.js"), // Specify the template for the new page
      context: {
        // Pass the slug as context to the template
        slug: node.slug,
      },
    })
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // Only update the `/app` page.
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*"

//     // Update the page.
//     createPage(page)
//   }
// }
