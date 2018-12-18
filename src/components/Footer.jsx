import PropTypes from 'prop-types';
import React from 'react';

// This is currently unused. Style as needed
const Footer = ({ children, ...props }) => <div {...props}>{children}</div>;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
