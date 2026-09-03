import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

const scanningSteps = [
  "Memindai wajah...",
  "Memeriksa senyum...",
  "Membandingkan dengan basis data...",
  "Menganalisis keimutan...",
  "Menghitung...",
  "Selesai."
];

export default function VerificationModal({ isOpen, onClose }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStepIndex(0);
      setIsCompleted(false);
      return;
    }

    let timer;
    if (currentStepIndex < scanningSteps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 700);
    } else if (currentStepIndex === scanningSteps.length - 1 && !isCompleted) {
      timer = setTimeout(() => {
        setIsCompleted(true);
        // Picu konfeti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [isOpen, currentStepIndex, isCompleted]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative my-8"
      >
        {/* Kepala Modal - Diperbaiki agar tombol tutup aman dan tidak terpotong */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-2 truncate pr-4">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="font-mono text-xs tracking-wider uppercase truncate">Protokol Biometrik ICRB // 904</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Badan Modal dengan batasan tinggi dan scroll jika layar kecil */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!isCompleted ? (
            <div className="py-12 text-center space-y-6">
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                <RefreshCw className="w-8 h-8 text-blue-600 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Memproses Verifikasi
                </h3>
                <p className="text-blue-600 font-mono text-sm">
                  {scanningSteps[currentStepIndex]}
                </p>
              </div>

              {/* Bilah Kemajuan */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                <div 
                  className="bg-blue-600 h-full transition-all duration-500"
                  style={{ width: `${((currentStepIndex + 1) / scanningSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center space-y-3">
                {/* Bagian Foto Subjek - Diperbesar ukurannya */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                  <img 
                    src="/foto-dia.jpg" 
                    alt="Foto Subjek" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-bold">Subjek Ditemukan</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Verifikasi Berhasil
                  </h3>
                </div>
              </div>

              {/* Kotak Status */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-500 text-sm font-medium">Status</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    TERVERIFIKASI
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 text-xs font-medium block mb-2 uppercase tracking-wider">Klasifikasi</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold text-slate-900">
                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Imut</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Cantik / Indah</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Lucu</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Menggemaskan</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-white p-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Manusia Berharga</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <span className="text-slate-500 text-sm font-medium">Kepercayaan Riset</span>
                  <span className="font-mono font-bold text-blue-600 text-sm">99.98%</span>
                </div>
              </div>

              {/* Kotak Rekomendasi */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 sm:p-5 text-sm text-blue-900 space-y-2">
                <div className="font-bold flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Rekomendasi Resmi</span>
                </div>
                <p className="leading-relaxed text-blue-900/90 text-xs sm:text-sm">
                  Berdasarkan temuan kami, individu yang masuk dalam kategori ini harus tidur sebelum pukul 22.30 setiap malam. Gagal melakukannya dapat menurunkan tingkat keimutan untuk sementara waktu dan memicu kekhawatiran yang tidak perlu di antara orang-orang di sekitarnya.
                </p>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-400 font-mono mb-4">
                  Terima kasih telah mendukung penelitian ilmiah.
                </p>
                <button
                  onClick={onClose}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-medium transition-colors shadow-md"
                >
                  Tutup Dossier
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}