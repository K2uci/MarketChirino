import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-white hover:text-green-500">
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
        <a 
          href="/men" 
          className="text-3xl font-bold text-white hover:text-green-500 transition-colors"
          onClick={onClose}
        >
          Hombres
        </a>
        <a 
          href="/women" 
          className="text-3xl font-bold text-white hover:text-green-500 transition-colors"
          onClick={onClose}
        >
          Mujeres
        </a>
        <a 
          href="/new" 
          className="text-2xl text-gray-300 hover:text-green-500 transition-colors"
          onClick={onClose}
        >
          Novedades
        </a>
        <a 
          href="/sale" 
          className="text-2xl text-gray-300 hover:text-green-500 transition-colors"
          onClick={onClose}
        >
          Ofertas
        </a>
      </nav>
    </div>
  );
}