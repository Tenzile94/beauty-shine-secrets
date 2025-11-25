import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - BeautyShine Secrets',
  description: 'Read our terms of service to understand the rules and regulations for using our website',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-100 via-purple-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 text-indigo-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold font-serif text-gray-900 mb-6">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700">
                By accessing and using BeautyShine Secrets ("we," "our," or "us"), you agree to be bound by these Terms 
                of Service. If you disagree with any part of these terms, you may not access our website.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-3">
                Permission is granted to temporarily access the materials (information or software) on 
                BeautyShine Secrets' website for personal, non-commercial viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-3">As a user of our website, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate information when subscribing to newsletters or contacting us</li>
                <li>Not use the website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to any portion of the website</li>
                <li>Not interfere with or disrupt the website or servers</li>
                <li>Not transmit any viruses, malware, or other malicious code</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            {/* Content Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Disclaimer</h2>
              <p className="text-gray-700 mb-3">
                The information provided on BeautyShine Secrets is for general informational and educational purposes 
                only. While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Product reviews and information are based on research and available data</li>
                <li>We do not guarantee specific results from using any products mentioned</li>
                <li>Individual results may vary based on personal factors</li>
                <li>Always perform a patch test before using new beauty products</li>
                <li>Consult with healthcare professionals for specific medical concerns</li>
                <li>Product formulations and availability may change without notice</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                All content on BeautyShine Secrets, including but not limited to text, graphics, logos, images, and 
                software, is the property of BeautyShine Secrets or its content suppliers and is protected by 
                international copyright laws. The compilation of all content is the exclusive property of 
                BeautyShine Secrets.
              </p>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites or services that are not owned or 
                controlled by BeautyShine Secrets. We have no control over, and assume no responsibility for, the 
                content, privacy policies, or practices of any third-party websites or services. You 
                acknowledge and agree that BeautyShine Secrets shall not be responsible or liable for any damage 
                or loss caused by or in connection with use of such content or services.
              </p>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information Accuracy</h2>
              <p className="text-gray-700">
                We make every effort to display product information accurately. However, we do not warrant 
                that product descriptions, pricing, images, or other content is accurate, complete, reliable, 
                current, or error-free. Product information is provided by manufacturers and brands, and we 
                cannot guarantee its accuracy. Always verify product details with the manufacturer before use.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                In no event shall BeautyShine Secrets or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use the materials on BeautyShine Secrets' website, even if BeautyShine Secrets or 
                an authorized representative has been notified orally or in writing of the possibility of 
                such damage.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless BeautyShine Secrets and its affiliates, officers, 
                directors, employees, and agents from and against any claims, liabilities, damages, losses, 
                and expenses, including reasonable attorney's fees, arising out of or in any way connected 
                with your access to or use of the website, or your violation of these Terms of Service.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700">
                BeautyShine Secrets reserves the right to revise these Terms of Service at any time without notice. 
                By using this website, you are agreeing to be bound by the current version of these Terms 
                of Service. We encourage you to review these terms periodically.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Service and any separate agreements whereby we provide you services shall be 
                governed by and construed in accordance with applicable laws. Any disputes arising from these 
                terms shall be resolved in accordance with the jurisdiction's legal framework.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms of Service is found to be invalid or unenforceable, that 
                provision shall be limited or eliminated to the minimum extent necessary so that these Terms 
                of Service shall otherwise remain in full force and effect.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-indigo-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-3">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> legal@beautyshinesecrets.com<br />
                <strong>Website:</strong> www.beautyshinesecrets.com
              </p>
            </div>

            {/* Acceptance */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl">
              <p className="text-gray-800 font-semibold text-center">
                By using BeautyShine Secrets, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

