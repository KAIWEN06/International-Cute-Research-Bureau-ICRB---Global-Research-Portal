import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Heart, Sun, Award } from 'lucide-react';

const findings = [
  {
    icon: <Smile className="w-6 h-6 text-blue-600" />,
    stat: "98.7%",
    title: "Aktivasi Senyum",
    desc: "Orang-orang tersenyum seketika setelah melihat subjek tanpa kendali sadar."
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    stat: "94%",
    title: "Dorongan Protektif",
    desc: "Partisipan melaporkan adanya insting mendadak yang kuat untuk melindungi dan mendukung subjek."
  },
  {
    icon: <Sun className="w-6 h-6 text-amber-500" />,
    stat: "89%",
    title: "Peningkatan Suasana Hati",
    desc: "Subjek secara signifikan memperbaiki suasana ruangan dan moral kelompok secara kolektif."
  },
  {
    icon: <Award className="w-6 h-6 text-indigo-600" />,
    stat: "100%",
    title: "Konsensus Pakar",
    desc: "Para peneliti independen secara bulat sepakat bahwa subjek sangat menggemaskan."
  }
];

export default function MainFindings() {
  return (
    <section id="findings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            Bukti Empiris
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-4 mb-3">
            Temuan Utama
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Evaluasi statistik ketat yang dikumpulkan melalui uji klinis internasional multi-tahap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {findings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-2">
                {item.stat}
              </div>
              <h3 className="font-serif font-semibold text-slate-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}