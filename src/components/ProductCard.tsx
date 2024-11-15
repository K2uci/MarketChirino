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
  const handleShare = async () => {
    const url = window.location.href; // Obtiene la URL actual
    if (navigator.share) {
      try {
        await navigator.share({
            title: 'Me gusta este!',
            text: 'Este sin duda es el articulo que prefiero!!!',
            url: url,
        });
        console.log('Compartido con éxito');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    } else {
      // Si navigator.share no está disponible, copia la URL al portapapeles
      navigator.clipboard.writeText(url)
        .then(() => {
            alert('URL copiada al portapapeles: ' + url);
        })
        .catch(err => {
            console.error('Error al copiar la URL:', err);
        });
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={`data:image/jpeg;base64,${product.image} `}
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
          <button onClick={handleShare} className="bg-black text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
}