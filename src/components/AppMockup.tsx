import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Wrench, 
  Clock, 
  GraduationCap, 
  Download, 
  BookOpen, 
  ShieldCheck, 
  Search, 
  Flame, 
  Wifi, 
  Battery 
} from 'lucide-react';

export const AppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timetable' | 'attendance' | 'repo' | 'tools'>('timetable');

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      {/* Device Outer Frame */}
      <div className="relative rounded-[2.75rem] border-[6px] border-slate-300/80 bg-slate-900 shadow-2xl shadow-slate-400/20 overflow-hidden p-2.5">
        
        {/* Top Speaker Island / Camera Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
          <div className="w-6 h-1 rounded-full bg-slate-800"></div>
        </div>

        {/* Screen Container (Clean Light Mode App Interface) */}
        <div className="bg-white rounded-[2.25rem] p-4 pt-8 text-slate-900 flex flex-col h-[530px] overflow-hidden border border-slate-100 shadow-inner">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-2 pt-1 pb-2">
            <span>9:41</span>
            <div className="flex items-center space-x-1.5">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* App Top Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 tracking-tight leading-none">Campus Saathi</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">B.Tech CSE • Semester 5</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
              75% Safe
            </div>
          </div>

          {/* Interactive Screen Tab Switcher */}
          <div className="grid grid-cols-4 gap-1 my-3 p-1 bg-slate-100/90 rounded-xl border border-slate-200/70">
            <button
              onClick={() => setActiveTab('timetable')}
              className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all flex flex-col items-center justify-center ${
                activeTab === 'timetable'
                  ? 'bg-white text-brand-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 mb-0.5 text-brand-600" />
              <span>Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all flex flex-col items-center justify-center ${
                activeTab === 'attendance'
                  ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 mb-0.5 text-emerald-600" />
              <span>Attendance</span>
            </button>
            <button
              onClick={() => setActiveTab('repo')}
              className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all flex flex-col items-center justify-center ${
                activeTab === 'repo'
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 mb-0.5 text-indigo-600" />
              <span>PYQs</span>
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all flex flex-col items-center justify-center ${
                activeTab === 'tools'
                  ? 'bg-white text-amber-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 mb-0.5 text-amber-600" />
              <span>Tools</span>
            </button>
          </div>

          {/* Active Screen Content Body */}
          <div className="flex-1 overflow-y-auto pr-0.5 space-y-2.5 text-xs">
            
            {/* VIEW 1: TIMETABLE */}
            {activeTab === 'timetable' && (
              <div className="space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 font-medium">
                  <span>Today's Classes (Wednesday)</span>
                  <span className="text-brand-600 font-semibold">3 of 4 Remaining</span>
                </div>

                <div className="p-3 rounded-xl bg-brand-50/70 border border-brand-200/80 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold bg-brand-600 text-white rounded mb-1">
                        HAPPENING NOW
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs">Data Structures & Algorithms</h4>
                      <p className="text-[10px] text-slate-600 font-medium">Room 304 • Prof. R. Sharma</p>
                    </div>
                    <div className="text-right text-[10px] font-semibold text-brand-700 bg-white px-2 py-1 rounded-md border border-brand-100">
                      <Clock className="w-3 h-3 inline mr-1 text-brand-600" />
                      10:00 - 11:00
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs">Computer Networks</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Lab 2 • Prof. A. Mehta</p>
                    </div>
                    <div className="text-right text-[10px] text-slate-500 font-medium">
                      11:15 - 12:15
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs">Database Management Systems</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Room 201 • Prof. V. Patel</p>
                    </div>
                    <div className="text-right text-[10px] text-slate-500 font-medium">
                      01:30 - 02:30
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: ATTENDANCE */}
            {activeTab === 'attendance' && (
              <div className="space-y-2.5 animate-in fade-in duration-150">
                {/* Overall Attendance Card */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/40 border border-emerald-200/80 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Overall Attendance</div>
                    <div className="text-2xl font-black text-emerald-600 tracking-tight">81.4%</div>
                    <div className="text-[10px] text-slate-600 font-medium mt-0.5">Threshold: 75% required</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-200 text-center shadow-sm">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Safe Bunk</span>
                    <span className="text-sm font-extrabold text-emerald-600">2 Classes</span>
                  </div>
                </div>

                {/* Subject List */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 shadow-sm">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800">Data Structures</span>
                    <span className="text-emerald-600 font-extrabold">86% (24/28)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 shadow-sm">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800">Computer Networks</span>
                    <span className="text-amber-600 font-extrabold">74% (17/23)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                  <p className="text-[10px] text-amber-700 font-semibold">Attend next class to reach 75% safe standing</p>
                </div>
              </div>
            )}

            {/* VIEW 3: REPOSITORY */}
            {activeTab === 'repo' && (
              <div className="space-y-2 animate-in fade-in duration-150">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    readOnly
                    value="Filter: End-Sem PYQ, B.Tech CSE..."
                    className="w-full py-1.5 pl-8 pr-2 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-600 font-medium"
                  />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-1.5 py-0.5 bg-brand-100 text-brand-700 text-[9px] font-bold rounded">
                        PYQ • 2024
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs mt-1">Algorithms End-Semester Paper</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Subject Code: CS501 • Verified</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-xs">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 text-[9px] font-bold rounded">
                        Notes • Unit 1-4
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs mt-1">Operating Systems Handouts</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Subject Code: CS502 • Moderated</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-xs">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: TOOLS */}
            {activeTab === 'tools' && (
              <div className="grid grid-cols-2 gap-2.5 animate-in fade-in duration-150">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <GraduationCap className="w-5 h-5 text-brand-600 mb-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">CGPA/SGPA</div>
                    <div className="text-[10px] text-slate-500 font-medium">Credit Calculator</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <Flame className="w-5 h-5 text-amber-500 mb-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Focus Timer</div>
                    <div className="text-[10px] text-slate-500 font-medium">Pomodoro Streak</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <FileText className="w-5 h-5 text-emerald-600 mb-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">ATS Resume</div>
                    <div className="text-[10px] text-slate-500 font-medium">Builder & Checker</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <ShieldCheck className="w-5 h-5 text-sky-600 mb-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Smart Scanner</div>
                    <div className="text-[10px] text-slate-500 font-medium">On-Device PDF</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Device Bottom Bar */}
          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
              On-device local storage
            </span>
            <span className="text-brand-600 font-bold">Android 14+ Ready</span>
          </div>

        </div>
      </div>
      <p className="text-center text-xs text-slate-500 mt-3 font-medium">
        Interactive live preview of core Campus Saathi student modules
      </p>
    </div>
  );
};
