import { useTheme } from '../context/ThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi2';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {theme === 'dark' ? <HiMoon /> : <HiSun />}
        </span>
      </span>
    </button>
  );
}
