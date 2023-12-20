import styled from 'styled-components';

export const MainImgStyles = styled.div`
  @keyframes changes-shadow-color {
    0%  {box-shadow: 0px 0px 55px #A100C7; border: 2px solid #A100C7;}
    20% {box-shadow: 0px 0px 55px #00A1E6; border: 2px solid #00A1E6;}
    40% {box-shadow: 0px 0px 20px #9dff00; border: 2px solid #9dff00;}
    60% {box-shadow: 0px 0px 55px #E6B02E; border: 2px solid #E6B02E;}
    80% {box-shadow: 0px 0px 20px #DC0063; border: 2px solid #DC0063;}
    100% {box-shadow: 0px 0px 55px #A100C7; border: 2px solid #A100C7;}
  }

  img {
    margin: 5rem 5rem 1rem;
    width: 320px;
    border-radius: 30px;
    border: 2px solid rgb(82, 177, 255);
    animation: changes-shadow-color 10s cubic-bezier(.17,.67,.83,.67) infinite;
    transition: animation 1s;

    &:hover {
    animation: changes-shadow-color 3s cubic-bezier(.17,.67,.83,.67) infinite;
    }
  }

  @media only screen and (max-width: 1163px) {
    img {
      margin: 5rem 5rem 15rem;
    }
  }

  @media only screen and (max-width: 647px) {
    img {
      width: 260px;
      margin: 5rem 5rem 5rem;
    }
  }

  @media only screen and (max-width: 523px) {
    img {
      width: 220px;
      margin: 5rem 5rem 4rem;
    }
  }

`
