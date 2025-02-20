//// filepath: src/components/ThemeToggle/styles.ts
import styled from 'styled-components';

export const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;