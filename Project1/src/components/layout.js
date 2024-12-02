import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import { Gray } from "../themes/Gray";
import "./layout.css";

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={Gray}>
    <Header />
    <Content>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        {new Date().getFullYear()} · Built with Gatsby
      </footer>
    </Content>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
