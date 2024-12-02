import React from "react";
import styled from "styled-components";
import { renderRichText } from "@contentful/rich-text-react-renderer";

const PostContainer = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
`;

const Post = ({ title, body, image, author }) => (
  <PostContainer>
    <h2>{title}</h2>
    {image && <img src={image} alt={title} style={{ maxWidth: "100%" }} />}
    <p>By: {author}</p>
    <div>{renderRichText(JSON.parse(body))}</div>
  </PostContainer>
);

export default Post;
