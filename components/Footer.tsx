import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-pink-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                  BeautyShine
                </span>
                <span className="text-xs font-medium text-purple-600 -mt-1">
                  Secrets
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Your trusted source for beauty product reviews, features, and recommendations.
            </p>
          </div>

          {/* Browse */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/skincare" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/haircare" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/makeup" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/fragrance" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Fragrance
                </Link>
              </li>
              <li>
                <Link href="/tools-accessories" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Tools & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                <strong>Email:</strong>
              </li>
              <li>
                <a href="mailto:contact@beautyshinesecrets.com" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  contact@beautyshinesecrets.com
                </a>
              </li>
              <li>
                <a href="mailto:info@beautyshinesecrets.com" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  info@beautyshinesecrets.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} BeautyShine Secrets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

