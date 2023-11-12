import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 2.5rem;
  z-index: 2;

  ul {
    display: flex;
    align-items: center;
    width: 12rem;
    padding: 0;
    background: rgba(144, 144, 144, 0.5);
    border-radius: 24px;
    backdrop-filter: blur(5px); /* backdrop-filter: blur(5px);
    Font: https://developer.mozilla.org/pt-BR/docs/Web/CSS/backdrop-filter */
  }

  li {
    list-style: none;
    padding: 1rem;
    margin: 0;
    border-radius: 24px;

    img {
      width: 2rem;
    }

    transition: background 0.5s;
  }

  li:hover {
    background: rgba(155, 155, 155, 0.5);

    &:active {
      background: rgba(26, 26, 26, 0.5);
      transition: background 0.1s;
    }
  }
`
