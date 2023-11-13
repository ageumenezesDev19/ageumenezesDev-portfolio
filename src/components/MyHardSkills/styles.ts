import styled from 'styled-components';

export const HardSkillsStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 20px;

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
      color: white;
      font-family: co-headline,sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    h4 {
      margin-bottom: 8px;
      margin-top: 10px;
      color: rgb(0, 247, 255);
      font-size: 30px;
      font-family: sisters-two,sans-serif;
      font-weight: 200;
      font-style: normal;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      background-color: rgb(221, 221, 221);
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
      }
    }
  }
`
