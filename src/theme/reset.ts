import { createGlobalStyle } from 'styled-components'
import { withTheme } from 'styled-components'

const ResetStyles = createGlobalStyle`

  * {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }

  html, body, #root {
    height: 100%;
    font-family: 'Gilroy-Regular';
    font-size: 16px;
    color: ${props => props.theme.palette.light.white};
    background-color: ${props => props.theme.palette.light.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6, p, span, small {
    margin-bottom: 0;
  }
  h1, h2, h3, h4, h5, h6, span{
    font-weight: 700;
  }
  span, label{
    font-size: max(0.875rem, min(1rem + 16vw, 0.875rem));
  }
  
  a {
    color: ${props => props.theme.palette.light.white};
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color : ${props => props.theme.palette.light.white};
    }
  }
  h3 {
    font-weight: 700;
    font-size:  max(1.17rem, min(1rem + 16vw, 3rem));
   }
   h5 {
    color: #212529;
    font-size: 20px;
    font-family: 'Rubik', sans-serif !important;
   }

  h1 {
    font-weight: 700;
  }
  label, input, textarea, select, button {
    font-family: inherit;
  }

  svg[viewBox="0 0 24 24"]:not([data-color]) {
    fill: ${props => props.theme.palette.light.white};
  }

  textarea {
    overflow-wrap: break-word;
  }

  form {
    text-align: left;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  //Reset Css

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* Removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }
`

export default withTheme(ResetStyles)
