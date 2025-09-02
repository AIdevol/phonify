import React from "react";

const MyProject: React.FC = () => {
  return (
    <div className="text-center">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
      🚀 My Project
    </h2>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
      A modern React-based solution built with Tailwind CSS for beautiful,
      responsive, and scalable user experiences. Designed to impress clients
      and deliver real business value.
    </p>

    {/* Features */}
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="text-purple-700 text-3xl mb-3">⚡</div>
        <h3 className="font-semibold text-lg text-purple-900">
          Fast & Responsive
        </h3>
        <p className="text-gray-700 text-sm mt-1">
          Optimized for speed and mobile-first design.
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="text-purple-700 text-3xl mb-3">🎨</div>
        <h3 className="font-semibold text-lg text-purple-900">
          Modern UI
        </h3>
        <p className="text-gray-700 text-sm mt-1">
          Sleek design inspired by top tech products.
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="text-purple-700 text-3xl mb-3">🔒</div>
        <h3 className="font-semibold text-lg text-purple-900">
          Secure & Reliable
        </h3>
        <p className="text-gray-700 text-sm mt-1">
          Built with best practices for security.
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="text-purple-700 text-3xl mb-3">⚙️</div>
        <h3 className="font-semibold text-lg text-purple-900">
          Easy to Customize
        </h3>
        <p className="text-gray-700 text-sm mt-1">
          Flexible codebase for client-specific needs.
        </p>
      </div>
    </div>

    {/* Call-to-action buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 transition">
        💼 View Demo
      </button>
      <button className="px-6 py-3 bg-gray-200 text-purple-900 rounded-lg shadow hover:bg-gray-300 transition">
        📄 Get Proposal
      </button>
    </div>
  </div>
  );
};

export default MyProject;
