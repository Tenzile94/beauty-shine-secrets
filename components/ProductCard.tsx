import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
    category: string;
    description?: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-64 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
        {product.badge && (
          <div className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            {product.badge}
          </div>
        )}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <div className="relative w-56 h-56 rounded-2xl overflow-hidden bg-white shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-gray-900 font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <Link
          href={`/${product.category}/product/${product.id}`}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

