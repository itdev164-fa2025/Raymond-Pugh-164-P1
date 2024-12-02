import React from "react";
import { graphql } from "gatsby";

const PostTemplate = ({ data }) => {
  const { title, body, image, author } = data.contentfulPost;

  return (
    <div>
      <h1>{title}</h1>
      {image && <img src={image.file.url} alt={title} />}
      <p>By: {author}</p>
      {body && <div dangerouslySetInnerHTML={{ __html: body.raw }} />}
    </div>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      image {
        file {
          url
        }
      }
      author
    }
  }
`;

export default PostTemplate;
