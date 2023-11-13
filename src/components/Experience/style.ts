import styled from 'styled-components';

export const ExperienceSection = styled.section`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(176, 235, 110);
    box-shadow: 0px 0px 25px rgb(176, 235, 110);
    padding: 20px;
    border-radius: 25px;
    color: black;

    div {
      display: flex;
      flex-direction: column;
      
      p {
        margin-top: 5px;
      }

      img {
        width: 50px;
      }
    }
  }
`
