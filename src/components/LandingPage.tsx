import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, DollarSign } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl text-center">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to iShare</h1>
      <p className="text-xl text-white mb-12">Fast, secure, and easy file sharing using your Google Drive storage.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-blue-200" />}
          title="Secure"
          description="Your files are protected with end-to-end encryption"
        />
        <FeatureCard
          icon={<Zap className="w-12 h-12 text-blue-200" />}
          title="Fast"
          description="Upload and share files in seconds"
        />
        <FeatureCard
          icon={<DollarSign className="w-12 h-12 text-blue-200" />}
          title="Free"
          description="Share up to 100MB for free, upgrade for more"
        />
      </div>
      
      <Link to="/upload" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition-colors">
        Start Sharing Now
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-20 p-6 rounded-lg">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

export default LandingPage;