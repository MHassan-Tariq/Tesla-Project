import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateAccount = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    region: '',
    language: '',
    firstName: '',
    lastName: '',
    // Step 2
    email: '',
    password: '',
    confirmPassword: '',
    getUpdates: false,
    // Step 3
    isComplete: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Complete account creation
      setFormData(prev => ({ ...prev, isComplete: true }))
      // Redirect to home after a brief delay
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const isStep1Valid = formData.region && formData.language && formData.firstName && formData.lastName
  const isStep2Valid = formData.email && formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  const renderStep1 = () => (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 max-w-md w-full">
      {/* Step indicator */}
      <div className="text-sm text-gray-500 mb-2">Step 1 of 3</div>
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-black text-center mb-8">
        Create Account
      </h1>

      {/* Region Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          Region
        </label>
        <select
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Select Region</option>
          <option value="north-america">North America</option>
          <option value="europe">Europe</option>
          <option value="asia-pacific">Asia Pacific</option>
        </select>
      </div>

      {/* Language Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          Language
        </label>
        <select
          name="language"
          value={formData.language}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="spanish">Español</option>
          <option value="french">Français</option>
          <option value="german">Deutsch</option>
        </select>
      </div>

      {/* First Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="First Name"
        />
      </div>

      {/* Last Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-black mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Last Name"
        />
      </div>

      {/* reCAPTCHA Placeholder */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2 p-3 border border-gray-300 rounded-md">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm text-gray-700">I am human</span>
          <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-xs text-gray-500">h</span>
          </div>
          <span className="text-xs text-gray-500">Privacy - Terms</span>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="text-xs text-gray-600 mb-6 leading-relaxed">
        By clicking 'Next', I understand and agree to Tesla's{' '}
        <a href="#" className="text-blue-600 underline">Privacy Notice</a> and{' '}
        <a href="#" className="text-blue-600 underline">Terms of Use</a> for creating a Tesla Account. I also understand that Tesla will process my personal data according to the Privacy Notice and I may be contacted by Tesla, Tesla's affiliates, and their local sales partners about Tesla's products and services. I understand that I can opt out at any time in the Tesla app or by unsubscribing. I also understand that Tesla may use automated calls, texts, and prerecorded messages to contact me, and that message and data rates may apply.
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!isStep1Valid}
        className={`w-full py-3 px-4 rounded-md font-bold transition-colors duration-200 ${
          isStep1Valid
            ? 'bg-[#3E6AE1] hover:bg-[#3458B5] text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  )

  const renderStep2 = () => (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 max-w-md w-full">
      {/* Step indicator */}
      <div className="text-sm text-gray-500 mb-2">Step 2 of 3</div>
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-black text-center mb-8">
        Create Account
      </h1>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Email"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="block text-sm font-medium text-black">
            Password
          </label>
          <div className="ml-2 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
            <span className="text-white text-xs font-bold">i</span>
          </div>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-10"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showPassword ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-black mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-10"
            placeholder="Confirm Password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showConfirmPassword ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Get Updates Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          name="getUpdates"
          checked={formData.getUpdates}
          onChange={handleInputChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="ml-2 text-sm text-black">
          Get Tesla Updates [Optional]
        </label>
      </div>

      {/* Informational Paragraph */}
      <div className="text-xs text-gray-600 mb-6 leading-relaxed">
        By clicking 'Create Account', I authorize Tesla to contact me with more information about Tesla products, services and regional events via the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply. I can opt out at any time in the Tesla app or by{' '}
        <a href="#" className="text-blue-600 underline">unsubscribing</a>.
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!isStep2Valid}
        className={`w-full py-3 px-4 rounded-md font-bold transition-colors duration-200 ${
          isStep2Valid
            ? 'bg-[#3E6AE1] hover:bg-[#3458B5] text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  )

  const renderStep3 = () => (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 max-w-md w-full text-center">
      {/* Success Message */}
      <div className="mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-black mb-4">
          Your Tesla Account has been created successfully.
        </h1>
        <p className="text-gray-600">
          Welcome to the Tesla family! You can now access all Tesla services and features.
        </p>
      </div>

      {/* Continue Button */}
      <button
        onClick={() => navigate('/')}
        className="w-full bg-[#3E6AE1] hover:bg-[#3458B5] text-white font-bold py-3 px-4 rounded-md transition-colors duration-200"
      >
        Continue to Home
      </button>
    </div>
  )

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
          {/* Step Content with Fade Animation */}
          <div className="transition-all duration-300 ease-in-out">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>

          {/* Back Button (only show on steps 2 and 3) */}
          {currentStep > 1 && currentStep < 3 && (
            <div className="text-center mt-4">
              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ← Back
              </button>
            </div>
          )}
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

export default CreateAccount
