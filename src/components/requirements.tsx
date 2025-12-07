import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id?: string;
  name: string;
  description: string;
  isEssential: boolean;
}

interface FormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      // Fetch existing requirements from API or initialize empty array
    }
  }, [router.isReady]);

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      setLoading(true);
      setError(null);

      await axios.post('/api/requirements', data.requirements);
      router.push('/');
    } catch (err) {
      setError('Failed to save requirements.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddRequirement = () => {
    // Add new requirement object with default values
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Gather Requirements</h1>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list-disc pl-5 mb-4">
          {Array.isArray(formState.values.requirements) &&
            formState.values.requirements.map((requirement, index) => (
              <li key={index} className="mb-2">
                <input
                  type="text"
                  placeholder="Requirement Name"
                  {...register(`requirements.${index}.name`)}
                  aria-label={`Requirement name ${index + 1}`}
                />
                <textarea
                  rows={3}
                  placeholder="Description"
                  {...register(`requirements.${index}.description`)}
                  aria-label={`Requirement description ${index + 1}`}
                />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register(`requirements.${index}.isEssential`)}
                    defaultChecked={false}
                  />
                  <span className="ml-2">Essential</span>
                </label>
              </li>
            ))}
        </ul>
        <button
          type="button"
          onClick={handleAddRequirement}
          disabled={loading}
          aria-label="Add new requirement"
        >
          Add Requirement
        </button>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          aria-label="Submit gathered requirements"
        >
          {loading ? 'Saving...' : 'Save Requirements'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id?: string;
  name: string;
  description: string;
  isEssential: boolean;
}

interface FormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      // Fetch existing requirements from API or initialize empty array
    }
  }, [router.isReady]);

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      setLoading(true);
      setError(null);

      await axios.post('/api/requirements', data.requirements);
      router.push('/');
    } catch (err) {
      setError('Failed to save requirements.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddRequirement = () => {
    // Add new requirement object with default values
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Gather Requirements</h1>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list-disc pl-5 mb-4">
          {Array.isArray(formState.values.requirements) &&
            formState.values.requirements.map((requirement, index) => (
              <li key={index} className="mb-2">
                <input
                  type="text"
                  placeholder="Requirement Name"
                  {...register(`requirements.${index}.name`)}
                  aria-label={`Requirement name ${index + 1}`}
                />
                <textarea
                  rows={3}
                  placeholder="Description"
                  {...register(`requirements.${index}.description`)}
                  aria-label={`Requirement description ${index + 1}`}
                />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register(`requirements.${index}.isEssential`)}
                    defaultChecked={false}
                  />
                  <span className="ml-2">Essential</span>
                </label>
              </li>
            ))}
        </ul>
        <button
          type="button"
          onClick={handleAddRequirement}
          disabled={loading}
          aria-label="Add new requirement"
        >
          Add Requirement
        </button>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          aria-label="Submit gathered requirements"
        >
          {loading ? 'Saving...' : 'Save Requirements'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;