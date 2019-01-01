// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  background: ${props => props.theme.eaBlue};
  color: white;
  box-shadow: 0px 1px 15px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 32px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 0 16px;
    align-items: center;
  }

  h1 {
    padding: 16px 32px 16px 0;
    margin: 0;
  }

  h2 {
    padding: 16px 0;
    margin: 0;
    font-weight: 400;
  }
`;

const Header = ({ title, subtitle }) => (
  <HeaderStyles>
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  </HeaderStyles>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  subtitle: '',
};

export default Header;
