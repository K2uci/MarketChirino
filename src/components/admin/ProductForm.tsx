import { useState, useEffect , ChangeEvent } from 'react';
import { Product } from '../../types';
import { X } from 'lucide-react';

interface ProductFormProps {
  product?: Product | null;
  onClose: () => void;
  onSubmit: () => void;
}

export default function ProductForm({ product, onClose, onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    gender: '',
    size: [] as string[],
    color: [] as string[],
    image: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        gender: product.gender,
        size: product.size,
        color: product.color,
        image: product.image,
      });
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = product
      ? `http://localhost:3001/generic/editOne/${product.id}`
      : 'http://localhost:3001/generic/createOne';
    
    const method = product ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(formData)
      });
      
      onSubmit();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleImageChange = (event:ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result && typeof reader.result === 'string' ? reader.result.split(',')[1] : '' });
        };
        reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {product ? 'Editar Producto' : 'Nuevo Producto'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Precio</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: String(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Categoría</label>
              <select
                value={formData.category}
                defaultValue="upper"
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="upper">Prendas Superiores</option>
                <option value="lower">Prendas Inferiores</option>
                <option value="shoes">Zapatos</option>
                <option value="accessories">Accesorios</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Género</label>
              <select
                value={formData.gender}
                defaultValue="men"
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="men">Hombre</option>
                <option value="women">Mujer</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tallas</label>
            <input
              type="text"
              value={formData.size.join(', ')}
              onChange={(e) => setFormData({ ...formData, size: e.target.value.split(',').map(s => s.trim()) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="S, M, L, XL"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Colores</label>
            <input
              type="text"
              value={formData.color.join(', ')}
              onChange={(e) => setFormData({ ...formData, color: e.target.value.split(',').map(c => c.trim()) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Negro, Blanco, Azul"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Escoge la Imagen</label>
            <input
              type="file"
              accept="image/*" 
              defaultValue={formData.image}
              onChange={handleImageChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
              {formData.image && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 pt-4">Previsualización:</label>
                    <img 
                      	className="h-48 w-48"
                        src={`data:image/jpeg;base64,${formData.image} `}
                    />
                </div>
              )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              {product ? 'Guardar Cambios' : 'Crear Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}