import React from 'react';

interface DietPlanProps {
  dietType: string;
  bmi: number;
}

const DietPlan: React.FC<DietPlanProps> = ({ dietType, bmi }) => {
  const getDietPlan = () => {
    if (dietType === 'Vegetarian') {
      return {
        breakfast: [
          'Oatmeal with nuts and fruits',
          'Greek yogurt with honey',
          'Whole grain toast with avocado',
          'Protein smoothie with plant-based protein',
        ],
        lunch: [
          'Quinoa bowl with roasted vegetables',
          'Lentil soup with whole grain bread',
          'Chickpea curry with brown rice',
          'Mixed bean salad with olive oil dressing',
        ],
        dinner: [
          'Stir-fried tofu with vegetables',
          'Black bean burrito bowl',
          'Vegetable curry with brown rice',
          'Mushroom and spinach pasta',
        ],
        snacks: [
          'Mixed nuts and dried fruits',
          'Hummus with carrot sticks',
          'Apple with almond butter',
          'Roasted chickpeas',
        ],
      };
    } else {
      return {
        breakfast: [
          'Eggs with whole grain toast',
          'Chicken breast sandwich',
          'Protein pancakes',
          'Greek yogurt with granola',
        ],
        lunch: [
          'Grilled chicken salad',
          'Tuna wrap with vegetables',
          'Turkey and avocado sandwich',
          'Salmon with quinoa',
        ],
        dinner: [
          'Lean beef stir-fry',
          'Baked fish with vegetables',
          'Chicken breast with sweet potato',
          'Turkey meatballs with zucchini noodles',
        ],
        snacks: [
          'Protein shake',
          'Boiled eggs',
          'Greek yogurt with berries',
          'Turkey and cheese roll-ups',
        ],
      };
    }
  };

  const plan = getDietPlan();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Personalized Diet Plan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(plan).map(([meal, foods]) => (
          <div
            key={meal}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="bg-green-500 text-white px-6 py-3">
              <h3 className="text-xl font-semibold capitalize">{meal}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {foods.map((food, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Nutrition Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Drink at least 8 glasses of water daily</li>
          <li>Eat slowly and mindfully</li>
          <li>Include a variety of colorful vegetables</li>
          <li>Control portion sizes</li>
          <li>Avoid processed foods and sugary drinks</li>
        </ul>
      </div>
    </div>
  );
};

export default DietPlan;