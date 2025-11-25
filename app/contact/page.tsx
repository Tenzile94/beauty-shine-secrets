import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - BeautyShine Secrets',
  description: 'Get in touch with BeautyShine Secrets for questions, suggestions, or feedback',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold font-serif text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We'd love to hear from you! Reach out with questions, suggestions, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-pink-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h2>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:contact@beautyshinesecrets.com"
                className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition-colors"
              >
                contact@beautyshinesecrets.com
              </a>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h2>
              <p className="text-gray-600 mb-4">
                For general questions about our content and reviews.
              </p>
              <a 
                href="mailto:info@beautyshinesecrets.com"
                className="text-purple-500 hover:text-purple-600 font-semibold text-lg transition-colors"
              >
                info@beautyshinesecrets.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center text-gray-900 mb-12">
            What We Can Help With
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">💄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Questions</h3>
              <p className="text-sm text-gray-600">
                Questions about specific products or ingredients
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Suggestions</h3>
              <p className="text-sm text-gray-600">
                Product suggestions or content ideas
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Feedback</h3>
              <p className="text-sm text-gray-600">
                Share your thoughts on our website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Response Time</h2>
            <p className="text-lg mb-2">
              We typically respond within 24-48 hours
            </p>
            <p className="text-sm opacity-90">
              Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out our product pages for detailed information, ingredients, and usage instructions.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Products
          </a>
        </div>
      </section>
    </div>
  );
}

