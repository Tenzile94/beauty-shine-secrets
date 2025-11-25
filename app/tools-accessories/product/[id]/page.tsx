import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { Star, ArrowLeft, CheckCircle2, Package, Droplet, Heart, Sparkles } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id) && p.category === 'tools-accessories');

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/tools-accessories"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools & Accessories
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative h-[500px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center p-12">
                  {product.badge && (
                    <div className="absolute top-6 left-6 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                      {product.badge}
                    </div>
                  )}
                  <div className="relative w-96 h-96 rounded-3xl overflow-hidden bg-white shadow-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Skin Type */}
              {product.skinType && (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplet className="h-5 w-5 text-indigo-500" />
                    <h3 className="font-semibold text-gray-900">Recommended For</h3>
                  </div>
                  <p className="text-gray-700">{product.skinType}</p>
                </div>
              )}

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-indigo-500" />
                    Key Benefits
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-white border border-indigo-200 text-gray-700 px-4 py-2 rounded-full text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-indigo-500" />
              <h2 className="text-3xl font-bold font-serif text-gray-900">
                Key Features
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {product.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl"
                >
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ingredients */}
      {product.ingredients && product.ingredients.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Package className="h-6 w-6 text-indigo-500" />
              <h2 className="text-3xl font-bold font-serif text-gray-900">
                Materials & Components
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-indigo-200 text-gray-800 px-5 py-3 rounded-full font-medium shadow-sm"
                >
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How to Use */}
      {product.howToUse && product.howToUse.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">
              How to Use
            </h2>
            <div className="space-y-4">
              {product.howToUse.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in this product?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This product review is part of our comprehensive beauty product collection. 
            Check out more beauty tools and accessories.
          </p>
          <Link
            href="/tools-accessories"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5" />
            View More Tools
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const toolsProducts = products.filter(p => p.category === 'tools-accessories');
  return toolsProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

