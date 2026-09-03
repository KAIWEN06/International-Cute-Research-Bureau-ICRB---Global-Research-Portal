import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';

export default function Abstract() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Watermark Icon */}
          <div className="absolute right-4 bottom-4 opacity-5 text-blue-900 pointer-events-none">
            <BookOpen className="w-48 h-48" />
          </div>

          <div className="flex items-center space-x-2 text-blue-600 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Research Abstract</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6">
            Executive Summary
          </h2>

          <div className="space-y-4 text-slate-700 text-base leading-relaxed text-justify">
            <p>
              Mekanisme yang mendasari respons otonom manusia terhadap pemicu tingkat keimutan tinggi masih sangat kurang dianalisis dalam literatur neurosains modern. Studi ini mendemonstrasikan melalui neuroimaging fungsional bahwa paparan vektor keimutan berdensitas tinggi memicu lonjakan dopamin seketika pada subjek di sekitarnya.
            </p>
            <p>
              Studi longitudinal terhadap ribuan partisipan menunjukkan bahwa modulasi nada vokal berskala linier dengan geometri wajah dan respons optik pengamat. Temuan ini menguraikan kerangka kerja neuro-evolusioner dasar mengenai alasan subjek tertentu mampu melewati filter pemrosesan kognitif rasional sepenuhnya.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 font-mono gap-2">
            <span>KEYWORDS: Cuteness Dynamics, Neural Smile Response, Global Aesthetics</span>
            <span>ICRB-ABST-2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}