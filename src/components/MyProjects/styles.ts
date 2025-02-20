import styled from 'styled-components';

export const ProjectsSection = styled.section`
  display: flex;
  padding-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 4.5rem;
  max-width: 140rem;
  background: ${({ theme }) => theme.primaryColor};

  h2 {
    font-size: 35px;
    font-family: co-headline, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  div {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    background: rgb(58, 110, 221);
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: box-shadow 0.5s, transform 0.5s;
    
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      border: 0px solid ${({ theme }) => theme.accentColor};
      transition: border-width 0.5s ease-in-out;
    }

    &:hover {
      border-radius: 25px;
      box-shadow: 0px 0px 40px ${({ theme }) => theme.accentColor};
      transform: translate(0, -5px) scale(1.02);
    }

    &:hover::before {
      border-width: 4px;
    }

    h3 {
      margin-bottom: 10px;
      color: white;
      font-family: decoy, serif;
      font-weight: 300;
      font-style: normal;
    }

    img {
      width: 400px;
      height: 250px;
      border-radius: 20px;
      object-fit: cover;
    }

    button {
      padding: 0 10px 5px;
      border-radius: 10px;
      margin-top: 10px;
      background: rgb(64, 65, 66);
      border-bottom: 2px solid ${({ theme }) => theme.accentColor};
      color: rgb(129, 215, 255);
      font-family: eurostile, sans-serif;
      font-weight: 500;
      font-style: italic;
      font-size: 25px;
      transition: color 0.3s;

      &:hover {
        color: white;
      }
    }

    button[name="button2"] {
      padding: 0 30px 5px;
      border-radius: 10px;
      color: black;
      border: none;
      background: #00ffc8;
      margin-top: 10px;
      font-family: eurostile, sans-serif;
      font-weight: 500;
      font-style: italic;
      font-size: 25px;
      margin-left: 20px;
      box-shadow: 0 0 0px rgb(0, 255, 85);
      transition: box-shadow 0.5s;

      &:hover {
        box-shadow: 0 0 10px rgb(0, 255, 149);
      }

      &:active {
        box-shadow: 0 0 15px #56ffda;
        background: #45ffd7;
        transition: box-shadow 0s;
      }
    }

    section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 647px) {
    justify-content: center;
    display: flex;
    flex-direction: column;

    div {
      margin: 20px 120px 20px;
      transition-delay: 250ms;
      
      img {
        width: 200px;
        height: 150px;
        border-radius: 10px;
      }

      button {
        font-size: 20px;
      }

      button[name="button2"] {
        font-size: 20px;
        margin-left: 5px;
      }
    }
  }

  @media only screen and (max-width: 523px) {
    div {
      margin: 20px 67px 20px;
    }
  }
`

export const ProjectsSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background: ${({ theme }) => theme.primaryColor};

  h2 {
    font-size: 3rem;
    font-family: co-headline, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`
