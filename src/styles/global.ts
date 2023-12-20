import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-background: #000000;
    --white-background: #FFFFFF;
    --background-200: #a434f3;
    --background-300: #9718FF;
    --background-4: #6392E9;
    --background-5: #305AFF;
    --background-6: #284B63;
    --background-7: #003354;
    --black-text-color: #eeeee;
    --white-text-color: #FFFFFF;
    --blue-text-color: #00F7FF;

    --box-shadow: #00FF55;

    --background-400: #909090;
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

    @media only screen and (max-width: 647px) {
      font-size: 77.5%;
    }
  }

  body {
    background: #F0F0F0;
  }

/* Documentation link: https://developer.mozilla.org/pt-BR/docs/Web/CSS/scroll-behavior */

  @keyframes changes-text-color {
  0%  {color: #A100C7;}
  20% {color: #00A1E6;}
  40% {color: #9dff00;}
  60% {color: #E6B02E;}
  80% {color: #DC0063;}
  100% {color: #A100C7;}
  }

  footer {
    padding: 60px 0 10px;
    display: flex;
    justify-content: center;
    background: var(--background-7);
    color: white;

    p {
      font-family: decoy, serif;
      font-style: normal;
      font-weight: 300;
    }
  }
`
