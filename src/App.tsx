import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import FileUpload from './components/FileUpload';
import AdminSettings from './components/AdminSettings';
import AdminLogin from './components/AdminLogin';
import UserSignup from './components/UserSignup';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [unregisteredLimit, setUnregisteredLimit] = useState(100); // MB

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/upload" element={<FileUpload unregisteredLimit={unregisteredLimit} />} />
            <Route path="/admin" element={isAdmin ? <AdminSettings unregisteredLimit={unregisteredLimit} setUnregisteredLimit={setUnregisteredLimit} /> : <AdminLogin setIsAdmin={setIsAdmin} />} />
            <Route path="/signup" element={<UserSignup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;