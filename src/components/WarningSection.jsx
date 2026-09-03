import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function WarningSection() {
  return (
    <section id="recommendation" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-amber-50/70 border-2 border-amber-300 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm"
        >
          {/* Watermark Icon */}
          <div className="absolute right-4 top-4 opacity-10 text-amber-600 pointer-events-none">
            <ShieldAlert className="w-48 h-48" />
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-amber-500 text-white rounded-xl shadow-md">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">Pemberitahuan Advisory</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-900">
                Pemberitahuan Kesehatan Resmi
              </h2>
            </div>
          </div>

          <p className="text-amber-900/90 text-base sm:text-lg leading-relaxed mb-6">
            Studi jangka panjang kami menunjukkan bahwa individu dengan tingkat keimutan yang sangat tinggi harus menghindari tidur larut malam.
          </p>

          <div className="space-y-3 mb-8">
            <h4 className="font-serif font-bold text-amber-900 text-sm uppercase tracking-wider">
              Potensi efek samping meliputi:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Kantung mata",
                "Mata bengkak",
                "Penurunan energi senyum",
                "Peningkatan kekhawatiran di antara orang-orang yang peduli"
              ].map((effect, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/80 border border-amber-200 px-4 py-2.5 rounded-xl text-sm font-medium text-amber-900">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>{effect}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-amber-800 font-mono gap-2">
            <span>DITERBITKAN OLEH: BIRO RISET KEIMUTAN INTERNASIONAL</span>
            <span>KODE DIREKTIF: WRN-2026-B</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}