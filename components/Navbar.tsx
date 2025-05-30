import React, { useState, useEffect } from "react";
import { NavItem } from "../types";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems: NavItem[] = [
    { label: "Domov", href: "#hero" },
    { label: "O nás", href: "#o-nas" },
    { label: "Ako to funguje", href: "#ako-to-funguje" },
    { label: "Galéria", href: "#galeria" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className='bg-honey-dark text-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <a
          href='#hero'
          onClick={(e) => handleNavClick(e, "#hero")}
          className='flex items-center space-x-2 text-xl font-bold hover:text-honey-light transition-colors'
          aria-label='Medulienka Swap - Domov'>
          <span>Medulienka Swap</span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-3 py-2 rounded transition-colors font-medium ${
                activeSection === item.href.substring(1)
                  ? "bg-honey text-gray-800"
                  : "hover:bg-honey hover:text-gray-800"
              }`}
              aria-current={
                activeSection === item.href.substring(1) ? "page" : undefined
              }>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden text-white focus:outline-none focus:ring-2 focus:ring-honey rounded-lg p-1'
          aria-label={isMobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls='mobile-menu'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id='mobile-menu'
        className={`md:hidden bg-honey-dark transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`block px-6 py-3 text-center transition-colors font-medium ${
              activeSection === item.href.substring(1)
                ? "bg-honey text-gray-800"
                : "hover:bg-honey hover:text-gray-800"
            }`}
            aria-current={
              activeSection === item.href.substring(1) ? "page" : undefined
            }>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
