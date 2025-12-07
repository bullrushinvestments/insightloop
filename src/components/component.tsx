import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description: string;
  features: string[];
  pricing: number;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();

  interface ApiResponse {
    success: boolean;
    message?: string;
  }

  const onSubmit: SubmitHandler<BusinessSpec> = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response: ApiResponse = await axios.post('/api/business-specification', data);
      
      if (!response.success) throw new Error(response.message || 'Failed to create business specification');

      reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.name && "border-red-500"
          )}
        />
        {errors.name && <p className="mt-2 text-sm text-red-600" id="name-error">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          id="description"
          rows={3}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.description && "border-red-500"
          )}
        />
        {errors.description && <p className="mt-2 text-sm text-red-600" id="description-error">{errors.description.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
        <textarea
          {...register('features', { required: 'Features is required' })}
          id="features"
          rows={3}
          placeholder="Feature 1, Feature 2..."
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.features && "border-red-500"
          )}
        />
        {errors.features && <p className="mt-2 text-sm text-red-600" id="features-error">{errors.features.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="pricing" className="block text-sm font-medium text-gray-700">Pricing</label>
        <input
          type="number"
          {...register('pricing', { required: 'Pricing is required' })}
          id="pricing"
          placeholder="$9.99"
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.pricing && "border-red-500"
          )}
        />
        {errors.pricing && <p className="mt-2 text-sm text-red-600" id="pricing-error">{errors.pricing.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium",
          loading ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        )}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
      
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description: string;
  features: string[];
  pricing: number;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();

  interface ApiResponse {
    success: boolean;
    message?: string;
  }

  const onSubmit: SubmitHandler<BusinessSpec> = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response: ApiResponse = await axios.post('/api/business-specification', data);
      
      if (!response.success) throw new Error(response.message || 'Failed to create business specification');

      reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.name && "border-red-500"
          )}
        />
        {errors.name && <p className="mt-2 text-sm text-red-600" id="name-error">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          id="description"
          rows={3}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.description && "border-red-500"
          )}
        />
        {errors.description && <p className="mt-2 text-sm text-red-600" id="description-error">{errors.description.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
        <textarea
          {...register('features', { required: 'Features is required' })}
          id="features"
          rows={3}
          placeholder="Feature 1, Feature 2..."
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.features && "border-red-500"
          )}
        />
        {errors.features && <p className="mt-2 text-sm text-red-600" id="features-error">{errors.features.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="pricing" className="block text-sm font-medium text-gray-700">Pricing</label>
        <input
          type="number"
          {...register('pricing', { required: 'Pricing is required' })}
          id="pricing"
          placeholder="$9.99"
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            errors.pricing && "border-red-500"
          )}
        />
        {errors.pricing && <p className="mt-2 text-sm text-red-600" id="pricing-error">{errors.pricing.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium",
          loading ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        )}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
      
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
};

export default CreateBusinessSpecification;