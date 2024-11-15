import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('');
  const location = useLocation();
  const { product } = location.state as { product: Product } || {};
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
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="relative group">
          <img
            src={`data:image/jpeg;base64,${product.image} `}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
            <Heart className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} valoraciones)</span>
            </div>
          </div>

          <div>
            <span className="text-4xl font-bold text-green-600">
              ${product.price}
            </span>
            <span className="ml-2 text-gray-500">Envío gratis</span>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Tallas Disponibles</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 border rounded-lg transition-colors ${
                    selectedSize === size
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <button onClick={handleShare} className="flex-1 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition flex items-center justify-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Compartir</span>
            </button>
            <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              <Share2 className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}