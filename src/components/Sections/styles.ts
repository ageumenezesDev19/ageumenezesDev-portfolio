import styled from 'styled-components';

export const SectionsStyle = styled.div`
  display: flex;
  flex-direction: column;

  section {
    margin: 0 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  section:nth-child(2) {
    margin: 0 0 50px;

    div {
      section {
        margin: 0 0 50px;
      }

      section:nth-child(2) {
        margin: 0 0 70px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
