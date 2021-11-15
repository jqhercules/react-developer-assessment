import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /*============  Base ============  */
  *,::before, ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #F6F5FC;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  h1, h2, h3, h4, ul, p {
    margin: 0;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.raleway};
    font-weight: 400;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    letter-spacing: 1px;
  }

  /*============  Helpers ============  */
  .row {
    max-width: 81.25rem;
	  margin: 0 auto;
    height: 100%;
    position: relative;
    padding-left: 35px;
    padding-right: 35px;

    ${({ theme }) => theme.breakpoints.tabletLarge} {
      padding-left: 4.375rem;
      padding-right: 4.375rem;
    }
  }

`;

export default GlobalStyles;
