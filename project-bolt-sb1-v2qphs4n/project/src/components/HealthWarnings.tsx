import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const HealthWarnings: React.FC = () => {
  const warnings = [
    {
      title: 'Irregular Exercise Routine',
      description: 'Skipping workouts can lead to:',
      consequences: [
        'Loss of muscle mass and strength',
        'Decreased cardiovascular fitness',
        'Reduced flexibility and mobility',
        'Weight gain and metabolic changes',
      ],
    },
    {
      title: 'Poor Diet Adherence',
      description: 'Not following the recommended diet can result in:',
      consequences: [
        'Nutritional deficiencies',
        'Energy level fluctuations',
        'Slower recovery from workouts',
        'Compromised immune system',
      ],
    },
    {
      title: 'Overtraining',
      description: 'Exercise without proper rest can cause:',
      consequences: [
        'Increased risk of injury',
        'Chronic fatigue',
        'Decreased performance',
        'Hormonal imbalances',
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Health Warnings & Side Effects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warnings.map((warning, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="bg-red-500 text-white px-6 py-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-semibold">{warning.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{warning.description}</p>
              <ul className="space-y-2">
                {warning.consequences.map((consequence, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    {consequence}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
        <div className="flex items-center mb-4">
          <Info className="w-6 h-6 text-yellow-500 mr-2" />
          <h3 className="text-xl font-semibold">Prevention Tips</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maintain a consistent workout schedule</li>
          <li>Follow the recommended diet plan strictly</li>
          <li>Get adequate rest and recovery</li>
          <li>Stay hydrated throughout the day</li>
          <li>Listen to your body's signals</li>
          <li>Consult with healthcare professionals when needed</li>
        </ul>
      </div>
    </div>
  );
};

export default HealthWarnings;