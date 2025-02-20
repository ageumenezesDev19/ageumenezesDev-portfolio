//// filepath: src/components/ThemeToggle/index.tsx
import { ToggleButton } from './styles';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </ToggleButton>
  );
}