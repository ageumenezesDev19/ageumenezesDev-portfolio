import styled from 'styled-components';

export const AboutMeSection = styled.div`
  margin: 1rem;
  width: 50%;

  @media only screen and (min-width: 1420px) {
    width: 55rem;
  }
  
  h2 {
    font-size: 2rem;
    color: white;
    font-family: co-headline,sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
  }

  p {
    color: white;
    text-align: center;
    font-size: 1.4rem;
    margin: 0 2rem;
    font-family: rubrik-new,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  @media only screen and (max-width: 743px) {
    width: 80%;
  }

  @media only screen and (max-width: 505px) {
    width: 83%;

    p {
      font-size: 1.6rem;
    }
  }

  .trybeLink {
    color: var(--box-shadow);
    text-decoration: none;
  }

  .rocketLink {
    color: var(--background-300);
    text-decoration: none;
  }

  .catalineLink {
    color: var(--background-5);
    text-decoration: none;
  }

  .udemyLink {
    color: var(--background-300);
    text-decoration: none;
  }
`
