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

    li:nth-child(1) {
      img {
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0px 0px 25px rgb(0, 76, 255);
        }

        &:active {
          border: 4px solid rgb(0, 76, 255);
          padding: 2px;
        }
      }
    }

    li:nth-child(2) {
      img {
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0px 0px 25px black;
        }

        &:active {
          border: 4px solid black;
          padding: 2px;
        }
      }
    }

    li:nth-child(3) {
      img {
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0px 0px 25px rgb(255, 0, 0);
        }

        &:active {
          border: 4px solid rgb(255, 60, 0);
          padding: 2px;
        }
      }
    }

    li:nth-child(4) {
      img {
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0px 0px 25px rgb(0, 255, 0);
        }

        &:active {
          border: 4px solid rgb(0, 255, 0);
          padding: 2px;
        }
      }
    }

    li:nth-child(5) {
      img {
        transition: box-shadow 0.3s;
        background-color: black;
        padding: 15px;

        &:hover {
          box-shadow: 0px 0px 25px rgb(0, 110, 255);
        }

        &:active {
          border: 4px solid rgb(0, 110, 255);
          padding: 15px;
        }
      }
    }

    li:nth-child(6) {
      img {
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0px 0px 25px rgb(0, 119, 255);
        }

        &:active {
          border: 4px solid rgb(0, 204, 255);
          padding: 2px;
        }
      }
    }

  }
`
