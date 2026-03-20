/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Calendar,
  Trophy,
  Target,
  Smartphone,
  TrendingUp,
  DollarSign,
  PieChart as PieChartIcon,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Zap,
  Dumbbell,
  Search,
  Linkedin,
  Mail
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell as BarCell
} from 'recharts';

// --- Types ---
interface SlideProps {
  isActive: boolean;
}

// --- Components ---

const Slide1: React.FC<SlideProps> = () => (
  <div className="relative h-full flex flex-col items-center justify-center bg-black overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 3, delay: 1 }}
      className="absolute inset-0"
    >
      <img
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
        alt="Frustrated player"
        className="w-full h-full object-cover grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/80" />
    </motion.div>

    <div className="z-10 text-center px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ delay: 2.5, duration: 1.5, ease: "easeOut" }}
        className="mb-12"
      >
        {/* <img 
          src="/thanggo.png" 
          alt="Thanggo Logo" 
          className="w-32 h-auto drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        /> */}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }}
        className="text-3xl md:text-6xl font-display font-extralight tracking-[0.2em] text-zinc-500 mb-4 italic uppercase"
      >
        Something is not right here
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "4rem" }}
        transition={{ delay: 2, duration: 1 }}
        className="h-0.5 bg-emerald-500 rounded-full"
      />
    </div>

    <motion.div
      animate={{
        opacity: [0.1, 0.2, 0.1],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
    />
  </div>
);

// ... (Keep Slide 2 to Slide 7 exactly as you have them) ...
const Slide2: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col items-center justify-center bg-zinc-900 p-8 md:p-16">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-emerald-500 font-display font-semibold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
          Sports is growing, but <span className="text-zinc-500 italic">access is broken.</span>
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertCircle className="text-red-500 w-6 h-6" />
            </div>
            <p className="text-zinc-400 text-lg">Constant calling, no visibility on slots, and manual coordination.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertCircle className="text-red-500 w-6 h-6" />
            </div>
            <p className="text-zinc-400 text-lg">Fragmented information across dozens of platforms and WhatsApp groups.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { label: "Youth play sports daily", value: "56.3%", icon: Users, color: "text-emerald-500" },
          { label: "Struggle to book", value: "84.4%", icon: Calendar, color: "text-orange-500" },
          { label: "Face Double booking issues", value: "43.8%", icon: AlertCircle, color: "text-red-500" },
          { label: "Owners per Registered User", value: "54.5%", icon: Zap, color: "text-blue-500" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-2xl flex flex-col items-center text-center"
          >
            <stat.icon className={`${stat.color} w-8 h-8 mb-4`} />
            <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Slide3: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col items-center justify-center bg-zinc-950 p-8 md:p-16 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full" />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center z-10 mb-16"
    >
      <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
        THANGGO
      </h2>
      <p className="text-xl md:text-3xl font-display text-zinc-400 font-light tracking-wide">
        One platform for all sports.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl z-10">
      {[
        { title: "Book Venues", icon: MapPin },
        { title: "Real-time Slots", icon: Zap },
        { title: "Coaching & Gyms", icon: Dumbbell },
        { title: "Tournaments", icon: Trophy },
        { title: "Matchmaking", icon: Users },
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-default"
        >
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
            <feature.icon className="text-emerald-400 w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold text-center text-zinc-200">{feature.title}</h3>
        </motion.div>
      ))}
    </div>
  </div>
);

const Slide4: React.FC<SlideProps> = () => {
  const data = [
    { name: '2022', value: 40 },
    { name: '2023', value: 65 },
    { name: '2024', value: 85 },
    { name: '2025', value: 110 },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center bg-zinc-900 p-8 md:p-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-blue-500 font-display font-semibold tracking-widest uppercase text-sm mb-4 block">Why Now?</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            The Perfect <span className="text-emerald-500 italic">Storm.</span>
          </h2>
          <div className="space-y-8">
            {[
              { title: "Rising Fitness Culture", desc: "Post-pandemic focus on health and community sports.", icon: TrendingUp },
              { title: "Youth Engagement", desc: "Gen Z and Alpha seeking real-world social connections.", icon: Users },
              { title: "Smartphone Growth", desc: "Mobile-first booking is no longer an option, it's expected.", icon: Smartphone },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <item.icon className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-zinc-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-800/30 p-8 rounded-3xl border border-zinc-700/50 h-[400px] flex flex-col">
          <h3 className="text-zinc-400 uppercase text-xs font-bold tracking-widest mb-8">Market Engagement Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} dy={10} />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <BarCell key={`cell-${index}`} fill={index === data.length - 1 ? '#10b981' : '#3b82f6'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const Slide5: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col items-center justify-center bg-zinc-950 p-8 md:p-16">
    <div className="max-w-6xl w-full">
      <div className="text-center mb-16">
        <span className="text-orange-500 font-display font-semibold tracking-widest uppercase text-sm mb-4 block">Business Model</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold">Monetizing the <span className="text-orange-500">Game.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "15% Commission", desc: "On every venue booking through the platform.", icon: Smartphone, highlight: "Booking Fee" },
          { title: "10% Coaching Fee", desc: "Revenue share from certified coaching sessions.", icon: Dumbbell, highlight: "Service Share" },
          { title: "Sponsored Listings", desc: "Priority placement for venues and sports brands.", icon: Zap, highlight: "Ad Revenue" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl flex flex-col items-center text-center group hover:border-orange-500/50 transition-all"
          >
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <item.icon className="text-orange-500 w-8 h-8" />
            </div>
            <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">{item.highlight}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-zinc-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-center"
      >
        {/* <p className="text-zinc-400 italic">"Projected $2.4M ARR by Year 2 based on current venue validation."</p> */}
      </motion.div>
    </div>
  </div>
);

const Slide6: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col items-center justify-center bg-zinc-900 p-8 md:p-16">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <div>
          <span className="text-emerald-500 font-display font-semibold tracking-widest uppercase text-sm mb-4 block">Traction</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Validated & <span className="text-emerald-500">Ready.</span></h2>
          <div className="flex gap-4">
            <div className="bg-zinc-800 px-4 py-2 rounded-full border border-zinc-700 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500 w-4 h-4" />
              <span className="text-sm font-semibold">33 User Interviews</span>
            </div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full border border-zinc-700 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500 w-4 h-4" />
              <span className="text-sm font-semibold">6 Venues Signed</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-zinc-400 uppercase text-xs font-bold tracking-widest">GTM Strategy</h3>
          {[
            { title: "Social Media Marketing", desc: "Hyper-local targeting of sports enthusiasts." },
            { title: "Campus Targeting", desc: "Ambassador programs in top universities." },
            { title: "Tournaments", desc: "Hosting ThangGo Cups to drive app downloads." },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <div>
                <span className="font-bold">{item.title}</span>
                <span className="text-zinc-500 ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <img
          src="go.jpeg"
          alt="Sports action"
          className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -right-6 bg-emerald-500 p-8 rounded-3xl shadow-xl">
          <Trophy className="text-white w-12 h-12" />
        </div>
      </div>
    </div>
  </div>
);

const Slide7: React.FC<SlideProps> = () => {
  const data = [
    { name: 'Digital Marketing', value: 30, color: '#10b981' },
    { name: 'Tournaments', value: 35, color: '#3b82f6' },
    { name: 'Development', value: 20, color: '#f59e0b' },
    { name: 'Operations', value: 15, color: '#6366f1' },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center bg-zinc-950 p-8 md:p-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-emerald-500 font-display font-semibold tracking-widest uppercase text-sm mb-4 block">Use of Funds</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Fueling the <span className="text-emerald-500 italic">Growth.</span>
          </h2>
          <div className="space-y-4">
            {data.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <span className="text-zinc-400 font-display font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[450px] relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={160}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px', color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-zinc-500 uppercase text-xs font-bold tracking-widest">Total Seed</span>
            <span className="text-4xl font-display font-bold">NU.500,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* --- NEW TEAM SLIDE --- */ }
const SlideTeam: React.FC<SlideProps> = () => {
  const team = [
    {
      name: "Khasel Jugney Wangchuk",
      role: "CEO & Vision",
      image: "khasel.jpeg"
    },
    {
      name: "Ngawang Gyeltshen",
      role: "Chief Technology Officer",
      image: "Ng.jpeg"
    },
    {
      name: "Kezang Choden",
      role: "Head of Digital Marketing & Growth",
      image: "/kelz.jpg"
    },
    {
      name: "Kuenzang Wangchuk",
      role: "Head of Finance & Operations",
      image: "k2.jpeg"
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center bg-zinc-900 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-display font-semibold tracking-widest uppercase text-sm mb-4 block">The Team</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Driven by <span className="text-zinc-500 italic">Passion.</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-3xl border-2 border-zinc-800 group-hover:border-emerald-500 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <Linkedin className="w-5 h-5 text-white cursor-pointer hover:text-emerald-400" />
                  <Mail className="w-5 h-5 text-white cursor-pointer hover:text-emerald-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Slide9: React.FC<SlideProps> = () => (
  <div className="relative h-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
    <div className="absolute inset-0 opacity-40">
      <img
        src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
        alt="Sports stadium"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
    </div>

    <div className="z-10 text-center max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl md:text-2xl font-display text-zinc-400 mb-8 italic">
          “Next time someone asks…”
        </p>
        <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tight">
          Ground available?
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <span className="text-2xl md:text-4xl text-zinc-500">→</span>
          <div className="px-12 py-6 bg-emerald-500 rounded-full shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <span className="text-4xl md:text-6xl font-display font-black text-black tracking-tighter">
              The answer is ThangGo
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-24 flex flex-col items-center"
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">Contact for Investment</p>
        <p className="text-emerald-400 font-display font-semibold">+975 17979996</p>
      </motion.div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9; // UPDATED FROM 8 TO 9

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slides = [
    Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, SlideTeam, Slide9 // ADDED SlideTeam here
  ];

  return (
    <div className="h-screen w-screen bg-black flex flex-col relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {React.createElement(slides[currentSlide], { isActive: true })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50">
        <div className="text-zinc-500 font-display font-bold text-sm mr-4">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
        <button
          onClick={prevSlide}
          className="p-3 bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-700 rounded-full transition-all text-zinc-400 hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all text-black shadow-lg shadow-emerald-500/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Top Corner Logo Overlay */}
      {currentSlide !== 0 && currentSlide !== 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-8 left-8 z-50 flex items-center gap-3"
        >
          <img
            src="/thanggo.png"
            alt="Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
          />
          <span className="font-display font-black tracking-tighter text-xl">THANGGO</span>
        </motion.div>
      )}
    </div>
  );
}