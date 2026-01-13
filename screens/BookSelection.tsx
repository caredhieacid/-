import React from 'react';
import { ChevronLeft, Search, BookOpen, Users, Plus } from 'lucide-react';
import { Screen } from '../types';

interface BookSelectionProps {
    onNavigate: (screen: Screen) => void;
}

const BookSelection: React.FC<BookSelectionProps> = ({ onNavigate }) => {
    const categories = ['全部', '考研', '四六级', '雅思托福', 'GRE'];
    
    const books = [
        {
            tag: { text: '基础', color: 'green' },
            title: '四级核心词汇',
            desc: '大学英语四级考试必备高频核心词汇，科学记忆。',
            count: '4500',
            learners: '12.5w',
            bg: '#FFF4E5',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo-x8VLkkToQ1RKr0S51VgJFVJ36F05bEoAHxFj4fk-Rb8KGQjKzqdnZ4H-1-5eVzo1f3ed-lV8J2GG__dzWjyJUEcv8nXwrIHjplEHBN7YefTytIjBddBoOKZYqfuXyUt7fDm2blohH1vCWROygh92rPKsd50jYpRABkHV9epHEYot41GgNitOVCs6msJyvXlk40K7nTvy7hJjXVluUagrjy7CK6ZL1HtpF_MF_-k_08ETsf9b13ntcE-j9IjJip7ShtgYkc4ADgM'
        },
        {
            tag: { text: '进阶', color: 'blue' },
            title: '考研英语大纲词汇',
            desc: '覆盖考研英语一/二所有大纲词汇，精准释义。',
            count: '5500',
            learners: '8.9w',
            bg: '#E5F1FF',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwo3jtPdjHCIXtfOpaW-15-wYaKhWnW9sgWv6SCFBwqHUilMAY2xphJd5sW8p3-lXP5rxvBwTo7glFcGwQd_hJSk2OOijHXtLBBTWQX9jMvX0HwGLaSTvm5Q5CvOHtfYuuouDslXot9A1WxqTPLmKj9LOHwMXOYDEVDMvi5pJWeHEIY24mRaD0Bh6kB_QXrqM25HnZfY-IgtlHJqn7-F6Goeu4iqRdA0NTgg1f3X_vXEWDPA79XRPmr5v234SCf-Bia6T1VOpt4LwG'
        },
        {
            tag: { text: '留学', color: 'red' },
            title: '雅思真题高频词',
            desc: '源自历年雅思真题，听力阅读写作口语全面覆盖。',
            count: '3800',
            learners: '5.2w',
            bg: '#FFE5E5',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf6Hz_JsblMCL5ZGn-yyQN5MwQsSkXd4Qc9CP-YKf6n9hAYNloaSVIIHZuvcbOroaynZOI0BprAabs33x1yYPhAw6OE12fMX8EQjwu7XjmfYDtsgkwgLIgoH3iSlnBw7dAIbSS2jgV5xLPFI1F9khl0gb75e5LrRaYGnlytOmuRY0gxAA34egx3yNmThD6pEfN_YWlzzQy4LO1JsL_N8qKUWUAFYVumsm-_JzPWGRHs1dOJN8oGn7Yx4LEgjN_kBuEkQzhSe-2gyz3'
        },
         {
            tag: { text: '进阶', color: 'teal' },
            title: '六级冲刺词汇',
            desc: '六级考试难点词汇，助力突破高分瓶颈。',
            count: '2100',
            learners: '6.7w',
            bg: '#E5FFF4',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOlMtMdL55qaRUwzP09HB0fWxoGdqrLBzm0pgt6IrTNd3v9SdFaVzgUsuFThsEPIllIzRHK0UcZkXT8jgZAJjzzv6pfQut_MgDbUU3lTxH6hsPkBvywOdhWKFqbZq_Tls3Dpl4SNWPbDPY3AuyxVrc_EpgwvJGK5q1MJJI-RvFYYsfgiFcte_b7Bm0qlVzhgmrk_Uq6awsupUuhA-vf7Tu4mdMwt0dgmSLmfcWtHXxadqE8KP3BWonb6tabBFKKaMTj9u1QOkPl7Pc'
        }
    ];

    return (
        <div className="flex-col h-full bg-[#fdfbf7] flex overflow-y-auto pb-24">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-[#fdfbf7]/90 backdrop-blur-md px-4 py-3 flex items-center justify-between">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-text-main"
                >
                    <ChevronLeft size={28} />
                </button>
                <h2 className="text-text-main text-lg font-bold leading-tight">词书选择</h2>
                <div className="size-10"></div> 
            </div>

            {/* Search */}
            <div className="px-5 py-2">
                <div className="group flex w-full items-center rounded-full bg-white shadow-sm border border-[#f0ebe5] focus-within:border-orange/50 focus-within:ring-2 focus-within:ring-orange/20 transition-all duration-300 h-12">
                    <div className="flex items-center justify-center pl-4 pr-2 text-orange/60">
                        <Search size={20} />
                    </div>
                    <input className="flex-1 bg-transparent border-none text-base text-text-main placeholder:text-gray-400 focus:ring-0 p-0 pr-4 h-full outline-none" placeholder="搜索想要学习的词书" />
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-3 px-5 py-4 overflow-x-auto no-scrollbar mask-gradient-right">
                {categories.map((cat, idx) => (
                    <button 
                        key={idx}
                        className={`flex h-9 min-w-fit shrink-0 items-center justify-center gap-x-2 rounded-full px-5 active:scale-95 transition-all
                            ${idx === 0 
                                ? 'bg-orange text-white shadow-soft shadow-orange/30 font-bold' 
                                : 'bg-white border border-[#f0ebe5] text-gray-500 font-medium hover:bg-orange/5'}`}
                    >
                        <p className="text-sm leading-normal">{cat}</p>
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="flex-1 px-5 flex flex-col gap-5">
                {books.map((book, idx) => (
                     <div key={idx} className="group relative flex flex-col sm:flex-row items-stretch gap-4 rounded-xl bg-white p-3 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange/20 cursor-pointer">
                        {/* Cover */}
                        <div className="relative w-full sm:w-28 h-32 sm:h-auto shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: book.bg }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${book.img}')` }}></div>
                                <div className={`absolute inset-0 bg-${book.tag.color}-500/10 mix-blend-overlay`}></div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-between py-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className={`inline-block px-2 py-0.5 mb-2 rounded-md bg-${book.tag.color}-100 text-${book.tag.color}-700 text-[10px] font-bold tracking-wide uppercase`}>
                                        {book.tag.text}
                                    </span>
                                    <h3 className="text-text-main text-lg font-bold leading-tight">{book.title}</h3>
                                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{book.desc}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <BookOpen size={14} />
                                        <span>{book.count} 词</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-orange text-xs font-medium">
                                        <Users size={14} />
                                        <span>{book.learners} 人在学</span>
                                    </div>
                                </div>
                                <button className="flex size-9 items-center justify-center rounded-full bg-orange text-white shadow-lg shadow-orange/30 hover:bg-orange/90 active:scale-90 transition-all">
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default BookSelection;
