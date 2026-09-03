import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-white text-lg">
                Biro Riset Keimutan Internasional
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Departemen Studi Keimutan Manusia. Didedikasikan untuk metrik observasional, simetri wajah, dan distribusi senyum internasional.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-center space-y-2 text-xs font-mono text-slate-500">
            <span>REF DOK: ICRB-2026-FINAL</span>
            <span>TINGKAT_KEAMANAN: ARSIP_PUBLIK</span>
            <span>YURISDIKSI: JARINGAN_RISET_GLOBAL</span>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>
            &copy; 2026 Biro Riset Keimutan Internasional (ICRB). Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-center sm:text-right max-w-md">
            Semua temuan yang disajikan di situs web ini dimaksudkan murni untuk tujuan hiburan.
          </p>
        </div>
      </div>
    </footer>
  );
}