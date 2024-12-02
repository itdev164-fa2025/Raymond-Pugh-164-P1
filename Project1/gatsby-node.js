const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type ContentfulPost implements Node {
      title: String
      slug: String
      body: ContentfulRichText
      image: ContentfulAsset
      author: String
    }
  `);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/post.js`);

  const result = await graphql(`
    query {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allContentfulPost.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/post/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    });
  });
};
