import React, { useState } from 'react';
import { X, Volume2, RotateCcw, CheckCircle } from 'lucide-react';
import { Screen } from '../types';

interface LearningProps {
  onNavigate: (screen: Screen) => void;
}

const Learning: React.FC<LearningProps> = ({ onNavigate }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-cream font-sans relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 -z-10 pointer-events-none"></div>
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <div className="flex flex-col w-full px-6 pt-6 pb-2 z-10 relative">
        <div className="flex items-center justify-between mb-4 relative">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 transition-colors text-slate-400"
          >
            <X size={24} />
          </button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            <span className="text-sm font-bold text-slate-400 tracking-wide">正在学习：四级核心词汇</span>
          </div>
          <div className="flex items-center gap-1 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/50">
            <span className="text-xs font-bold text-violet-500">15</span>
            <span className="text-xs font-medium text-slate-400">/</span>
            <span className="text-xs font-medium text-slate-400">50</span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-pink-400 w-[30%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        </div>
      </div>

      {/* Main Card Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto z-10">
        <div className="group relative w-full aspect-[4/5] max-h-[520px] bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.15)] transition-all duration-500 ease-out transform flex flex-col overflow-hidden border border-white/60">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative flex-1 flex flex-col items-center justify-center p-8 text-center gap-8">
            <div className="flex flex-col items-center gap-3 w-full">
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-800 mb-1 font-display">
                Ethereal
              </h1>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                <button className="flex items-center justify-center size-8 rounded-full bg-white shadow-sm hover:scale-110 active:scale-95 transition-all text-violet-500">
                  <Volume2 size={18} />
                </button>
                <span className="text-lg font-medium text-slate-400 font-display">/əˈθɪriəl/</span>
              </div>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent rounded-full"></div>

            {/* Interaction Area */}
            {!revealed ? (
              <button 
                onClick={() => setRevealed(true)}
                className="w-full max-w-[200px] text-sm font-bold text-slate-400 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 hover:border-violet-500/50 hover:text-violet-500 transition-all duration-300 active:scale-95 outline-none"
              >
                点击显示释义
              </button>
            ) : (
              <div className="flex flex-col gap-4 animate-[fadeIn_0.3s_ease-out] w-full max-w-xs">
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-violet-500/10 text-violet-500 uppercase tracking-wider">adj.</span>
                    </div>
                    <p className="text-xl font-bold text-slate-700">
                      超凡脱俗的；飘渺的；轻飘的
                    </p>
                  </div>
                  <div className="relative p-3 bg-slate-50 rounded-xl border border-slate-100 text-left">
                    <p className="text-sm text-slate-500 leading-relaxed">
                      "Her ethereal beauty captivated everyone."
                    </p>
                    <p className="text-sm font-medium text-slate-600 mt-1">
                      她那超凡脱俗的美貌迷住了所有人。
                    </p>
                  </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <div className="w-full p-6 pb-10 z-10">
        <div className="flex gap-4 justify-center max-w-md mx-auto">
          <button className="flex-1 h-14 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/50 hover:bg-white transition-all active:scale-95 group backdrop-blur-sm">
            <RotateCcw size={20} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
            <span className="text-base font-bold text-slate-500 group-hover:text-slate-700 transition-colors">再看看</span>
          </button>
          <button 
             onClick={() => {
                setRevealed(false);
                // In a real app, load next word logic here
             }}
            className="flex-1 h-14 flex items-center justify-center gap-2 rounded-2xl bg-violet-500 hover:bg-violet-600 active:scale-95 transition-all shadow-lg shadow-violet-500/30 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="text-base font-bold relative z-10">记住了</span>
            <CheckCircle size={20} className="relative z-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
