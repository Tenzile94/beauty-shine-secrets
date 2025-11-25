'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Sparkles, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Skin Care', href: '/skincare' },
    { name: 'Hair Care', href: '/haircare' },
    { name: 'Makeup', href: '/makeup' },
    { name: 'Fragrance', href: '/fragrance' },
    { name: 'Tools & Accessories', href: '/tools-accessories' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5 text-gray-700" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block py-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

