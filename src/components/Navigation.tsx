import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'employers', label: 'Employers' },
    { id: 'candidates', label: 'Candidates' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-black/5 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <ImageWithFallback 
              src="/logo.png" 
              alt="Job Ladder Recruitment" 
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeSection === item.id
                    ? 'text-[#0066CC] bg-[#0066CC]/8'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                style={{ fontWeight: '500', fontSize: '15px' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ fontWeight: '600', fontSize: '15px' }}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                  activeSection === item.id
                    ? 'text-[#0066CC] bg-[#0066CC]/8'
                    : 'text-gray-600'
                }`}
                style={{ fontWeight: '500' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-black text-white px-6 py-3 rounded-full mt-4"
              style={{ fontWeight: '600' }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
