import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const text = {
    es: {
      home: "Home",
      products: "Productos", 
      collections: "Colecciones",
      cta: "Comprar Ahora"
    },
    en: {
      home: "Home",
      products: "Products",
      collections: "Collections", 
      cta: "Shop Now"
    }
  };

  const currentText = text[language];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
            Bowl Collection
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {currentText.home}
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {currentText.products}
            </Link>
            <Link 
              to="/collections" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/collections') ? 'text-primary' : 'text-foreground'
              }`}
            >
              {currentText.collections}
            </Link>
          </div>

          {/* Right side - Language switcher and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            {/* CTA Button */}
            <Button className="btn-hero">
              {currentText.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.home}
              </Link>
              <Link 
                to="/products" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/products') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.products}
              </Link>
              <Link 
                to="/collections" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/collections') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.collections}
              </Link>
              
              <div className="pt-4 border-t border-border space-y-3">
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors w-full justify-center"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase">{language}</span>
                </button>
                
                <Button className="btn-hero w-full">
                  {currentText.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;