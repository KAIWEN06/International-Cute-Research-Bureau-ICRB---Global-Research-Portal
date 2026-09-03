import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Activity, Users, Clock } from 'lucide-react';

const observations = [
  {
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    code: "OBS-01",
    title: "Eskalasi Frekuensi Senyum",
    desc: "Para peneliti mengamati bahwa individu yang sangat menggemaskan secara tidak sengaja meningkatkan frekuensi tersenyum di sekitar mereka hingga lebih dari 340% dalam radius 5 meter."
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    code: "OBS-02",
    title: "Durasi Senyum Diperpanjang",
    desc: "Rata-rata durasi senyum di antara pengamat meningkat selama 12,6 detik ketika melakukan percakapan langsung atau kontak mata."
  },
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    code: "OBS-03",
    title: "Reaksi Vokal Spontan",
    desc: "Subjek memicu reaksi fonetik 'Awww' yang spontan dan tak disengaja pada 96% pengamat klinis selama uji coba buta (blind trial)."
  },
  {
    icon: <FileCheck className="w-5 h-5 text-blue-600" />,
    code: "OBS-04",
    title: "Dampak Produktivitas Kerja",
    desc: "Produktivitas kantor anjlok sebesar 91% di ruangan sebelah karena para partisipan terus memandangi subjek alih-alih bekerja."
  }
];

export default function ObservationReport() {
  return (
    <section id="observations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            Catatan Lapangan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-4 mb-3">
            Laporan Observasi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Catatan resmi yang disusun oleh peneliti senior utama selama pemantauan perilaku langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {observations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.code}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>OBSERVASI TERVERIFIKASI</span>
                <span>UNIT LAPANGAN ICRB</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}