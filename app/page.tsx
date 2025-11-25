import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star, Heart, Zap } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.badge === 'Bestseller').slice(0, 4);

  const categories = [
    {
      name: 'Skin Care',
      href: '/skincare',
      image: '/skincare/medicube-mask.jpg',
      description: 'Nourish & Glow',
      gradient: 'from-pink-700/25 to-rose-700/25',
    },
    {
      name: 'Hair Care',
      href: '/haircare',
      image: '/haircare/Mielle.webp',
      description: 'Shine & Strength',
      gradient: 'from-purple-700/25 to-pink-700/25',
    },
    {
      name: 'Makeup',
      href: '/makeup',
      image: '/makeup/LauraGeller.webp',
      description: 'Express Yourself',
      gradient: 'from-fuchsia-700/25 to-purple-700/25',
    },
    {
      name: 'Fragrance',
      href: '/fragrance',
      image: '/fragrance/LattafaYara.jpg',
      description: 'Signature Scents',
      gradient: 'from-violet-700/25 to-purple-700/25',
    },
    {
      name: 'Tools & Accessories',
      href: '/tools-accessories',
      image: '/tools/LAURA-GELLER.webp',
      description: 'Pro Tools',
      gradient: 'from-indigo-700/25 to-purple-700/25',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="h-4 w-4 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">New Collection Available</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-serif">
                Discover Your
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Natural Beauty
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Explore our curated collection of premium beauty products. Learn about innovative formulas and discover what makes each product unique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/skincare"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#featured"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Product Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">30+</div>
                  <div className="text-sm text-gray-600">Featured Products</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100 p-8 flex items-center justify-center">
                <div className="relative w-96 h-96 rounded-3xl overflow-hidden bg-white shadow-xl">
        <Image
                    src="/skincare/Medicube.webp"
                    alt="Beauty Products"
                    fill
                    className="object-cover"
          priority
        />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">Featured</div>
                <div className="text-sm">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-2xl">
                <Zap className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Detailed Information</h3>
                <p className="text-sm text-gray-600">Complete product details and ingredients</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-2xl">
                <Heart className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                <p className="text-sm text-gray-600">100% authentic products guaranteed</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-2xl">
                <Star className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Expert Reviews</h3>
                <p className="text-sm text-gray-600">Detailed analysis and recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover detailed information about beauty products across different categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} group-hover:opacity-90 transition-opacity`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-white/90 text-sm font-medium mb-2">{category.description}</p>
                  <h3 className="text-white text-3xl font-bold mb-4">{category.name}</h3>
                  <div className="inline-flex items-center gap-2 text-white font-semibold">
                    Explore Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore detailed reviews and features of our most popular beauty products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/skincare"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
