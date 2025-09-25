import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Flame } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  description: string;
  language: 'es' | 'en';
  category?: 'minimalist' | 'colorful' | 'classic';
}

const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice, 
  features, 
  description, 
  language,
  category = 'minimalist'
}: ProductCardProps) => {
  const text = {
    es: {
      viewDetails: "Ver Detalles",
      from: "Desde",
      specialOffer: "Oferta especial"
    },
    en: {
      viewDetails: "View Details", 
      from: "From",
      specialOffer: "Special offer"
    }
  };

  const currentText = text[language];

  const getFeatureIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('microwave') || lowerFeature.includes('microondas')) {
      return <Zap className="w-3 h-3" />;
    }
    if (lowerFeature.includes('oven') || lowerFeature.includes('horno')) {
      return <Flame className="w-3 h-3" />;
    }
    return <Check className="w-3 h-3" />;
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'colorful':
        return 'bg-orange-100 text-orange-800';
      case 'classic':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-2xl aspect-square">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {originalPrice && originalPrice > price && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-destructive text-destructive-foreground">
              {currentText.specialOffer}
            </Badge>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={getCategoryColor(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <div key={index} className="feature-tag">
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Product Name */}
        <h3 className="text-heading text-xl font-medium">{name}</h3>

        {/* Description */}
        <p className="text-body text-muted-foreground leading-relaxed">{description}</p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="price">${price.toFixed(2)}</span>
          {originalPrice && originalPrice > price && (
            <span className="price-discount">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          className="btn-secondary w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
        >
          {currentText.viewDetails}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;