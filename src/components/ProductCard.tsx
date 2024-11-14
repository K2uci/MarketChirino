import { Product } from '../types';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
        onClick={handleClick}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating
                  ? 'text-green-500 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
<<<<<<< HEAD
            Compartir
=======
            Añadir
>>>>>>> 3cb35d372603af36a6c750cfc15a4ba89270dd69
          </button>
        </div>
      </div>
    </div>
  );
}