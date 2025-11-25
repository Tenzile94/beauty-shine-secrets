import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/products';
import { Flower2 } from 'lucide-react';

export const metadata = {
  title: 'Fragrance - BeautyShine Secrets',
  description: 'Luxury fragrances and perfumes for every personality',
};

export default function FragrancePage() {
  const products = getProductsByCategory('fragrance');

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flower2 className="h-10 w-10 text-violet-500" />
            <h1 className="text-5xl font-bold font-serif text-gray-900">
              Fragrance
            </h1>
          </div>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Discover your signature scent with our curated collection of luxury fragrances.
            Click "Read More" on any product to discover detailed features, fragrance notes, and application tips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              All Fragrances
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Floral
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Woody
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Fresh
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Oriental
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Fragrances</h2>
            <p className="text-gray-600">
              Showing <span className="font-semibold">{products.length}</span> reviewed products with comprehensive information
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            Luxury Fragrances Collection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Crafted with the finest essential oils and aromatic compounds
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Long-Lasting</h3>
              <p className="text-gray-600 text-sm">
                Sophisticated scents that last throughout the day
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-semibold text-gray-900 mb-2">Perfect Gift</h3>
              <p className="text-gray-600 text-sm">
                Beautifully packaged, ideal for any special occasion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

