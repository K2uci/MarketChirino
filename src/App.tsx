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
import NewCategorySection from './components/NewCategorySection';
import { Product } from './types';




function App() {
  const [mockProducts,setMockProducts] = useState<Product[]>([]);
  const [featuredProducts,setFeaturedProducts] = useState<Product[]>(mockProducts);
  
  useEffect(()=>{
    // fetch('http://localhost:3001/generic/loadAll')
    fetch('https://marketchirinobackend.onrender.com/generic/loadAll')
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
        <Route path="/new" element={<NewCategorySection products={mockProducts}/>} />
      </Routes>

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-500 mb-4" >L'Fashion</h3>
            <p className="text-gray-400 w-60">No dejes que nadie te diga que no puedes brillar, ¡hazlo a tu manera!</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/men" className="text-gray-400 hover:text-green-500">Hombres</a></li>
              <li><a href="/women" className="text-gray-400 hover:text-green-500">Mujeres</a></li>
              <li><a href="/new" className="text-gray-400 hover:text-green-500">Novedades</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contacto@verde.com</li>
              <li>Teléfono: +53 52434599</li>
            </ul>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;