import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-background: #000000;
    --white-background: #FFFFFF;
    --background-3: #9718FF;
    --background-4: #6392E9;
    --background-5: #305AFF;
    --background-6: #B0EB6E;
    --white-text-color: #FFFFFF;
    --blue-text-color: #00F7FF;

    --box-shadow: #00FF55;

    --nav: #909090;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

/* Documentation link: https://developer.mozilla.org/pt-BR/docs/Web/CSS/scroll-behavior */

  body {
    color: var(--white-text-color);
    background: var(--black-background);
  }

  @keyframes changes-text-color {
  0%  {color: #A100C7;}
  20% {color: #00A1E6;}
  40% {color: #9dff00;}
  60% {color: #E6B02E;}
  80% {color: #DC0063;}
  100% {color: #A100C7;}
  }

  footer {
    margin: 60px 0 10px;
    display: flex;
    justify-content: center;

    p {
      font-family: decoy, serif;
      font-style: normal;
      font-weight: 300;
    }
  }
`
