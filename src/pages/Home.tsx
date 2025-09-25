import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import heroImage from "@/assets/hero-bowl.jpg";
import productSet1 from "@/assets/product-set-1.jpg";

interface HomeProps {
  language: 'es' | 'en';
}

const Home = ({ language }: HomeProps) => {
  const text = {
    es: {
      heroTitle: "Bowl Collection",
      heroSubtitle: "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
      exploreCta: "Explorar Colección",
      featuresTitle: "¿Por qué elegir nuestros bowls?",
      feature1: "Materiales de alta calidad",
      feature2: "Diseño elegante y funcional",
      feature3: "Apto para microondas y lavavajillas",
      feature4: "Garantía de satisfacción",
      collectionTitle: "Nuestra Colección",
      collectionSubtitle: "Descubre bowls únicos diseñados para realzar cada comida",
      weekend: "Oferta fin de semana",
      discount: "15% de descuento",
      viewAll: "Ver Toda la Colección"
    },
    en: {
      heroTitle: "Bowl Collection", 
      heroSubtitle: "Explore our collection of bowls that combines style and practicality, perfect for any table.",
      exploreCta: "Explore Collection",
      featuresTitle: "Why choose our bowls?",
      feature1: "High quality materials",
      feature2: "Elegant and functional design", 
      feature3: "Microwave and dishwasher safe",
      feature4: "Satisfaction guarantee",
      collectionTitle: "Our Collection",
      collectionSubtitle: "Discover unique bowls designed to enhance every meal",
      weekend: "Weekend special",
      discount: "15% off",
      viewAll: "View All Collection"
    }
  };

  const currentText = text[language];

  const features = [
    currentText.feature1,
    currentText.feature2,
    currentText.feature3,
    currentText.feature4
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <h1 className="text-hero">
                  {currentText.heroTitle}
                </h1>
                <p className="text-body-large text-muted-foreground leading-relaxed max-w-lg">
                  {currentText.heroSubtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button className="btn-hero flex items-center gap-2">
                    {currentText.exploreCta}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-strong">
                <img 
                  src={heroImage} 
                  alt="Featured Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-medium">
                <div className="flex items-center gap-3">
                  <div className="text-primary">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{currentText.weekend}</div>
                    <div className="text-lg font-semibold text-primary">{currentText.discount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading">{currentText.collectionTitle}</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              {currentText.collectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Products Preview */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="product-card">
                <div className="aspect-square rounded-t-2xl overflow-hidden">
                  <img 
                    src={productSet1} 
                    alt="Bowl Set"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-subheading mb-2">
                    {language === 'es' ? 'Set Minimalista' : 'Minimalist Set'}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    {language === 'es' 
                      ? 'Conjunto de bowls en tonos neutros perfectos para cualquier ocasión'
                      : 'Set of bowls in neutral tones perfect for any occasion'
                    }
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="price">$45.99</span>
                    <Link to="/products">
                      <Button className="btn-secondary">
                        {language === 'es' ? 'Ver Detalles' : 'View Details'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 flex flex-col justify-center text-center space-y-6">
              <h3 className="text-heading">
                {language === 'es' ? 'Descubre Más' : 'Discover More'}
              </h3>
              <p className="text-body text-muted-foreground">
                {language === 'es' 
                  ? 'Explora nuestra colección completa de bowls únicos y encuentra el perfecto para ti.'
                  : 'Explore our complete collection of unique bowls and find the perfect one for you.'
                }
              </p>
              <Link to="/products" className="mx-auto">
                <Button className="btn-hero">
                  {currentText.viewAll}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;