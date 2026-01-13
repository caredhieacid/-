import React from 'react';
import { Settings, Flame, CheckCircle, Calendar, Play } from 'lucide-react';
import { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const weekDays = [
    { day: '周一', status: 'done' },
    { day: '周二', status: 'done' },
    { day: '周三', status: 'today' },
    { day: '周四', status: 'pending' },
    { day: '周五', status: 'pending' },
    { day: '周六', status: 'pending' },
    { day: '周日', status: 'pending' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto pb-32 no-scrollbar bg-cream">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-14 ring-4 ring-white shadow-soft transition-transform group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKSsMKqorDhOAJ9nLIxDFiIDdH1N9QIkvhX-j2F_Grt11w5XPdcQlnh9N9KGwlPGQci-FBltlvgmZfkUWEwdgMC880mP9YovCTOy43fUAVwVmA6Lx97ofAdJlL0cxwD_2ExowTZjrrqN2V6-AtsT4yl4IqP1ZXm4W-dUXjXTP1-A3mDpF_A_AHxyLQ7mwDtfFxxkYnmgEgygjBZjQPbs4GaBHH4y4ldk20N7kQMXb8XPcfA3b95vCfe3DRjLc5q-IgoVg_JGa1qoIi")' }}
            ></div>
            <div className="absolute bottom-0 right-0 size-4 bg-mint border-[3px] border-cream rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">欢迎回来</span>
            <span className="text-xl font-black text-text-main tracking-tight">张同学</span>
          </div>
        </div>
        <button className="flex items-center justify-center size-12 rounded-full bg-white text-gray-600 shadow-soft hover:bg-gray-50 transition-all active:scale-95">
          <Settings size={20} />
        </button>
      </div>

      {/* Progress Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-tight text-text-main">今日进度</h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fff0f0] rounded-full text-[#ffb7b2] shadow-sm border border-red-100">
            <Flame size={20} className="fill-current animate-pulse" />
            <span className="text-sm font-bold">已坚持 12 天</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 font-medium ml-1">积跬步，至千里，加油！</p>
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col items-center justify-center py-2">
        <div className="relative size-72 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-8 bg-mint/20 rounded-full blur-2xl animate-pulse"></div>
          <svg className="size-full -rotate-90 transform drop-shadow-xl" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle cx="50" cy="50" r="42" fill="transparent" stroke="white" strokeWidth="8" strokeLinecap="round" />
            {/* Progress Circle (20/50 = 40%) */}
            {/* Circumference = 2 * PI * 42 ≈ 264 */}
            {/* Dashoffset = 264 - (264 * 0.4) = 158.4 */}
            <circle 
              cx="50" cy="50" r="42" 
              fill="transparent" 
              stroke="#88c9b6" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeDasharray="264" 
              strokeDashoffset="158.4" 
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-black text-text-main tracking-tighter drop-shadow-sm">
              20<span className="text-3xl text-gray-300 font-bold">/50</span>
            </span>
            <span className="text-sm font-bold text-mint uppercase tracking-widest mt-2 bg-mint/10 px-3 py-1 rounded-full">
              今日目标
            </span>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-soft border border-gray-50 px-4 py-1.5 rounded-full flex items-center gap-2 transform translate-y-2">
            <CheckCircle size={16} className="text-mint fill-current" />
            <span className="text-xs font-bold text-gray-600">每日打卡</span>
          </div>
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="flex flex-col gap-5 bg-white p-6 rounded-3xl shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-text-main flex items-center gap-2">
            <Calendar className="text-mint" size={24} />
            本周概览
          </h3>
          <button className="text-mint text-sm font-bold hover:opacity-80 transition-opacity">查看更多</button>
        </div>
        <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {weekDays.map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-3 min-w-[3rem]">
              {day.status === 'done' && (
                <div className="size-11 rounded-full bg-mint/10 flex items-center justify-center text-mint font-bold shadow-inner">
                  <span className="material-symbols-outlined text-lg font-bold">✓</span>
                </div>
              )}
              {day.status === 'today' && (
                <div className="size-11 rounded-full bg-mint text-white shadow-lg shadow-mint/30 flex items-center justify-center font-black text-sm ring-4 ring-mint/20 transform scale-110">
                  今
                </div>
              )}
              {day.status === 'pending' && (
                <div className="size-11 rounded-full bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 font-bold">
                  {day.day.charAt(1)}
                </div>
              )}
              <span className={`text-xs font-bold ${day.status === 'today' ? 'text-mint' : 'text-gray-400'}`}>
                {day.status === 'today' ? '今天' : day.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div 
          onClick={() => onNavigate('stats')}
          className="p-5 rounded-3xl bg-white shadow-soft border border-transparent hover:border-mint/20 transition-colors flex flex-col justify-between h-32 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-4 -top-4 size-20 bg-blue-50 rounded-full group-hover:scale-110 transition-transform"></div>
          <span className="material-symbols-outlined text-[#8AB4F8] text-3xl mb-1 z-10 font-medium">school</span>
          <div className="z-10">
            <span className="text-2xl font-black text-text-main block">1,240</span>
            <span className="text-xs text-gray-400 font-bold">累计单词</span>
          </div>
        </div>
        <div 
           onClick={() => onNavigate('stats')}
          className="p-5 rounded-3xl bg-white shadow-soft border border-transparent hover:border-mint/20 transition-colors flex flex-col justify-between h-32 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-4 -top-4 size-20 bg-green-50 rounded-full group-hover:scale-110 transition-transform"></div>
          <span className="material-symbols-outlined text-mint text-3xl mb-1 z-10 font-medium">trending_up</span>
          <div className="z-10">
            <span className="text-2xl font-black text-text-main block">94%</span>
            <span className="text-xs text-gray-400 font-bold">正确率</span>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <button 
        onClick={() => onNavigate('learning')}
        className="w-full flex items-center justify-center gap-3 bg-mint hover:bg-mint-dark text-white text-lg font-bold py-5 rounded-3xl shadow-lg shadow-mint/30 transform transition active:scale-95 group mt-2"
      >
        <Play size={24} className="fill-current group-hover:animate-pulse" />
        开始学习
      </button>
      <div className="h-6"></div>
    </div>
  );
};

export default Dashboard;
