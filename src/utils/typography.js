import Typography from 'typography';

/*
 * This sets all typographic styles automagically using Gatsby Tyopgraphy plugin:
 * https://www.gatsbyjs.org/packages/gatsby-plugin-typography/?=typography
 */

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Merriweather', 'Georgia', 'Garamond', 'serif'],
});

export default typography;
