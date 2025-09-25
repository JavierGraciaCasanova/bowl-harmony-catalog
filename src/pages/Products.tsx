import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import productSet1 from "@/assets/product-set-1.jpg";

interface ProductsProps {
  language: 'es' | 'en';
}

const Products = ({ language }: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'minimalist' | 'colorful' | 'classic'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const text = {
    es: {
      title: "Nuestra Colección de Productos",
      subtitle: "Descubre bowls únicos diseñados para realzar cada comida",
      filterAll: "Todos",
      filterMinimalist: "Minimalistas",
      filterColorful: "Coloridos", 
      filterClassic: "Clásicos",
      products: {
        bowl1: {
          name: "Bowl Minimalista Sage",
          description: "Elegante bowl en tono sage perfecto para ensaladas y bowls saludables.",
          features: ["Food grade", "Microwave safe", "Oven safe"]
        },
        bowl2: {
          name: "Set de Bowls Modernos",
          description: "Conjunto de tres bowls en tonos neutros ideales para cualquier ocasión.",
          features: ["Food grade", "Dishwasher safe", "Stackable"]
        },
        bowl3: {
          name: "Bowl Clásico Terracota",
          description: "Bowl tradicional en terracota con acabado mate y diseño atemporal.",
          features: ["Handmade", "Oven safe", "Natural clay"]
        },
        bowl4: {
          name: "Bowl Gourmet Premium",
          description: "Bowl de alta gama perfecto para presentaciones elegantes y ocasiones especiales.",
          features: ["Premium quality", "Microwave safe", "Gift ready"]
        }
      }
    },
    en: {
      title: "Our Product Collection",
      subtitle: "Discover unique bowls designed to enhance every meal",
      filterAll: "All",
      filterMinimalist: "Minimalist",
      filterColorful: "Colorful",
      filterClassic: "Classic",
      products: {
        bowl1: {
          name: "Sage Minimalist Bowl",
          description: "Elegant sage-toned bowl perfect for salads and healthy bowls.",
          features: ["Food grade", "Microwave safe", "Oven safe"]
        },
        bowl2: {
          name: "Modern Bowl Set",
          description: "Set of three bowls in neutral tones ideal for any occasion.",
          features: ["Food grade", "Dishwasher safe", "Stackable"]
        },
        bowl3: {
          name: "Classic Terracotta Bowl",
          description: "Traditional terracotta bowl with matte finish and timeless design.",
          features: ["Handmade", "Oven safe", "Natural clay"]
        },
        bowl4: {
          name: "Premium Gourmet Bowl",
          description: "High-end bowl perfect for elegant presentations and special occasions.",
          features: ["Premium quality", "Microwave safe", "Gift ready"]
        }
      }
    }
  };

  const currentText = text[language];

  const products = [
    {
      id: 1,
      image: product2,
      name: currentText.products.bowl1.name,
      price: 24.99,
      originalPrice: 29.99,
      features: currentText.products.bowl1.features,
      description: currentText.products.bowl1.description,
      category: 'minimalist' as const
    },
    {
      id: 2,
      image: productSet1,
      name: currentText.products.bowl2.name,
      price: 45.99,
      features: currentText.products.bowl2.features,
      description: currentText.products.bowl2.description,
      category: 'minimalist' as const
    },
    {
      id: 3,
      image: product3,
      name: currentText.products.bowl3.name,
      price: 32.99,
      features: currentText.products.bowl3.features,
      description: currentText.products.bowl3.description,
      category: 'classic' as const
    },
    {
      id: 4,
      image: product4,
      name: currentText.products.bowl4.name,
      price: 39.99,
      originalPrice: 44.99,
      features: currentText.products.bowl4.features,
      description: currentText.products.bowl4.description,
      category: 'colorful' as const
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories = [
    { key: 'all' as const, label: currentText.filterAll },
    { key: 'minimalist' as const, label: currentText.filterMinimalist },
    { key: 'colorful' as const, label: currentText.filterColorful },
    { key: 'classic' as const, label: currentText.filterClassic }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-heading">{currentText.title}</h1>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              {currentText.subtitle}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.key)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-md"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-md"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                features={product.features}
                description={product.description}
                language={language}
                category={product.category}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="btn-secondary">
              {language === 'es' ? 'Cargar Más Productos' : 'Load More Products'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;