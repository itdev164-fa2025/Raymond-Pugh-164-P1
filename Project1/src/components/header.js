import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: var(--color-primary);
  padding: var(--space-4);
`;

const Header = () => (
  <HeaderWrapper>
    <h1>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Ray's Social Media Site
      </Link>
    </h1>
  </HeaderWrapper>
);

export default Header;
