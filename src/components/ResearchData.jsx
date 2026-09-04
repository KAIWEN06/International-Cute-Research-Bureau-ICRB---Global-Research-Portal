import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart as PieIcon } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const sleepData = [
  { hours: '9j', cuteness: 100 },
  { hours: '8j', cuteness: 99 },
  { hours: '7j', cuteness: 95 },
  { hours: '6j', cuteness: 88 },
  { hours: '5j', cuteness: 74 },
  { hours: '4j', cuteness: 52 },
];

const complimentData = [
  { name: 'Imut', value: 25, color: '#3b82f6' },
  { name: 'Menggemaskan', value: 25, color: '#60a5fa' },
  { name: 'Lucu', value: 25, color: '#93c5fd' },
  { name: 'Cantik/Indah', value: 25, color: '#bfdbfe' },
];

export default function ResearchData() {
  return (
    <section id="research-data" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            Analitik Data
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-4 mb-3">
            Metrik Kuantitatif
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Memvisualisasikan korelasi langsung antara durasi tidur, distribusi sifat, dan metrik keimutan secara keseluruhan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Grafik 1: Jam Tidur vs Tingkat Keimutan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Jam Tidur vs. Tingkat Keimutan</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">FIG 4.1 // RETENSI NEUROLOGIS</p>
              </div>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <BarChart3 className="w-5 h-5" />
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sleepData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="hours" stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                    formatter={(value) => [`${value}%`, 'Tingkat Keimutan']}
                  />
                  <Bar dataKey="cuteness" fill="#2563eb" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Grafik 2: Probabilitas Menerima Pujian */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Probabilitas Menerima Pujian</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">FIG 4.2 // DISTRIBUSI SIFAT</p>
              </div>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <PieIcon className="w-5 h-5" />
              </div>
            </div>

            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                    formatter={(value) => [`${value}%`, 'Probabilitas']}
                  />
                  <Pie
                    data={complimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {complimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs font-medium text-slate-600">
              {complimentData.map((item, index) => (
                <div key={index} className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}