import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const text = {
    es: {
      contact: "Contacto",
      navigation: "Navegación",
      followUs: "Síguenos",
      email: "Email",
      phone: "Teléfono",
      address: "Dirección",
      home: "Home",
      products: "Productos",
      collections: "Colecciones",
      rights: "© 2024 Bowl Collection. Todos los derechos reservados.",
      emailValue: "hello@bowlcollection.com",
      phoneValue: "+34 123 456 789",
      addressValue: "Madrid, España"
    },
    en: {
      contact: "Contact",
      navigation: "Navigation", 
      followUs: "Follow Us",
      email: "Email",
      phone: "Phone",
      address: "Address",
      home: "Home",
      products: "Products", 
      collections: "Collections",
      rights: "© 2024 Bowl Collection. All rights reserved.",
      emailValue: "hello@bowlcollection.com", 
      phoneValue: "+34 123 456 789",
      addressValue: "Madrid, Spain"
    }
  };

  const currentText = text[language];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Bowl Collection</h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {language === 'es' 
                ? "Diseños elegantes que combinan funcionalidad y estética para tu hogar."
                : "Elegant designs that combine functionality and aesthetics for your home."
              }
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">{currentText.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href={`mailto:${currentText.emailValue}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {currentText.emailValue}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href={`tel:${currentText.phoneValue.replace(/\s/g, '')}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {currentText.phoneValue}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {currentText.addressValue}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">{currentText.navigation}</h4>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {currentText.home}
              </Link>
              <Link 
                to="/products" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {currentText.products}
              </Link>
              <Link 
                to="/collections" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {currentText.collections}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">{currentText.followUs}</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {currentText.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;