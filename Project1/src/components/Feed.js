import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feed = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost {
        nodes {
          title
          slug
        }
      }
    }
  `);

  return (
    <FeedWrapper>
      {data.allContentfulPost.nodes.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <Link to={`/post/${post.slug}`}>Read More</Link>
        </div>
      ))}
    </FeedWrapper>
  );
};

export default Feed;
