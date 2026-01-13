import React from 'react';
import { ArrowLeft, MoreHorizontal, School, Flame, Target, TrendingUp, Play } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { Screen } from '../types';

interface StatsProps {
  onNavigate: (screen: Screen) => void;
}

const data = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 55 },
  { name: 'Thu', value: 40 },
  { name: 'Fri', value: 65 },
  { name: 'Sat', value: 85 },
  { name: 'Sun', value: 60 },
];

const Stats: React.FC<StatsProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#f6f7f8] text-slate-900 pb-24">
       {/* Header */}
       <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-20 bg-[#f6f7f8]/80 backdrop-blur-md">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft size={24} className="text-slate-900" />
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">学习成就</h2>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
          <MoreHorizontal size={24} className="text-slate-900" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Key Stats Row */}
        <div className="flex w-full gap-3 px-4 py-4 overflow-x-auto no-scrollbar">
            <div className="flex min-w-[110px] flex-1 flex-col gap-1 rounded-2xl bg-white p-4 items-start shadow-sm border border-transparent">
                <div className="flex items-center gap-2 mb-1">
                    <School size={20} className="text-blue" />
                </div>
                <p className="text-3xl font-extrabold leading-tight tracking-tight">412</p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">累计单词</p>
            </div>
            <div className="flex min-w-[110px] flex-1 flex-col gap-1 rounded-2xl bg-white p-4 items-start shadow-sm border border-transparent">
                <div className="flex items-center gap-2 mb-1">
                    <Flame size={20} className="text-orange-500" />
                </div>
                <p className="text-3xl font-extrabold leading-tight tracking-tight">12</p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">连续打卡</p>
            </div>
            <div className="flex min-w-[110px] flex-1 flex-col gap-1 rounded-2xl bg-white p-4 items-start shadow-sm border border-transparent">
                <div className="flex items-center gap-2 mb-1">
                    <Target size={20} className="text-emerald-500" />
                </div>
                <p className="text-3xl font-extrabold leading-tight tracking-tight">85%</p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">正确率</p>
            </div>
        </div>

        {/* Growth Chart */}
        <div className="px-4 py-2">
            <div className="flex items-center justify-between mb-4 mt-2">
                <h2 className="text-xl font-bold leading-tight">成长轨迹</h2>
                <button className="bg-blue/10 text-blue px-3 py-1 rounded-full text-xs font-bold hover:bg-blue/20 transition-colors">近30天</button>
            </div>
            <div className="flex w-full flex-col gap-2 rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-slate-500 text-sm font-medium leading-normal mb-1">词汇量</p>
                        <p className="text-blue text-4xl font-black leading-none tracking-tight">+45</p>
                        <p className="text-orange-500/90 text-[11px] font-bold mt-2">你已经超越了 90% 的同学</p>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg self-start">
                        <TrendingUp size={16} className="text-emerald-600" />
                        <p className="text-emerald-600 text-xs font-bold">+12%</p>
                    </div>
                </div>
                
                {/* Recharts Area */}
                <div className="relative w-full h-[180px] mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2b8cee" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#2b8cee" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" stroke="#2b8cee" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                            {/* Hidden YAxis to maintain scale but keep clean */}
                            <YAxis hide domain={[0, 100]} /> 
                        </AreaChart>
                    </ResponsiveContainer>
                    
                     {/* Manual Day Labels matching design */}
                     <div className="flex justify-between mt-2 px-2">
                         {['周一','周二','周三','周四','周五','周六','周日'].map(d => (
                             <p key={d} className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{d}</p>
                         ))}
                     </div>
                </div>
            </div>
        </div>

        {/* Badges */}
        <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold leading-tight">成就勋章</h2>
                <a className="text-blue text-sm font-bold hover:underline" href="#">查看全部</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* Badge 1 */}
                <div className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm overflow-hidden transition-transform hover:scale-[1.02] active:scale-95">
                    <div className="absolute top-0 right-0 p-3">
                        <div className="size-2 rounded-full bg-blue"></div>
                    </div>
                    <div className="h-20 w-20 relative">
                        <img className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMIJgkuBYiDSZuqyrMihvuvQdnXUTB__0YBeR3SGhjGD6Ew1Iw7Fc3AzbpSk5d_aomc8MwMuzlLbXV-ybjz3uKvtzFXZlcrBjTHEibzfzyB8vFOOYgbkpvRGwOnwm4ltPfoAMFnei5iZcU5ImDNbB4XtziIqY8b9Eu69DWq6l7xGejdAccBjxHzXdotev_o_yu0bEY2YRxbLEDorN5hpFGRUDVuSu9j277VLP16e5-5zWL-ePyJ-gpkURoIfXPlODtNcEXzm2uFlyT" alt="Flame badge" />
                        <div className="absolute inset-0 rounded-full ring-4 ring-orange-100"></div>
                    </div>
                    <div>
                        <p className="text-slate-900 text-base font-bold leading-tight">坚持不懈</p>
                        <p className="text-slate-500 text-xs font-medium mt-1">昨日解锁</p>
                    </div>
                </div>
                 {/* Badge 2 */}
                 <div className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm overflow-hidden transition-transform hover:scale-[1.02] active:scale-95">
                    <div className="h-20 w-20 relative">
                        <img className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX-Ma6cqxWth3lqUku-eUZtriaw8RnUdyMVLgmBXwQIEcY4F05BTrSvu3zpOQ15Vf688XcrsKbhulOAU8UdXUNloSGZ8_zskSeuLaYZS7QhGoic-xE7hp3H2CImAivXQaIhcsb3Z8llTiSOrXnNhPuJZ1fEcGb_qb5Esbx8r2o70cJHWAvtBFPBB7PnY51Fp-BOjOmbqpHnaaKMK6Af0WmJL-f6Hp2u5OrZjAt8SocAVg1xdUzEzfMM0iz0h8578fG6fwzV_0VvcWT" alt="Sun badge" />
                        <div className="absolute inset-0 rounded-full ring-4 ring-yellow-100"></div>
                    </div>
                    <div>
                        <p className="text-slate-900 text-base font-bold leading-tight">初露锋芒</p>
                        <p className="text-slate-500 text-xs font-medium mt-1">完成晨间学习</p>
                    </div>
                </div>
                 {/* Badge 3 (Full width) */}
                 <div className="col-span-2 relative flex flex-row items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-transform hover:scale-[1.01]">
                    <div className="h-16 w-16 relative shrink-0">
                         <img className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfYAnofLe6OeKOZixPOQIQ2Dl-NA2oPr1vWhotOmVk-8y4DdAp5WCCGcQUTXvsrk0WEQ1qfO13BzEVuRcfJ-Lyim2is8G0nUzhtWenvU3DupyRgfkCFsJa4EvXZ8peN47Pjv_95usPs6QNpa5QIcpuXcem797kCsjiUnq1vXadsClm-X4VC9HqRhR8DsG0WsOEA0_TeSTvV2iNeAnRTwZyzuacdVU2lD3EB2UG9q4PAtrMGNDXIbkpK9Y48FO5u9UsZygIkwwZv-5t" alt="Book badge" />
                         <div className="absolute inset-0 rounded-full ring-4 ring-blue-100"></div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-slate-900 text-base font-bold leading-tight">词汇大师</p>
                            <p className="text-blue text-xs font-bold">412/500</p>
                        </div>
                        <p className="text-slate-500 text-xs font-medium mb-3">累计学习 500 个新单词</p>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue rounded-full w-[82%]"></div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

      </div>

       {/* Floating Action */}
       <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30">
            <button className="bg-blue text-white h-14 px-8 rounded-full shadow-lg shadow-blue/30 flex items-center gap-3 hover:bg-blue-600 transition-all active:scale-95">
                <Play size={24} className="fill-current" />
                <span className="font-bold text-lg">继续学习</span>
            </button>
        </div>
    </div>
  );
};

export default Stats;
