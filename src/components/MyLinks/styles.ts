import styled from 'styled-components';

export const LinksSection = styled.section`
  width: 250px;

  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 35px;
    color: white;
    font-family: co-headline,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    background: rgb(255, 255, 255);
    border-radius: 30px;
    padding: 15px;
    border: 7px solid rgb(255, 0, 76);
    box-shadow: 0px 0px 25px rgb(255, 0, 76);

    li {
      list-style: none;

      img {
      margin: 10px;
      border-radius: 15px;
      padding: 5px;
      width: 5rem;
    }
    }
  }
`
