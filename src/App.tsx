/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login'>('landing');

  return (
    <main className="min-h-screen bg-white">
      {currentPage === 'landing' ? (
        <LandingPage onLoginClick={() => setCurrentPage('login')} />
      ) : (
        <div className="relative">
          <button 
            onClick={() => setCurrentPage('landing')}
            className="fixed top-8 left-8 z-50 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-2"
          >
            &larr; Voltar
          </button>
          <LoginPage />
        </div>
      )}
    </main>
  );
}
