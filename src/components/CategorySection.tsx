interface CategorySectionProps {
  gender: 'men' | 'women';
}

export default function CategorySection({ gender }: CategorySectionProps) {
  const categories = [
    {
      name: 'Prendas Superiores',
      image: `https://images.unsplash.com/${gender === 'men' ? 'photo-1516826957135-700dedea698c' : 'photo-1515886657613-9f3515b0c78f'}`,
      href: `/${gender}/upper`
    },
    {
      name: 'Prendas Inferiores',
      image: `https://images.unsplash.com/${gender === 'men' ? 'photo-1473966968600-fa801b869a1a' : 'photo-1475180098004-ca77a66827be'}`,
      href: `/${gender}/lower`
    },
    {
      name: 'Zapatos',
      image: `https://images.unsplash.com/${gender === 'men' ? 'photo-1449505278894-297fdb3edbc1' : 'photo-1543163521-1bf539c55dd2'}`,
      href: `/${gender}/shoes`
    },
    {
      name: 'Accesorios',
      image: `https://images.unsplash.com/${gender === 'men' ? 'photo-1473966968600-fa801b869a1a' : 'photo-1487412947147-5cebf100ffc2'}`,
      href: `/${gender}/accessories`
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.href}
          className="relative overflow-hidden rounded-lg group"
        >
          <div className="aspect-w-3 aspect-h-4">
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="flex justify-center absolute bottom-4 left-4">
              <h3 className="text-2xl pt-5 font-semibold text-white">{category.name}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}