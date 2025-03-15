import React, { useState } from 'react';
import { Activity, Apple, Dumbbell, ChevronRight, Calendar, AlertTriangle, Stethoscope, LineChart } from 'lucide-react';
import BMICalculator from './components/BMICalculator';
import ExercisePlan from './components/ExercisePlan';
import DietPlan from './components/DietPlan';
import HealthWarnings from './components/HealthWarnings';
import ProgressTracker from './components/ProgressTracker';
import DoctorRecommendation from './components/DoctorRecommendation';
import Background3D from './components/Background3D';

function App() {
  const [activeSection, setActiveSection] = useState('bmi');
  const [userData, setUserData] = useState({
    height: 0,
    weight: 0,
    gender: '',
    bmi: 0,
    dietType: '',
  });

  const sections = [
    { id: 'bmi', name: 'BMI Calculator', icon: Activity },
    { id: 'exercise', name: 'Exercise Plan', icon: Dumbbell },
    { id: 'diet', name: 'Diet Plan', icon: Apple },
    { id: 'progress', name: 'Progress Tracker', icon: LineChart },
    { id: 'warnings', name: 'Health Warnings', icon: AlertTriangle },
    { id: 'doctors', name: 'Find a Doctor', icon: Stethoscope },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm">
      <Background3D />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-600">BeFiT</h1>
            <p className="text-gray-600 italic">Enhance Yourself With Us</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="md:col-span-1">
            <nav className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg mb-2 transition-all transform hover:scale-105 ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center">
                    <section.icon className="w-5 h-5 mr-2" />
                    <span>{section.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6">
            {activeSection === 'bmi' && (
              <BMICalculator userData={userData} setUserData={setUserData} />
            )}
            {activeSection === 'exercise' && (
              <ExercisePlan bmi={userData.bmi} />
            )}
            {activeSection === 'diet' && (
              <DietPlan dietType={userData.dietType} bmi={userData.bmi} />
            )}
            {activeSection === 'progress' && (
              <ProgressTracker />
            )}
            {activeSection === 'warnings' && (
              <HealthWarnings />
            )}
            {activeSection === 'doctors' && (
              <DoctorRecommendation />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/90 backdrop-blur-sm text-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center">© 2024 BeFiT - Enhance Yourself With Us. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;