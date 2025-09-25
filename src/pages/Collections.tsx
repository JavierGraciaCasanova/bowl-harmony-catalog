import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

interface CollectionsProps {
  language: 'es' | 'en';
}

const Collections = ({ language }: CollectionsProps) => {
  const text = {
    es: {
      title: "Nuestras Colecciones",
      subtitle: "Bowls agrupados por estilo para cada ocasión y preferencia",
      viewCollection: "Ver Colección",
      collections: {
        minimalist: {
          title: "Minimalistas",
          description: "Diseños limpios y elegantes que destacan por su simplicidad. Perfectos para un estilo de vida moderno y sofisticado.",
          items: "12 productos"
        },
        colorful: {
          title: "Coloridos",
          description: "Bowls vibrantes que añaden personalidad y alegría a tu mesa. Ideales para ocasiones especiales y comidas familiares.",
          items: "8 productos"
        },
        classic: {
          title: "Clásicos",
          description: "Diseños atemporales inspirados en la tradición ceramista. Perfectos para quienes valoran la artesanía tradicional.",
          items: "10 productos"
        }
      }
    },
    en: {
      title: "Our Collections",
      subtitle: "Bowls grouped by style for every occasion and preference",
      viewCollection: "View Collection",
      collections: {
        minimalist: {
          title: "Minimalist",
          description: "Clean and elegant designs that stand out for their simplicity. Perfect for a modern and sophisticated lifestyle.",
          items: "12 products"
        },
        colorful: {
          title: "Colorful", 
          description: "Vibrant bowls that add personality and joy to your table. Ideal for special occasions and family meals.",
          items: "8 products"
        },
        classic: {
          title: "Classic",
          description: "Timeless designs inspired by ceramic tradition. Perfect for those who value traditional craftsmanship.",
          items: "10 products"
        }
      }
    }
  };

  const currentText = text[language];

  const collections = [
    {
      id: 'minimalist',
      title: currentText.collections.minimalist.title,
      description: currentText.collections.minimalist.description,
      items: currentText.collections.minimalist.items,
      image: product2,
      gradient: 'from-green-50 to-sage-50',
      accentColor: 'text-green-600'
    },
    {
      id: 'colorful',
      title: currentText.collections.colorful.title,
      description: currentText.collections.colorful.description,
      items: currentText.collections.colorful.items,
      image: product4,
      gradient: 'from-orange-50 to-red-50',
      accentColor: 'text-orange-600'
    },
    {
      id: 'classic',
      title: currentText.collections.classic.title,
      description: currentText.collections.classic.description,
      items: currentText.collections.classic.items,
      image: product3,
      gradient: 'from-amber-50 to-yellow-50',
      accentColor: 'text-amber-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-heading">{currentText.title}</h1>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              {currentText.subtitle}
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`product-card ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className={`grid ${index === 0 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0 h-full`}>
                  {/* Image */}
                  <div className={`relative aspect-square ${index === 0 ? 'md:aspect-auto' : ''} overflow-hidden ${index === 0 ? 'rounded-l-2xl' : 'rounded-t-2xl'}`}>
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-6 md:p-8 flex flex-col justify-center space-y-6 ${index === 0 ? 'bg-gradient-to-br from-primary/5 to-accent/5' : ''}`}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className={`text-sm font-medium ${collection.accentColor}`}>
                          {collection.items}
                        </span>
                        <h3 className={`${index === 0 ? 'text-heading' : 'text-subheading'} font-medium`}>
                          {collection.title}
                        </h3>
                      </div>
                      
                      <p className={`${index === 0 ? 'text-body-large' : 'text-body'} text-muted-foreground leading-relaxed`}>
                        {collection.description}
                      </p>
                    </div>

                    <Link to="/products">
                      <Button className={`${index === 0 ? 'btn-hero' : 'btn-secondary'} flex items-center gap-2`}>
                        {currentText.viewCollection}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center space-y-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-4">
              <h2 className="text-heading">
                {language === 'es' ? '¿No encuentras lo que buscas?' : 'Can\'t find what you\'re looking for?'}
              </h2>
              <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
                {language === 'es' 
                  ? 'Explora toda nuestra colección de productos o contáctanos para solicitudes personalizadas.'
                  : 'Explore our entire product collection or contact us for custom requests.'
                }
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="btn-hero">
                  {language === 'es' ? 'Ver Todos los Productos' : 'View All Products'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button className="btn-secondary">
                {language === 'es' ? 'Contactar' : 'Contact Us'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;