import React from 'react';

interface BMICalculatorProps {
  userData: {
    height: number;
    weight: number;
    gender: string;
    bmi: number;
    dietType: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<{
    height: number;
    weight: number;
    gender: string;
    bmi: number;
    dietType: string;
  }>>;
}

const BMICalculator: React.FC<BMICalculatorProps> = ({ userData, setUserData }) => {
  const calculateBMI = () => {
    if (userData.height && userData.weight) {
      const heightInMeters = userData.height / 100;
      const bmi = userData.weight / (heightInMeters * heightInMeters);
      setUserData({ ...userData, bmi: parseFloat(bmi.toFixed(1)) });
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-500' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-500' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-500' };
    return { category: 'Obese', color: 'text-red-500' };
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">BMI Calculator</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={userData.height || ''}
              onChange={(e) => setUserData({ ...userData, height: parseFloat(e.target.value) })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter height in cm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={userData.weight || ''}
              onChange={(e) => setUserData({ ...userData, weight: parseFloat(e.target.value) })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter weight in kg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {['Male', 'Female', 'Other'].map((gender) => (
              <button
                key={gender}
                onClick={() => setUserData({ ...userData, gender })}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  userData.gender === gender
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Diet Preference
          </label>
          <div className="flex space-x-4">
            {['Vegetarian', 'Non-vegetarian'].map((type) => (
              <button
                key={type}
                onClick={() => setUserData({ ...userData, dietType: type })}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  userData.dietType === type
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Calculate BMI
        </button>

        {userData.bmi > 0 && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Your Results</h3>
            <p className="text-lg">
              Your BMI is:{' '}
              <span className="font-bold">{userData.bmi}</span>
            </p>
            <p className="text-lg">
              Category:{' '}
              <span className={`font-bold ${getBMICategory(userData.bmi).color}`}>
                {getBMICategory(userData.bmi).category}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;