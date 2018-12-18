// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ brand }) => <div>{brand}</div>;

Header.propTypes = {
  brand: PropTypes.node.isRequired,
};

export default Header;
