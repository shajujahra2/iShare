import React from 'react';
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Share2 className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-blue-600">iShare</h1>
        </Link>
        <nav className="space-x-4">
          <Link to="/upload" className="text-blue-600 hover:text-blue-800">Upload</Link>
          <Link to="/signup" className="text-blue-600 hover:text-blue-800">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;