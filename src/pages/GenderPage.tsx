import { useState } from 'react';
import { Product, FilterOptions } from '../types';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';

interface GenderPageProps {
  gender: 'men' | 'women';
  products: Product[];
}

export default function GenderPage({ gender, products }: GenderPageProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 1000,
    size: '',
    rating: 0,
    gender,
  });

  const categories = ['upper', 'lower', 'shoes', 'accessories'];
  const categoryNames = {
    upper: 'Prendas Superiores',
    lower: 'Prendas Inferiores',
    shoes: 'Zapatos',
    accessories: 'Accesorios',
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.gender === gender &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      (filters.size === '' || product.size.includes(filters.size)) &&
      product.rating >= filters.rating
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {gender === 'men' ? 'Moda Hombre' : 'Moda Mujer'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <Filters filters={filters} onFilterChange={setFilters} />
          </aside>

          <div className="md:col-span-3">
            {categories.map((category) => (
              <section key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{categoryNames[category]}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}