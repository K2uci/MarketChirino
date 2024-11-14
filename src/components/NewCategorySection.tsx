import { useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

export default function NewCategorySection({ products }: FeaturedProductsProps) { 
	const sortProductsByDate = (array:any) => {
    return array.sort((a, b) => {
        // Convertir las fechas en objetos Date
        const fechaA = new Date(a.created_at);
        const fechaB = new Date(b.created_at);
        
        // Comparar las fechas
        return fechaB.getTime() - fechaA.getTime(); // Para ordenar del más reciente al más viejo
		});
	}
	sortProductsByDate(products);
	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-center mb-8" >Ultimas Novedades</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
				{products
				.slice(0,16)
				.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}



