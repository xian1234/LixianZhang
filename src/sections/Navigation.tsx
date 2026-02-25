import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Working & Education', href: '#education' },
    { label: 'Research Interests', href: '#research' },
    { label: 'Selected Publications', href: '#publications' },
    { label: 'Leading Programs', href: '#projects' },
    { label: 'Awards & Hornors', href: '#awards' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
            className="flex items-center gap-2 text-blue-800 font-bold text-lg"
          >
            <GraduationCap className="w-6 h-6" />
            <span>张立贤</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
            <a href="cn/" className="ml-2 px-3 py-1.5 rounded-md border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors">CN/中文</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-800"
              >
                {item.label}
              </a>
            ))}
            <a href="cn/" className="block px-4 py-2 text-blue-700 font-semibold hover:bg-blue-50">CN/中文</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
