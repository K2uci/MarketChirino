import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

export default function AllCategorys({ products }: FeaturedProductsProps) { 
	window.location.pathname
	return (
		<section className="py-12">
<<<<<<< HEAD
			<h2 className="text-3xl font-bold text-center mb-8" >Productos Destacados</h2>
=======
			<h2 className="text-3xl font-bold text-center mb-8" onClick={()=>console.log(window.location.pathname.split('/')[1])}>Productos Destacados</h2>
>>>>>>> 3cb35d372603af36a6c750cfc15a4ba89270dd69
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
				{products
				.filter(
					(product) => product.gender === window.location.pathname.split('/')[1] 
<<<<<<< HEAD
											&& product.category === window.location.pathname.split('/')[2])
=======
											&& product.category > window.location.pathname.split('/')[2])
>>>>>>> 3cb35d372603af36a6c750cfc15a4ba89270dd69
				.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}