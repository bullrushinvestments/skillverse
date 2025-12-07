import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const router = useRouter();
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      fetchBusinessSpecification();
    }
  }, [router.isReady]);

  const fetchBusinessSpecification = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/business-specifications/${router.query.id}`);
      setBusinessSpec(response.data);
    } catch (err: any) {
      setError(err.message || 'Failed to load business specification.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessSpec(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`/api/business-specifications`, businessSpec);
      router.push('/business-specifications');
    } catch (err: any) {
      setError(err.message || 'Failed to create business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={businessSpec.name}
            onChange={handleInputChange}
            required
            className={clsx(
              'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
              businessSpec.name.length === 0 && 'border-red-500'
            )}
          />
          
          <label htmlFor="description" className="block text-sm font-medium leading-5 text-gray-700 mt-4">Description</label>
          <textarea
            id="description"
            name="description"
            value={businessSpec.description}
            onChange={handleInputChange}
            required
            rows={3}
            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          
          <label htmlFor="features" className="block text-sm font-medium leading-5 text-gray-700 mt-4">Features</label>
          {businessSpec.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <input
                id={`feature-${index}`}
                name="features"
                type="text"
                value={feature}
                onChange={(e) => {
                  const newFeatures = [...businessSpec.features];
                  newFeatures[index] = e.target.value;
                  setBusinessSpec(prevState => ({ ...prevState, features: newFeatures }));
                }}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => {
                  const newFeatures = [...businessSpec.features];
                  newFeatures.splice(index, 1);
                  setBusinessSpec(prevState => ({ ...prevState, features: newFeatures }));
                }}
                className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          
          <button type="button" onClick={() => setBusinessSpec(prevState => ({ ...prevState, features: [...businessSpec.features, ''] }))} className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none">
            Add Feature
          </button>
          
          <div className="flex justify-end mt-6">
            <button type="submit" disabled={loading} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const router = useRouter();
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      fetchBusinessSpecification();
    }
  }, [router.isReady]);

  const fetchBusinessSpecification = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/business-specifications/${router.query.id}`);
      setBusinessSpec(response.data);
    } catch (err: any) {
      setError(err.message || 'Failed to load business specification.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessSpec(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`/api/business-specifications`, businessSpec);
      router.push('/business-specifications');
    } catch (err: any) {
      setError(err.message || 'Failed to create business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={businessSpec.name}
            onChange={handleInputChange}
            required
            className={clsx(
              'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
              businessSpec.name.length === 0 && 'border-red-500'
            )}
          />
          
          <label htmlFor="description" className="block text-sm font-medium leading-5 text-gray-700 mt-4">Description</label>
          <textarea
            id="description"
            name="description"
            value={businessSpec.description}
            onChange={handleInputChange}
            required
            rows={3}
            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          
          <label htmlFor="features" className="block text-sm font-medium leading-5 text-gray-700 mt-4">Features</label>
          {businessSpec.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <input
                id={`feature-${index}`}
                name="features"
                type="text"
                value={feature}
                onChange={(e) => {
                  const newFeatures = [...businessSpec.features];
                  newFeatures[index] = e.target.value;
                  setBusinessSpec(prevState => ({ ...prevState, features: newFeatures }));
                }}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => {
                  const newFeatures = [...businessSpec.features];
                  newFeatures.splice(index, 1);
                  setBusinessSpec(prevState => ({ ...prevState, features: newFeatures }));
                }}
                className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          
          <button type="button" onClick={() => setBusinessSpec(prevState => ({ ...prevState, features: [...businessSpec.features, ''] }))} className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none">
            Add Feature
          </button>
          
          <div className="flex justify-end mt-6">
            <button type="submit" disabled={loading} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;