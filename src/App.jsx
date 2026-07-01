import React, { useState, useEffect } from 'react'

function App() {
  // State management
  const [waterCount, setWaterCount] = useState(2) // in cups (250ml each)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [heartRate, setHeartRate] = useState(72)
  const [score, setScore] = useState(65)
  const [goals, setGoals] = useState([
    { id: 1, text: '10.000 Adım At', completed: false, value: 15 },
    { id: 2, text: '2 Litre Su İç', completed: false, value: 10 },
    { id: 3, text: '7-8 Saat Uyu', completed: true, value: 20 },
    { id: 4, text: '30 Dk Egzersiz Yap', completed: false, value: 15 },
    { id: 5, text: '5 Dk Nefes Egzersizi', completed: false, value: 10 },
  ])
  const [userName] = useState('Mehmet')

  // Simulate heart rate change for micro-animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => {
        const diff = Math.floor(Math.random() * 5) - 2
        const next = prev + diff
        return Math.max(60, Math.min(100, next))
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Calculate score based on goals completed
  useEffect(() => {
    const baseScore = 40 // Starting base score
    const completedScore = goals.reduce((acc, goal) => acc + (goal.completed ? goal.value : 0), 0)
    
    // Additional points for water intake
    const waterPoints = Math.min(30, waterCount * 3)
    setScore(Math.min(100, baseScore + completedScore + waterPoints))
  }, [goals, waterCount])

  const toggleGoal = (id) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    )
  }

  // Water calculations
  const waterGoal = 8 // cups
  const waterProgress = Math.min(100, (waterCount / waterGoal) * 100)

  return (
    <div className="flex min-h-screen bg-[#080711] text-slate-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-20 md:w-64 bg-[#0d0c1e]/60 border-r border-white/5 backdrop-blur-xl flex flex-col items-center md:items-stretch p-4 md:p-6 transition-all duration-300 z-20">
        <div className="flex items-center gap-3 mb-10 mt-2 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20 animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="hidden md:block font-['Outfit'] font-bold text-xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Vitality
          </span>
        </div>

        <nav className="flex-1 w-full space-y-2">
          <button
            id="nav-dashboard"
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center justify-center md:justify-start gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 border border-fuchsia-500/20 text-fuchsia-400'
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
            }`}
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
            </svg>
            <span className="hidden md:block font-medium text-sm">Panel</span>
          </button>

          <button
            id="nav-analytics"
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center justify-center md:justify-start gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 border border-fuchsia-500/20 text-fuchsia-400'
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
            }`}
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="hidden md:block font-medium text-sm">Analizler</span>
          </button>

          <button
            id="nav-settings"
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center justify-center md:justify-start gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 border border-fuchsia-500/20 text-fuchsia-400'
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
            }`}
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="hidden md:block font-medium text-sm">Ayarlar</span>
          </button>
        </nav>

        {/* User Card in Sidebar */}
        <div className="w-full bg-white/5 border border-white/5 p-3 rounded-2xl flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 rounded-xl bg-[#1b1935] flex items-center justify-center font-bold text-fuchsia-400 border border-fuchsia-500/20">
            {userName[0]}
          </div>
          <div className="hidden md:block">
            <h4 className="text-xs text-slate-400 font-medium">Hoş Geldiniz</h4>
            <p className="text-sm font-bold font-['Outfit'] text-slate-200">{userName}</p>
          </div>
        </div>
      </aside>

      {/* Main Panel Area */}
      <main className="flex-1 min-w-0 p-6 md:p-10 flex flex-col space-y-8 overflow-y-auto">
        
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-['Outfit'] font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Zindelik Paneli
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Bugün kendinizi harika hissetmek için bir adım daha atın.
            </p>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-slate-400 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Cihaz Bağlı
            </div>
            
            <button 
              id="btn-sync" 
              className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 text-white font-semibold text-sm px-5 py-2.5 rounded-2xl shadow-lg shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 active:scale-95 transition-all duration-300"
            >
              Senkronize Et
            </button>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Key Stats Dashboard */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Heart Rate Card */}
                <div className="relative overflow-hidden bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl group hover:border-fuchsia-500/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-full blur-2xl group-hover:bg-fuchsia-500/10 transition-all duration-500"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-400">Nabız</span>
                    <div className="w-10 h-10 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                      <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-['Outfit'] font-bold text-4xl text-slate-100 tracking-tight">
                      {heartRate}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">BPM</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                      Normal
                    </span>
                    <span className="text-xs text-slate-400">Dinlenme halindeki nabız</span>
                  </div>
                </div>

                {/* Steps/Activity Card */}
                <div className="relative overflow-hidden bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500"></div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-400">Adım Sayısı</span>
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-['Outfit'] font-bold text-4xl text-slate-100 tracking-tight">
                      7,842
                    </span>
                    <span className="text-xs font-semibold text-slate-400">/ 10,000 Adım</span>
                  </div>

                  <div className="mt-4">
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-slate-400">Kalan: 2,158 adım</span>
                      <span className="text-xs font-bold text-cyan-400">78%</span>
                    </div>
                  </div>
                </div>

                {/* Sleep Cycles Card */}
                <div className="relative overflow-hidden bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl group hover:border-indigo-500/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all duration-500"></div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-400">Uyku Kalitesi</span>
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-['Outfit'] font-bold text-4xl text-slate-100 tracking-tight">
                      7s 45dk
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Derin Uyku</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium">
                      %88 Verimlilik
                    </span>
                    <span className="text-xs text-slate-400">Dün geceye göre daha iyi</span>
                  </div>
                </div>

                {/* Calorie Burn Card */}
                <div className="relative overflow-hidden bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl group hover:border-orange-500/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500"></div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-400">Yakılan Kalori</span>
                    <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-['Outfit'] font-bold text-4xl text-slate-100 tracking-tight">
                      420
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Kcal</span>
                  </div>

                  <div className="mt-4">
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-slate-400">Hedef: 700 Kcal</span>
                      <span className="text-xs font-bold text-orange-400">60%</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Water Hydration Tracker (Interactive UI) */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#0d0c1e]/40 to-[#12102f]/40 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-4 text-center md:text-left">
                    <div>
                      <h3 className="font-['Outfit'] font-bold text-xl text-slate-100">
                        Sıvı Tüketimi Takibi
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        Sağlıklı kalmak ve enerjinizi korumak için gün boyunca su tüketin.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <button
                        id="btn-add-water"
                        onClick={() => setWaterCount(prev => Math.min(waterGoal, prev + 1))}
                        disabled={waterCount >= waterGoal}
                        className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/10 active:scale-95 transition-all duration-300"
                      >
                        + 250ml Su Ekle
                      </button>
                      <button
                        id="btn-reset-water"
                        onClick={() => setWaterCount(0)}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold px-4 py-2.5 rounded-xl border border-white/5 transition-all duration-300"
                      >
                        Sıfırla
                      </button>
                    </div>

                    <div className="text-xs text-slate-400">
                      Günlük Hedef: <span className="font-bold text-slate-200">8 Bardak (2 Litre)</span>
                    </div>
                  </div>

                  {/* Water Visual progress Indicator */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-24 h-36 border-4 border-blue-400/40 rounded-b-3xl rounded-t-lg relative overflow-hidden bg-[#0d0c1e] shadow-inner">
                      
                      {/* Animated Water Body */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-500 ease-out" 
                        style={{ height: `${waterProgress}%` }}
                      >
                        {/* Bubble particle effect */}
                        {waterProgress > 0 && (
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_60%)] animate-pulse"></div>
                        )}
                      </div>

                      {/* Measurement Ticks */}
                      <div className="absolute inset-y-0 right-2 flex flex-col justify-between py-4 text-[9px] font-bold text-slate-500 select-none">
                        <span>8</span>
                        <span>6</span>
                        <span>4</span>
                        <span>2</span>
                      </div>
                    </div>
                    
                    <span className="font-['Outfit'] font-bold text-lg text-blue-400 mt-3">
                      {waterCount} / {waterGoal} Bardak
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Score & Goals */}
            <div className="space-y-8">
              
              {/* Wellness Score Card */}
              <div className="relative overflow-hidden bg-gradient-to-b from-[#1b1235]/40 to-[#0d0c1e]/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl text-center">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>

                <h3 className="font-['Outfit'] font-bold text-lg text-slate-300 mb-6">
                  Zindelik Skoru
                </h3>

                {/* Score Circular Progress SVG */}
                <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="42" 
                      className="stroke-white/5" 
                      strokeWidth="8" 
                      fill="transparent" 
                    />
                    {/* Foreground glow ring */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="42" 
                      className="stroke-fuchsia-500/20 blur-[2px]" 
                      strokeWidth="8" 
                      fill="transparent" 
                      strokeDasharray={263.89}
                      strokeDashoffset={263.89 - (263.89 * score) / 100}
                    />
                    {/* Foreground active ring */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="42" 
                      className="stroke-url(#scoreGradient)" 
                      strokeWidth="8" 
                      fill="transparent" 
                      strokeDasharray={263.89}
                      strokeDashoffset={263.89 - (263.89 * score) / 100}
                      strokeLinecap="round"
                    />
                    
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f50057" />
                        <stop offset="50%" stopColor="#7c4dff" />
                        <stop offset="100%" stopColor="#00e5ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute flex flex-col items-center">
                    <span className="font-['Outfit'] font-extrabold text-4xl text-white tracking-tight">
                      {score}%
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">
                      Harika
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-6 max-w-[240px] mx-auto leading-relaxed">
                  Hedefleri tamamlayarak ve su içerek zindelik skorunuzu artırın.
                </p>
              </div>

              {/* Goals list */}
              <div className="relative overflow-hidden bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="font-['Outfit'] font-bold text-lg text-slate-200 mb-4">
                  Bugünün Hedefleri
                </h3>

                <div className="space-y-3">
                  {goals.map(goal => (
                    <div 
                      key={goal.id} 
                      onClick={() => toggleGoal(goal.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer select-none transition-all duration-300 ${
                        goal.completed 
                          ? 'bg-fuchsia-500/5 border-fuchsia-500/20 text-slate-300' 
                          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/[0.08] hover:border-white/10'
                      }`}
                    >
                      <div className={`w-5.5 h-5.5 rounded-lg flex items-center justify-center transition-all duration-300 border ${
                        goal.completed 
                          ? 'bg-fuchsia-500 border-fuchsia-500 text-white' 
                          : 'border-slate-500 bg-transparent'
                      }`}>
                        {goal.completed && (
                          <svg className="w-3.5 h-3.5 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      
                      <span className={`text-sm font-medium ${goal.completed ? 'line-through opacity-60' : ''}`}>
                        {goal.text}
                      </span>
                      
                      <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        +{goal.value} Puan
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 animate-bounce">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-100">Gelişmiş Analizler</h3>
            <p className="text-sm text-slate-400 mt-2 max-w-sm text-center">
              Zindelik verilerinizin haftalık ve aylık trend analizleri çok yakında burada olacak.
            </p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-[#0d0c1e]/40 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-100 mb-6">Ayarlar</h3>
            
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Kullanıcı Adı</label>
                <input 
                  type="text" 
                  defaultValue={userName} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-fuchsia-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block font-['Outfit']">Günlük Su Hedefi (Bardak)</label>
                <input 
                  type="number" 
                  defaultValue={waterGoal} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-fuchsia-500 transition-all duration-300"
                />
              </div>

              <button className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300">
                Ayarları Kaydet
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  )
}

export default App
