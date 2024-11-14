import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    title: "Colección Juvenil 2024",
    subtitle: "Estilo que define tu generación"
  },
  {
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
    title: "Tendencias Urbanas",
    subtitle: "Expresión sin límites"
  },
  {
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Accesorios Únicos",
    subtitle: "Complementa tu look"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden bg-black">
      <div 
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8">{slide.subtitle}</p>
                <div className="space-x-4">
                  <a href="/men" className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
                    Hombres
                  </a>
                  <a href="/women" className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition">
                    Mujeres
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}