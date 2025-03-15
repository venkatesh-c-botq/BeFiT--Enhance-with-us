import React, { useState } from 'react';
import { LineChart, Calendar } from 'lucide-react';

const ProgressTracker: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');
  const [weight, setWeight] = useState<number[]>([75, 74.5, 74, 73.2, 72.8, 72.5, 72]);
  const [measurements, setMeasurements] = useState({
    chest: [95, 94, 93, 92, 91, 90, 89],
    waist: [85, 84, 83, 82, 81, 80, 79],
    hips: [100, 99, 98, 97, 96, 95, 94],
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Progress Tracker</h2>

      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          {['weekly', 'monthly'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                selectedPeriod === period
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <LineChart className="w-5 h-5 mr-2" />
            Weight Progress
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg p-4">
            {/* Placeholder for weight chart */}
            <div className="h-full flex items-center justify-center text-gray-500">
              Weight tracking visualization will be displayed here
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Body Measurements
          </h3>
          <div className="space-y-4">
            {Object.entries(measurements).map(([part, values]) => (
              <div key={part} className="bg-gray-50 rounded-lg p-4">
                <p className="text-lg font-medium capitalize mb-2">{part}</p>
                <div className="flex justify-between">
                  <span>Start: {values[0]} cm</span>
                  <span>Current: {values[values.length - 1]} cm</span>
                  <span className="text-green-500">
                    -{values[0] - values[values.length - 1]} cm
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-purple-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Progress Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-gray-600">Total Weight Loss</p>
            <p className="text-2xl font-bold text-green-500">
              {weight[0] - weight[weight.length - 1]} kg
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-gray-600">Weeks Tracked</p>
            <p className="text-2xl font-bold text-purple-500">{weight.length}</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-gray-600">Goal Progress</p>
            <p className="text-2xl font-bold text-blue-500">65%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;