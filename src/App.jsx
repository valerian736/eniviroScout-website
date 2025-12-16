import React, { useState } from 'react';
import { Activity, Wifi, Gauge, Thermometer, Wind, Droplets, Eye, Radio, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const robotImages = [
    'image_4.jpg', // Front view with wheels
    'image_3.jpg', // Hand holding controller
    'image_2.jpg'  // Side view with controller
  ];

  const features = [
    {
      icon: <Thermometer className="w-8 h-8 text-white" />,
      title: "Temperature Monitoring",
      description: "Real-time temperature sensing with high precision"
    },
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      title: "Humidity Detection",
      description: "Monitors indoor humidity levels continuously"
    },
    {
      icon: <Wind className="w-8 h-8 text-white" />,
      title: "Air Quality Sensing",
      description: "Detects air quality parameters and pollutants"
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Motion Detection",
      description: "Identifies movement and occupancy patterns"
    },
    {
      icon: <Radio className="w-8 h-8 text-white" />,
      title: "Remote Control",
      description: "Full wireless control from anywhere"
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Live Monitoring",
      description: "Real-time data visualization and alerts"
    }
  ];

  const specs = [
    { label: "Sensing Range", value: "10m radius" },
    { label: "Battery Life", value: "8+ hours" },
    { label: "Connectivity", value: "WiFi" },
    { label: "Response Time", value: "< 100ms" },
    { label: "Sensors", value: "6+ integrated" },
    { label: "Control Range", value: "Unlimited (Internet)" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % robotImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + robotImages.length) % robotImages.length);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 -z-10"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cyan-900/60 backdrop-blur-md z-50 border-b border-cyan-300/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="image_1.jpg" alt="EnviroScout Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">EnviroScout</span>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveSection('overview')}
              className={`hover:text-cyan-400 transition ${activeSection === 'overview' ? 'text-cyan-400' : ''}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveSection('features')}
              className={`hover:text-cyan-400 transition ${activeSection === 'features' ? 'text-cyan-400' : ''}`}
            >
              Features
            </button>
            <button 
              onClick={() => setActiveSection('specs')}
              className={`hover:text-cyan-400 transition ${activeSection === 'specs' ? 'text-cyan-400' : ''}`}
            >
              Specs
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">
                EnviroScout
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Environmental Sensing Robot
              </h1>
              <p className="text-xl text-white/90 mb-8">
                An intelligent autonomous robot designed for comprehensive indoor environmental monitoring 
                with advanced remote control capabilities
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white text-cyan-600 hover:bg-cyan-50 rounded-lg font-semibold transition flex items-center gap-2">
                  <Wifi className="w-5 h-5" />
                  Live Demo
                </button>
                <button className="px-8 py-3 bg-cyan-700/50 hover:bg-cyan-700 rounded-lg font-semibold transition">
                  Technical Details
                </button>
              </div>
            </div>

            {/* Robot Image Gallery */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/30 shadow-2xl">
                <img 
                  src={robotImages[currentImageIndex]} 
                  alt="Environmental Sensing Robot" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Image Navigation */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-900/80 hover:bg-cyan-800 p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-900/80 hover:bg-cyan-800 p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {robotImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-6 bg-teal-500/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-center text-white/80 mb-12">Advanced capabilities for comprehensive environmental monitoring</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-cyan-600/30 border border-white/20 rounded-xl p-6 hover:border-white/40 hover:bg-cyan-600/40 transition duration-300"
              >
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Specifications</h2>
          
          <div className="bg-cyan-600/20 border border-white/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-white/20">
                  <span className="text-white/80">{spec.label}</span>
                  <span className="font-semibold text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Robot Showcase Section */}
      <div className="py-20 px-6 bg-teal-500/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Design & Components</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-600/30 border border-white/20 rounded-2xl overflow-hidden">
              <img src="image_2.jpg" alt="Robot with Controller" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Omni-Directional Movement</h3>
                <p className="text-white/80">Four-wheel omni drive system for 360° maneuverability and precise positioning in tight indoor spaces.</p>
              </div>
            </div>
            
            <div className="bg-cyan-600/30 border border-white/20 rounded-2xl overflow-hidden">
              <img src="image_3.jpg" alt="Control Board" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Advanced Control System</h3>
                <p className="text-white/80">Custom PCB with integrated sensors and display for real-time monitoring and wireless connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remote Control Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Wifi className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Remote Control Capabilities</h2>
          <p className="text-xl text-white/90 mb-8">
            Control your environmental sensing robot from anywhere with our intuitive 
            web-based interface. Monitor real-time data, adjust sensing parameters, 
            and navigate through your indoor spaces remotely.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-cyan-600/30 border border-white/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-white">Web Interface</h3>
              <p className="text-white/80 text-sm">Access from any browser</p>
            </div>
            <div className="bg-cyan-600/30 border border-white/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-white">Real-time Data</h3>
              <p className="text-white/80 text-sm">Live sensor readings</p>
            </div>
            <div className="bg-cyan-600/30 border border-white/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-white">Cloud Connected</h3>
              <p className="text-white/80 text-sm">Always accessible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center text-white/80">
          <p className="mb-2">Environmental Sensing Robot - Project Exhibition</p>
          <p className="text-sm">Developed for Indoor Environmental Monitoring & Remote Control</p>
        </div>
      </footer>
    </div>
  );
}