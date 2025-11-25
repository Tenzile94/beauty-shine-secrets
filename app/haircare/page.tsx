import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/products';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Hair Care Products - BeautyShine Secrets',
  description: 'Professional haircare products for healthy, beautiful hair',
};

export default function HaircarePage() {
  const products = getProductsByCategory('haircare');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-10 w-10 text-purple-500" />
            <h1 className="text-5xl font-bold font-serif text-gray-900">
              Hair Care
            </h1>
          </div>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Transform your hair with our professional-grade haircare collection.
            Click "Read More" on any product to discover detailed features, benefits, ingredients, and usage instructions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              All Products
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Shampoo
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Conditioner
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Treatments
            </button>
            <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              Styling
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
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
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            Professional Hair Care at Home
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">💆‍♀️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Salon Quality</h3>
              <p className="text-gray-600 text-sm">
                Professional formulas used by top hair salons worldwide
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-semibold text-gray-900 mb-2">Natural Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Enriched with botanical extracts and essential oils
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Visible Results</h3>
              <p className="text-gray-600 text-sm">
                See noticeable improvement in hair health within weeks
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

