import React from 'react';
import { Play } from 'lucide-react';

interface ExercisePlanProps {
  bmi: number;
}

const ExercisePlan: React.FC<ExercisePlanProps> = ({ bmi }) => {
  const getExercisePlan = () => {
    if (bmi < 18.5) {
      return {
        title: 'Muscle Building Program',
        exercises: [
          {
            name: 'Push-ups',
            sets: '3 sets of 10-12 reps',
            tutorial: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
          },
          {
            name: 'Squats',
            sets: '3 sets of 12-15 reps',
            tutorial: 'https://www.youtube.com/watch?v=aclHkVaku9U',
          },
          {
            name: 'Dumbbell Rows',
            sets: '3 sets of 10-12 reps',
            tutorial: 'https://www.youtube.com/watch?v=roCP6wCXPqo',
          },
        ],
      };
    } else if (bmi < 25) {
      return {
        title: 'Maintenance and Toning Program',
        exercises: [
          {
            name: 'Jumping Jacks',
            sets: '3 sets of 30 seconds',
            tutorial: 'https://www.youtube.com/watch?v=c4DAnQ6DtF8',
          },
          {
            name: 'Mountain Climbers',
            sets: '3 sets of 20 reps',
            tutorial: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
          },
          {
            name: 'Plank',
            sets: '3 sets of 30-45 seconds',
            tutorial: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
          },
        ],
      };
    } else {
      return {
        title: 'Weight Loss Program',
        exercises: [
          {
            name: 'Burpees',
            sets: '3 sets of 10 reps',
            tutorial: 'https://www.youtube.com/watch?v=dZgVxmf6jkA',
          },
          {
            name: 'High Knees',
            sets: '3 sets of 30 seconds',
            tutorial: 'https://www.youtube.com/watch?v=oDdkytliOqE',
          },
          {
            name: 'Jump Rope',
            sets: '3 sets of 1 minute',
            tutorial: 'https://www.youtube.com/watch?v=u3zgHI8QnqE',
          },
        ],
      };
    }
  };

  const plan = getExercisePlan();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{plan.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plan.exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
              <p className="text-gray-600 mb-4">{exercise.sets}</p>
              <a
                href={exercise.tutorial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Tutorial
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Exercise Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Start with proper warm-up exercises</li>
          <li>Maintain proper form throughout the exercises</li>
          <li>Stay hydrated during your workout</li>
          <li>Take appropriate rest between sets</li>
          <li>Cool down with stretching exercises</li>
        </ul>
      </div>
    </div>
  );
};

export default ExercisePlan;