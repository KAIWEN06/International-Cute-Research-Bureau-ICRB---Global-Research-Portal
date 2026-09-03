import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainFindings from './components/MainFindings';
import ResearchData from './components/ResearchData';
import ObservationReport from './components/ObservationReport';
import WarningSection from './components/WarningSection';
import VerificationSection from './components/VerificationSection';
import VerificationModal from './components/VerificationModal';
import Footer from './components/Footer';

export default function App() {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenVerify={() => setIsVerifyOpen(true)} />
      
      <main>
        <Hero onOpFenVerify={() => setIsVerifyOpen(true)} />
        <MainFindings />
        <ResearchData />
        <ObservationReport />
        <WarningSection />
        <VerificationSection onOpenVerify={() => setIsVerifyOpen(true)} />
      </main>

      <Footer />

      <VerificationModal 
        isOpen={isVerifyOpen} 
        onClose={() => setIsVerifyOpen(false)} 
      />
    </div>
  );
}