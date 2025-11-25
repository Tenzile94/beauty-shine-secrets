import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/products';
import { Wrench } from 'lucide-react';

export const metadata = {
  title: 'Tools & Accessories - BeautyShine Secrets',
  description: 'Professional beauty tools and accessories for perfect results',
};

export default function ToolsAccessoriesPage() {
  const products = getProductsByCategory('tools-accessories');

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Wrench className="h-10 w-10 text-indigo-500" />
            <h1 className="text-5xl font-bold font-serif text-gray-900">
              Tools & Accessories
            </h1>
          </div>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Elevate your beauty routine with professional-grade tools and accessories.
            Click "Read More" on any product to discover detailed features, materials, and usage instructions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              All Tools
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Brushes
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Devices
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Accessories
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Hair Tools
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Tools & Accessories</h2>
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
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            Professional-Grade Beauty Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Pro Quality</h3>
              <p className="text-gray-600 text-sm">
                Tools used by professional makeup artists and stylists
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Materials</h3>
              <p className="text-gray-600 text-sm">
                Made with high-quality, durable materials that last
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600 text-sm">
                Designed for effortless application and professional results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

