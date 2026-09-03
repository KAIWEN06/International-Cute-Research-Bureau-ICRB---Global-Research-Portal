import React, { useState } from 'react';
import { ShieldCheck, Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenVerify }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-serif font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                Biro Riset Keimutan Internasional
              </span>
              <span className="block text-xs font-mono text-blue-600 tracking-wider uppercase">
                ICRB-GOV.INT // Ref: #904
              </span>
            </div>
          </div>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Beranda</a>
            <a href="#findings" className="hover:text-blue-600 transition-colors">Riset</a>
            <a href="#statistics" className="hover:text-blue-600 transition-colors">Statistik</a>
            <a href="#observations" className="hover:text-blue-600 transition-colors">Temuan</a>
            <a href="#recommendation" className="hover:text-blue-600 transition-colors">Rekomendasi</a>
          </nav>

          {/* Tombol Aksi */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenVerify}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Laporan Resmi</span>
            </button>
          </div>

          {/* Tombol Menu Seluler */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Seluler */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1.5 font-medium"
          >
            Beranda
          </a>
          <a
            href="#findings"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1.5 font-medium"
          >
            Riset
          </a>
          <a
            href="#statistics"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1.5 font-medium"
          >
            Statistik
          </a>
          <a
            href="#observations"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1.5 font-medium"
          >
            Temuan
          </a>
          <a
            href="#recommendation"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1.5 font-medium"
          >
            Rekomendasi
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenVerify();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>Laporan Resmi</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}