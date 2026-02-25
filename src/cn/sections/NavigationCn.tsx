import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const NavigationCn = () => {
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
    { label: '关于我', href: '#about' },
    { label: '工作与教育', href: '#education' },
    { label: '研究方向', href: '#research' },
    { label: '代表论文', href: '#publications' },
    { label: '科研项目', href: '#projects' },
    { label: '奖项与学术服务', href: '#awards' },
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
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
            className="flex items-center gap-2 text-blue-800 font-bold text-lg"
          >
            <GraduationCap className="w-6 h-6" />
            <span>张立贤</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
            <a href="../" className="ml-2 px-3 py-1.5 rounded-md border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors">EN/English</a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-800"
              >
                {item.label}
              </a>
            ))}
            <a href="../" className="block px-4 py-2 text-blue-700 font-semibold hover:bg-blue-50">EN/English</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationCn;
