import styled from 'styled-components';

export const HardSkillsStyle = styled.div`
  background: ${({ theme }) => theme.hardSkillsContainerBackground};
  transition: background 0.3s ease;
  padding: 1rem;
  border-radius: 30px;
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 6rem;
  margin-right: 12rem;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 5rem;
    flex-wrap: wrap;
    max-width: 800px;
    text-align: center;

    h2 {
      font-size: 35px;
      color: ${({ theme }) => theme.textColor};
      font-family: co-headline, sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    h4 {
      margin-bottom: 8px;
      margin-top: 10px;
      color: rgb(0, 247, 255);
      font-size: 30px;
      font-family: sisters-two, sans-serif;
      font-weight: 200;
      font-style: normal;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      background-color: rgb(213, 213, 213);
      border-radius: 30px;
      padding: 20px;
      justify-content: center;
      box-shadow: 0px 0px 25px rgb(179, 179, 179);

      li {
        padding: 8px;
        border-radius: 12px;
        text-align: center;
        background-color: white;
        list-style: none;
        font-size: 50px;
        margin: 20px;

        p {
          margin: 0 0.5rem;
        }
      }
    }
  }

  div:last-child {
    margin-bottom: 3.5rem;
  }

  @media only screen and (max-width: 1550px) {
    margin-right: 3rem;
    div {
      h2 {
        font-size: 32px;
      }
      h4 {
        font-size: 26px;
      }
    }
  }

  @media only screen and (max-width: 1360px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 2rem auto;
    div {
      margin: 1rem auto;
      h2 {
        font-size: 28px;
      }
      h4 {
        font-size: 24px;
      }
    }
  }

  @media only screen and (max-width: 523px) {
    div {
      h2 {
        font-size: 20px;
      }
      h4 {
        font-size: 15px;
      }
      p {
        font-size: 2.5rem;
      }
    }
  }
`;

export const SoftSkillsSection = styled.section`
  padding-top: 10px;
  flex-direction: column;
  margin: 50px 0 50px;
  background: ${({ theme }) => theme.softSkillsContainerBackground};
  transition: background 0.3s ease;
  box-shadow: 0px 0px 30px rgb(221, 45, 118);
  border-radius: 30px;

  h2 {
    font-size: 35px;
    text-align: center;
    color: white;
    font-family: co-headline, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  ul {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0;

    li {
      margin: 20px;
      text-align: center;
      color: white;
      list-style: none;
      font-size: 30px;
      font-family: rubrik-new, sans-serif;
      font-weight: 400;
      font-style: normal;
    }
  }

  @media only screen and (max-width: 647px) {
    h2 {
      font-size: 20px;
    }

    ul {
      li {
        font-size: 20px;
      }
    }
  }
`;
