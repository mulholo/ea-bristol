import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-size-adjust: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const theme = {
  eaBlue: '#0c869b',
  maxWidth: 720,
};

const LayoutContainer = styled.div`
  max-width: ${props => props.theme.maxWidth}px;
  margin: auto;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <GlobalStyle />
        <Header brand={<h1>EA Bristol</h1>} />
        {children}
      </LayoutContainer>
      {/* Footer */}
    </ThemeProvider>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
