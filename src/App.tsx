import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import FeaturedProducts from './components/FeaturedProducts';
import CategorySection from './components/CategorySection';
import GenderPage from './pages/GenderPage';
import ProductDetail from './components/ProductDetail';
import AllCategorys from './components/AllCategorys';
import AdminPanel from './pages/AdminPanel';
import { Product } from './types';

// Mock data for featured products
// const mockProducts: Product[] = [
//   {
//     id: '1',
//     name: 'Camisa Verde Casual',
//     price: 49.99,
//     rating: 4,
//     size: ['S', 'M', 'L'],
//     category: 'upper',
//     gender: 'men',
//     image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c',
//     description: 'Camisa casual perfecta para cualquier ocasión',
//     color: ['red']
//   },
//   {
//     id: '2',
//     name: 'Vestido Elegante',
//     price: 89.99,
//     rating: 5,
//     size: ['XS', 'S', 'M'],
//     category: 'upper',
//     gender: 'women',
//     image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
//     description: 'Vestido elegante para ocasiones especiales',
//     color: ['red']
//   },
//   {
//     id: '3',
//     name: 'Zapatillas Deportivas',
//     price: 79.99,
//     rating: 4,
//     size: ['40', '41', '42'],
//     category: 'shoes',
//     gender: 'men',
//     image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1',
//     description: 'Zapatillas deportivas de máximo confort',
//     color: ['red']
//   },
//   {
//     id: '4',
//     name: 'Bolso de Cuero',
//     price: 129.99,
//     rating: 5,
//     size: ['U'],
//     category: 'accessories',
//     gender: 'women',
//     image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
//     description: 'Bolso de cuero genuino con diseño elegante',
//     color: ['red']
//   }
// ];

function App() {
  const [mockProducts,setMockProducts] = useState<Product[]>([]);
  const [featuredProducts,setFeaturedProducts] = useState<Product[]>(mockProducts);

  useEffect(()=>{
    fetch('http://localhost:3001/generic/loadAll')
    .then(res => res.json())
    .then(data => (setMockProducts(data),setFeaturedProducts(data)))
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="pt-16">
              <HeroCarousel />
              <FeaturedProducts products={featuredProducts} />
              <section className="py-12 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Categorías para Hombres</h2>
                <CategorySection gender="men" />
                
                <h2 className="text-3xl font-bold text-center mb-8 mt-16">Categorías para Mujeres</h2>
                <CategorySection gender="women" />
              </section>
            </main>
          </div>
        } />
        
        <Route path="/men" element={<GenderPage gender="men" products={mockProducts} />} />
        <Route path="/women" element={<GenderPage gender="women" products={mockProducts} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/men/:word" element={<AllCategorys products={mockProducts}/>} />
        <Route path="/women/:word" element={<AllCategorys products={mockProducts}/>} />
        <Route path="/admin" element={<AdminPanel/>} />
      </Routes>

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-500 mb-4" >VERDE</h3>
            <p className="text-gray-400">Tu destino de moda favorito</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/men" className="text-gray-400 hover:text-green-500">Hombres</a></li>
              <li><a href="/women" className="text-gray-400 hover:text-green-500">Mujeres</a></li>
              <li><a href="/new" className="text-gray-400 hover:text-green-500">Novedades</a></li>
              <li><a href="/sale" className="text-gray-400 hover:text-green-500">Ofertas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contacto@verde.com</li>
              <li>Teléfono: (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;