import { useEffect, useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

function isTabletViewport() {
  return window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(isTabletViewport);

  useEffect(() => {
    function handleResize() {
      const tablet = isTabletViewport();
      const mobile = window.matchMedia("(max-width: 767px)").matches;

      setMenuOpen(tablet);
      if (mobile) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sprout home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <path d="M16 27V15" />
              <path d="M16 18C7 18 5 12 5 6c7 0 12 2 12 10" />
              <path d="M16 14c0-7 5-10 11-10 0 7-3 12-11 12" />
            </svg>
          </span>
          <span>sprout</span>
        </a>

        <div
          className={`nav-content${menuOpen ? " nav-content-open" : ""}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="account-button" href="#create-account" onClick={closeMenu}>
            Create Account
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </nav>
    </header>
  );
}
