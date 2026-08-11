import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ onNavigateSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    if (onNavigateSection) {
      onNavigateSection(href);
      return;
    }

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[1000] border-b border-[color:var(--border)] bg-[color:var(--header-bg)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-28 max-w-[120rem] items-center justify-between px-[5%]">
        <a
          href="#home"
          className="font-['Outfit'] text-[2.2rem] font-extrabold uppercase tracking-[0.05em] text-[color:var(--heading)]"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          Swaraj<span className="text-[color:var(--accent)]">Thakre</span>
        </a>

        <div className="flex items-center gap-4">
          <nav
            className={`fixed left-0 right-0 top-28 border-b border-[color:var(--border)] bg-[color:var(--header-bg)] p-8 backdrop-blur-xl transition-all duration-300 md:static md:border-none md:bg-transparent md:p-0 md:backdrop-blur-none ${
              menuOpen
                ? 'translate-y-0 opacity-100 pointer-events-auto'
                : '-translate-y-[120%] opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'
            }`}
          >
            <ul className="flex flex-col gap-2 md:flex-row md:gap-1">
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className={`block rounded-lg px-4 py-3 text-[1.5rem] font-medium transition-colors md:px-3 md:py-2 md:text-[1.5rem] ${
                        activeSection === id
                          ? 'bg-[color:var(--accent-soft)] text-[color:var(--accent)]'
                          : 'text-[color:var(--text-muted)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--accent)]'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href);
                      }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle />
          <button
            type="button"
            className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[2.2rem] text-[color:var(--heading)] md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
