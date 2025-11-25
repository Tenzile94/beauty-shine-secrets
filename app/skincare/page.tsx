import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/products';
import { Droplet, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Skin Care Products - BeautyShine Secrets',
  description: 'Discover premium skincare products with detailed features and benefits',
};

export default function SkincarePage() {
  const products = getProductsByCategory('skincare');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Droplet className="h-10 w-10 text-pink-500" />
            <h1 className="text-5xl font-bold font-serif text-gray-900">
              Skin Care Products
            </h1>
          </div>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Explore our carefully selected collection of premium skincare products.
            Click "Read More" on any product to discover detailed features, benefits, ingredients, and usage instructions.
          </p>
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
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            Why These Products Stand Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovative Formulas</h3>
              <p className="text-gray-600 text-sm">
                Advanced ingredients backed by scientific research
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dermatologist Tested</h3>
              <p className="text-gray-600 text-sm">
                Clinically tested and approved for safety and efficacy
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Results</h3>
              <p className="text-gray-600 text-sm">
                Thousands of verified reviews from real users
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
