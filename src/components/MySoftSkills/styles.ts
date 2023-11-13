import styled from 'styled-components';

export const SoftSkillsSection = styled.section`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  margin: 50px 0 50px;
  background: rgb(187, 38, 100);
  box-shadow: 0px 0px 30px rgb(221, 45, 118);
  border-radius: 30px;

  h2 {
    font-size: 35px;
    text-align: center;
    color: white;
    font-family: co-headline,sans-serif;
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
      font-family: rubrik-new,sans-serif;
      font-weight: 400;
      font-style: normal;
    }
  }

`
