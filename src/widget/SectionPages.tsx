import React from "react";

const SectionPages : React.FC = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900">
            Why Choose Our Phones?
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We provide the best certified used smartphones in Lucknow with
            warranty, quality checks, and unbeatable deals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-purple-800 text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-purple-900">Wide Range</h3>
            <p className="text-gray-700 text-sm mt-2">
              Choose from latest iPhones, Samsung, OnePlus, and budget-friendly
              options.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-purple-800 text-4xl mb-4">✅</div>
            <h3 className="text-lg font-semibold text-purple-900">
              Certified Quality
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Every phone goes through 32-point quality checks before reaching
              you.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-purple-800 text-4xl mb-4">💸</div>
            <h3 className="text-lg font-semibold text-purple-900">
              Affordable Deals
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Get premium smartphones at prices that don’t break your budget.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-purple-800 text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-purple-900">
              Warranty & Support
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Enjoy up to 6 months warranty and responsive customer support.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-purple-800 text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-purple-900">
              Fast Delivery
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Same-day delivery available across major areas in Lucknow.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-purple-800 text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-purple-900">
              Trusted by 5000+
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Loved by thousands of customers for quality and reliability.
            </p>
          </div>
        </div>
      </section>

    );
}

export default SectionPages;