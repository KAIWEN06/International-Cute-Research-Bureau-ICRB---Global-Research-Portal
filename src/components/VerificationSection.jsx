import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function VerificationSection({ onOpenVerify }) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Pembersihan Biometrik Akhir</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
            Siap Memverifikasi Subjek?
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Mulai protokol verifikasi otomatis ICRB untuk menjalankan pemindaian wajah saraf mendalam dan mengonfirmasi status klasifikasi resmi.
          </p>

          <div>
            <button
              onClick={onOpenVerify}
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-1"
            >
              <ShieldCheck className="w-6 h-6" />
              <span>Verifikasi Subjek</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}