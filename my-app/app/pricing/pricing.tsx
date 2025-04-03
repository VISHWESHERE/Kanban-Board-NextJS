import React from 'react'

function pricing() {
  return (
    <>
    {/* Pricing Section - Moved to bottom of page */}
    <div className="mt-16 pt-8 border-t border-gray-200">
    <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Basic Plan */}
      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Basic</h3>
        <p className="text-gray-600 mb-4">Perfect for small projects</p>
        <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm text-gray-500">/month</span></p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Up to 5 projects
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Basic support
          </li>
        </ul>
        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors">
          Get Started
        </button>
      </div>

      {/* Pro Plan */}
      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-blue-500">
        <div className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
          POPULAR
        </div>
        <h3 className="text-xl font-semibold mb-2">Pro</h3>
        <p className="text-gray-600 mb-4">For growing businesses</p>
        <p className="text-3xl font-bold mb-4">$19.99<span className="text-sm text-gray-500">/month</span></p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Priority support
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Advanced analytics
          </li>
        </ul>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
          Get Started
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
        <p className="text-gray-600 mb-4">For large organizations</p>
        <p className="text-3xl font-bold mb-4">$49.99<span className="text-sm text-gray-500">/month</span></p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            24/7 support
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Custom solutions
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Dedicated account manager
          </li>
        </ul>
        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
  </>
  )
}

export default pricing