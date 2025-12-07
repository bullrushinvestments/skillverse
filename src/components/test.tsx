import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormInputs {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      router.push('/tests');
    } catch (err) {
      setError('An error occurred while saving the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-gray-900">
      <h1 className="text-2xl font-bold">Write Test</h1>
      {error && <p role="alert" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <label htmlFor="testName" className="block mb-2 text-sm font-medium">Test Name</label>
          <input
            type="text"
            id="testName"
            placeholder="Enter test name..."
            {...register('testName', { required: true })}
            className={`w-full px-3 py-2 border rounded ${errors.testName ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.testName}
          />
          <div className="text-sm text-red-600">{errors.testName && "Test name is required"}</div>

          <label htmlFor="testDescription" className="block mb-2 text-sm font-medium">Test Description</label>
          <textarea
            id="testDescription"
            placeholder="Enter test description..."
            {...register('testDescription', { required: true })}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.testDescription ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.testDescription}
          />
          <div className="text-sm text-red-600">{errors.testDescription && "Test description is required"}</div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-3 py-2 rounded bg-blue-500 text-white ${loading ? 'opacity-50' : ''}`}
            aria-label="Submit test form"
          >
            {loading ? "Submitting..." : "Save Test"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormInputs {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      router.push('/tests');
    } catch (err) {
      setError('An error occurred while saving the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-gray-900">
      <h1 className="text-2xl font-bold">Write Test</h1>
      {error && <p role="alert" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <label htmlFor="testName" className="block mb-2 text-sm font-medium">Test Name</label>
          <input
            type="text"
            id="testName"
            placeholder="Enter test name..."
            {...register('testName', { required: true })}
            className={`w-full px-3 py-2 border rounded ${errors.testName ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.testName}
          />
          <div className="text-sm text-red-600">{errors.testName && "Test name is required"}</div>

          <label htmlFor="testDescription" className="block mb-2 text-sm font-medium">Test Description</label>
          <textarea
            id="testDescription"
            placeholder="Enter test description..."
            {...register('testDescription', { required: true })}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.testDescription ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.testDescription}
          />
          <div className="text-sm text-red-600">{errors.testDescription && "Test description is required"}</div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-3 py-2 rounded bg-blue-500 text-white ${loading ? 'opacity-50' : ''}`}
            aria-label="Submit test form"
          >
            {loading ? "Submitting..." : "Save Test"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteTests;