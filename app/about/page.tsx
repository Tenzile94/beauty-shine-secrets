import { Sparkles, Heart, Users, Target, Award, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us - BeautyShine Secrets',
  description: 'Learn more about BeautyShine Secrets and our mission to provide honest beauty product reviews',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold font-serif text-gray-900 mb-6">
            About BeautyShine Secrets
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Your trusted source for honest, comprehensive beauty product reviews and recommendations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              BeautyShine Secrets was founded with a simple mission: to help people make informed decisions about 
              beauty products. In a market flooded with countless options, we understand how overwhelming 
              it can be to find products that truly work for you.
            </p>
            <p>
              Our team of beauty enthusiasts and skincare experts thoroughly researches and reviews products 
              across all categories - from skincare and haircare to makeup and fragrances. We believe in 
              transparency, honesty, and providing detailed information that empowers our readers to choose 
              products that suit their individual needs.
            </p>
            <p>
              What started as a passion project has grown into a comprehensive beauty information platform, 
              trusted by thousands of readers who value authentic reviews and detailed product information.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Honesty</h3>
              <p className="text-gray-600">
                We provide genuine, unbiased reviews based on thorough research and real user experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600">
                Every detail matters. We ensure all product information, ingredients, and features are accurate.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We're building a community of beauty enthusiasts who share knowledge and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">What We Do</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Product Reviews</h3>
                <p className="text-gray-700">
                  We provide detailed reviews covering product features, ingredients, usage instructions, 
                  and benefits for every item we feature.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Category Expertise</h3>
                <p className="text-gray-700">
                  From skincare and haircare to makeup, fragrances, and beauty tools, we cover all aspects 
                  of beauty and personal care.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education & Information</h3>
                <p className="text-gray-700">
                  We believe in educating our readers about ingredients, application techniques, and how 
                  to choose products that work for their specific needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Curated Selections</h3>
                <p className="text-gray-700">
                  We carefully select and review products from established and emerging brands, helping 
                  you discover both popular favorites and hidden gems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Award className="h-16 w-16 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Our Commitment</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4 text-gray-700">
            <p>
              <strong>Transparency:</strong> We clearly disclose our review process and methodology. Our goal 
              is to provide information, not to sell products.
            </p>
            <p>
              <strong>Regular Updates:</strong> The beauty industry evolves constantly. We regularly update 
              our content to reflect new formulations, packaging changes, and user feedback.
            </p>
            <p>
              <strong>Diverse Representation:</strong> We feature products suitable for all skin types, tones, 
              hair textures, and personal preferences. Beauty is for everyone.
            </p>
            <p>
              <strong>Continuous Improvement:</strong> We listen to our community and constantly work to 
              improve our content, add new features, and expand our product coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <a
            href="mailto:contact@beautyshinesecrets.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

