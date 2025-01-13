'use client';

import React, { useState } from 'react';
import { deleteUserAccount } from '@/app/action';

const DeleteUserComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      await deleteUserAccount(email);
      setMessage(`✅ User with email "${email}" has been deleted successfully.`);
      setEmail(''); // Clear the email input
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`❌ ${error.message}`);
      } else {
        setMessage('❌ Failed to delete the user. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Delete User Account</h1>
      <p className="text-sm text-gray-600 mb-6">
        Enter the email of the user you wish to delete. This action is irreversible.
      </p>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          User Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter user email"
          disabled={isLoading}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
        />
      </div>

      <button
        onClick={handleDelete}
        disabled={isLoading}
        className={`w-full px-4 py-2 text-white font-medium rounded-lg shadow ${
          isLoading
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        }`}
      >
        {isLoading ? 'Deleting...' : 'Delete User'}
      </button>

      {message && (
        <p
          className={`mt-4 text-sm font-medium ${
            message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default DeleteUserComponent;
