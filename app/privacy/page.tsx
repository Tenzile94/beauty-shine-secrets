import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - BeautyShine Secrets',
  description: 'Read our privacy policy to understand how we collect, use, and protect your information',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold font-serif text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700">
            Last Updated: November 25, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700">
                At BeautyShine Secrets, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Email address when you subscribe to our newsletter</li>
                <li>Name and contact information if you contact us directly</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Send you newsletters and beauty tips (if you've subscribed)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze website usage and trends to improve user experience</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-3">
                We use cookies and similar tracking technologies to track activity on our website. Cookies are 
                small data files stored on your device. You can instruct your browser to refuse all cookies or 
                to indicate when a cookie is being sent.
              </p>
              <p className="text-gray-700">
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-3">
                We may use third-party service providers to help us operate our website and analyze usage. 
                These third parties have access to your information only to perform specific tasks on our behalf 
                and are obligated not to disclose or use it for other purposes.
              </p>
              <p className="text-gray-700">
                Examples include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Website hosting services</li>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Email service providers</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal 
                information. However, no method of transmission over the internet or electronic storage is 100% 
                secure. While we strive to use commercially acceptable means to protect your data, we cannot 
                guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
                <li>Request transfer of your data to another service</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our website is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to 
                review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-purple-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-3">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@beautyshinesecrets.com<br />
                <strong>Website:</strong> www.beautyshinesecrets.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

