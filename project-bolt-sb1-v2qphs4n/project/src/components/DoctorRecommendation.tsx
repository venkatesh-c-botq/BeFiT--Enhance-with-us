import React, { useState } from 'react';
import { Stethoscope, MapPin, Phone, Mail } from 'lucide-react';

const DoctorRecommendation: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'Sports Medicine',
    'Nutritionist',
    'Physiotherapist',
    'General Physician',
    'Orthopedic',
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Sports Medicine',
      location: 'New York, NY',
      experience: '15 years',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@example.com',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Nutritionist',
      location: 'San Francisco, CA',
      experience: '12 years',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@example.com',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Dr. Emily Williams',
      specialty: 'Physiotherapist',
      location: 'Chicago, IL',
      experience: '10 years',
      phone: '+1 (555) 345-6789',
      email: 'emily.williams@example.com',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    },
  ];

  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doctor) => doctor.specialty === selectedSpecialty)
    : doctors;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Find a Healthcare Professional</h2>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Specialty
        </label>
        <div className="flex flex-wrap gap-3">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedSpecialty === specialty
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-4">{doctor.specialty}</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center">
                  <Stethoscope className="w-4 h-4 text-gray-400 mr-2" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-400 mr-2" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-400 mr-2" />
                
                  <span>{doctor.email}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">When to Seek Professional Help</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Persistent pain or discomfort during exercise</li>
          <li>Unusual weight fluctuations</li>
          <li>Chronic fatigue or weakness</li>
          <li>Dietary concerns or nutritional questions</li>
          <li>Recovery from injury</li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorRecommendation;