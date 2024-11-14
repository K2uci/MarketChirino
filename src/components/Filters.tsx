import { FilterOptions } from '../types';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filtros</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Precio</h3>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
              placeholder="Min"
              className="w-24 p-2 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              placeholder="Max"
              className="w-24 p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Talla</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onFilterChange({ ...filters, size })}
                className={`p-2 border rounded ${
                  filters.size === size
                    ? 'bg-green-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Valoración mínima</h3>
          <input
            type="range"
            min="1"
            max="5"
            value={filters.rating}
            onChange={(e) => onFilterChange({ ...filters, rating: Number(e.target.value) })}
            className="w-full accent-green-500"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>1★</span>
            <span>2★</span>
            <span>3★</span>
            <span>4★</span>
            <span>5★</span>
          </div>
        </div>
      </div>
    </div>
  );
}