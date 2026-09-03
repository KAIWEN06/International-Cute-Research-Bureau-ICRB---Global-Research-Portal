import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, QrCode, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenVerify }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Konten Teks Kiri */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Lencana */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Terverifikasi</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dipublikasikan</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Ulasan Sejawat</span>
              </span>
            </div>

            {/* Judul */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Laporan Riset Keimutan Global 2026
            </h1>

            {/* Subjudul */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              Studi observasional internasional yang melibatkan ribuan partisipan dari berbagai negara, menilai keselarasan estetika global dan respons senyum saraf.
            </p>

            {/* Tombol Aksi */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenVerify}
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Baca Riset</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#findings"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-6 py-3.5 rounded-xl font-medium transition-colors"
              >
                <span>Jelajahi Data</span>
              </a>
            </div>
          </motion.div>

          {/* Kartu Dokumen Resmi Kanan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
              {/* Tanda Air Segel Resmi */}
              <div className="absolute -right-8 -bottom-8 opacity-5 text-blue-900 pointer-events-none">
                <Award className="w-64 h-64" />
              </div>

              <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Metadata Dokumen</span>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">Dossier Resmi</h3>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                  <QrCode className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">ID Riset</span>
                  <span className="font-mono font-semibold text-slate-900">ICRB-2026-0904</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">Durasi</span>
                  <span className="font-semibold text-slate-900">4 Tahun</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">Partisipan</span>
                  <span className="font-semibold text-slate-900">8.421</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">Negara</span>
                  <span className="font-semibold text-slate-900">17 Negara</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-medium">Klasifikasi</span>
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded text-xs">Level 5 Terbatas</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>AUTH: BUREAU_DIR_9</span>
                <span>STATUS: DISEGEL</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}