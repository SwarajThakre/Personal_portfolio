import { useTheme } from '../context/ThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi2';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] p-2 transition-colors hover:border-[color:var(--accent)]"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="flex h-[3.6rem] w-[3.6rem] items-center justify-center text-[1.8rem] text-[color:var(--accent)]">
        {theme === 'dark' ? <HiMoon /> : <HiSun />}
      </span>
    </button>
  );
}
