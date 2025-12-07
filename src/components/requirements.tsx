import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

interface Requirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface FormData {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { requirements: [] }
  });

  useEffect(() => {
    // Fetch initial data if needed
    axios.get('/api/requirements')
      .then(response => setRequirements(response.data))
      .catch(error => console.error('Failed to fetch requirements:', error));
  }, []);

  const onSubmit = (data: FormData) => {
    axios.post('/api/requirements', data)
      .then(() => {
        reset();
        alert('Requirements submitted successfully!');
      })
      .catch(error => console.error('Error submitting requirements:', error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {requirements.map((req, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`requirement-${index}`} className="block text-sm font-medium text-gray-700">
            Requirement Name
          </label>
          <input
            id={`requirement-${index}`}
            name={`requirements[${index}].name`}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            aria-label={`Requirement ${req.name} input`}
            disabled={!!req.id}
            defaultValue={req.name}
          />
          <label htmlFor={`description-${index}`} className="block mt-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id={`description-${index}`}
            name={`requirements[${index}].description`}
            rows={3}
            className="mt-1 p-2 w-full border rounded-md"
            aria-label={`Requirement ${req.name} description textarea`}
            defaultValue={req.description}
          />
          <div className="flex items-center mt-2">
            <input
              id={`essential-${index}`}
              name={`requirements[${index}].isEssential`}
              type="checkbox"
              defaultChecked={!!req.isEssential}
              aria-label={`Is ${req.name} essential?`}
            />
            <label htmlFor={`essential-${index}`} className="ml-2 text-sm">
              Essential
            </label>
          </div>
        </div>
      ))}
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Submit Requirements
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

interface Requirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface FormData {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { requirements: [] }
  });

  useEffect(() => {
    // Fetch initial data if needed
    axios.get('/api/requirements')
      .then(response => setRequirements(response.data))
      .catch(error => console.error('Failed to fetch requirements:', error));
  }, []);

  const onSubmit = (data: FormData) => {
    axios.post('/api/requirements', data)
      .then(() => {
        reset();
        alert('Requirements submitted successfully!');
      })
      .catch(error => console.error('Error submitting requirements:', error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {requirements.map((req, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`requirement-${index}`} className="block text-sm font-medium text-gray-700">
            Requirement Name
          </label>
          <input
            id={`requirement-${index}`}
            name={`requirements[${index}].name`}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            aria-label={`Requirement ${req.name} input`}
            disabled={!!req.id}
            defaultValue={req.name}
          />
          <label htmlFor={`description-${index}`} className="block mt-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id={`description-${index}`}
            name={`requirements[${index}].description`}
            rows={3}
            className="mt-1 p-2 w-full border rounded-md"
            aria-label={`Requirement ${req.name} description textarea`}
            defaultValue={req.description}
          />
          <div className="flex items-center mt-2">
            <input
              id={`essential-${index}`}
              name={`requirements[${index}].isEssential`}
              type="checkbox"
              defaultChecked={!!req.isEssential}
              aria-label={`Is ${req.name} essential?`}
            />
            <label htmlFor={`essential-${index}`} className="ml-2 text-sm">
              Essential
            </label>
          </div>
        </div>
      ))}
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Submit Requirements
      </button>
    </form>
  );
};

export default GatherRequirements;