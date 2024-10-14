import React from 'react';
import { Settings } from 'lucide-react';
import GoogleDriveConfig from './GoogleDriveConfig';

interface AdminSettingsProps {
  unregisteredLimit: number;
  setUnregisteredLimit: (limit: number) => void;
}

const AdminSettings: React.FC<AdminSettingsProps> = ({ unregisteredLimit, setUnregisteredLimit }) => {
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnregisteredLimit(Number(e.target.value));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Settings</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Settings className="text-gray-600" size={24} />
            <label htmlFor="unregisteredLimit" className="text-lg font-medium text-gray-700">
              Unregistered User Limit (MB):
            </label>
          </div>
          <input
            type="number"
            id="unregisteredLimit"
            value={unregisteredLimit}
            onChange={handleLimitChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="1000"
          />
          <p className="text-sm text-gray-600">
            Set the maximum file size (in MB) that unregistered users can upload.
          </p>
        </div>
        <GoogleDriveConfig />
      </div>
    </div>
  );
};

export default AdminSettings;