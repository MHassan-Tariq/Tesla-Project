import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SigninPage = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNext = (e) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Email:', email)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Tesla Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/img/tesla-logo.png"
              alt="Tesla"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            <ellipse cx="12" cy="12" rx="5.5" ry="9" stroke="currentColor" strokeWidth="1.3"/>
          </svg>
          <span className="text-sm font-medium">en-US</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Sign In Box */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            {/* Sign In Heading */}
            <h1 className="text-3xl font-bold text-black text-center mb-8">
              Sign In
            </h1>

            {/* Email Section */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email
                </label>
                <div className="ml-2 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
              </div>
              
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                autoComplete="email"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200 mb-4"
            >
              Next
            </button>

            {/* Trouble Signing In Link */}
            <div className="text-center mb-6">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
              >
                Trouble Signing In?
              </a>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Create Account Button */}
            <Link to="/create-account" className="block">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-bold py-3 px-4 rounded-md transition-colors duration-200">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center space-x-4 text-sm text-gray-500">
            <span>Tesla © 2025</span>
            <span>•</span>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Privacy & Legal
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SigninPage
