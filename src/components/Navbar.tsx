import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoDesktop from '@/assets/logo-desktop.png';
import logoMobile from '@/assets/logo-mobile-new.svg';
import isoCertified from '@/assets/iso-certified.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/products', label: 'Products', isRoute: true },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ];

  const NavItem = ({ link }: { link: typeof navLinks[0] }) => {
    if ('isRoute' in link && link.isRoute) {
      return (
        <Link
          to={link.href}
          className={`text-sm font-medium transition-colors duration-200 ${
            location.pathname === link.href 
              ? 'text-primary' 
              : 'text-foreground/80 hover:text-primary'
          }`}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        href={location.pathname === '/' ? link.href.replace('/', '') : link.href}
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
      >
        {link.label}
      </a>
    );
  };

  const MobileNavItem = ({ link }: { link: typeof navLinks[0] }) => {
    if ('isRoute' in link && link.isRoute) {
      return (
        <Link
          to={link.href}
          className={`text-sm font-medium transition-colors duration-200 ${
            location.pathname === link.href 
              ? 'text-primary' 
              : 'text-foreground/80 hover:text-primary'
          }`}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        href={location.pathname === '/' ? link.href.replace('/', '') : link.href}
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoDesktop} 
              alt="RACOIL" 
              className="hidden md:block h-12"
            />
            <img 
              src={logoMobile} 
              alt="RACOIL" 
              className="md:hidden h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} />
            ))}
          </div>

          {/* WhatsApp Button & ISO Badge */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/9779857076023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <img 
              src={isoCertified} 
              alt="ISO Certified Company" 
              className="h-10"
            />
          </div>

          {/* ISO Badge & Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <img 
              src={isoCertified} 
              alt="ISO Certified" 
              className="h-8"
            />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <MobileNavItem key={link.href} link={link} />
              ))}
              <a
                href="https://wa.me/9779857076023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
