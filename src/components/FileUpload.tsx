import React, { useState } from 'react';
import { Upload, Send } from 'lucide-react';

interface FileUploadProps {
  unregisteredLimit: number;
}

const FileUpload: React.FC<FileUploadProps> = ({ unregisteredLimit }) => {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }

    // Simulating Google Drive upload
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('email', email);

      // In a real implementation, you would send this to your backend
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // });

      // if (response.ok) {
      //   const data = await response.json();
      //   alert(`File uploaded successfully. Share link: ${data.shareLink}`);
      // } else {
      //   throw new Error('Upload failed');
      // }

      // Simulated success
      alert('File upload simulation complete! The file would be uploaded to Google Drive in a real implementation.');
    } catch (error) {
      console.error('Upload error:', error);
      alert('An error occurred during upload. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Share Your File</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">Max file size: {unregisteredLimit} MB</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        {file && <p className="text-sm text-gray-600">Selected file: {file.name}</p>}
        <input
          type="email"
          placeholder="Recipient's email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Send className="mr-2" size={18} />
          Send File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;