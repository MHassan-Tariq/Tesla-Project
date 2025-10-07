import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import VehicleShowcase from './Components/VehicleShowcase'
import PromotionalCards from './Components/PromotionalCards'
import VideoAndFeaturesSection from './Components/VideoAndFeaturesSection'
import ChargingNetworkSection from './Components/ChargingNetworkSection'
import EnergyCarousel from './Components/EnergyCarousel'
import Footer from './Components/Footer'
import OrderPage from './Pages/OrderPage'
import LearnPage from './Pages/LearnPage'
import Support from './Pages/Support'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-14">
        <Hero />
        <VehicleShowcase />
        <PromotionalCards />
        <VideoAndFeaturesSection />
        <ChargingNetworkSection />
        <EnergyCarousel />
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  )
}

export default App