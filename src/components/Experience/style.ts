import styled from 'styled-components';

export const ExperienceSection = styled.section`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.experienceBackground};
    box-shadow: ${({ theme }) => theme.experienceBoxShadow};
    padding: 20px;
    border-radius: 25px;
    color: ${({ theme }) => theme.experienceTextColor};
    margin: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      
      p {
        margin-top: 5px;
      }
      img {
        width: 50px;
        filter: ${({ theme }) =>
          theme.background === '#1A1A1A' ? 'invert(1)' : 'none'};
      }
    }
  }
`;
