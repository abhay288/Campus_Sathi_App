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
  Sparkles,
  ShieldCheck,
  Search,
  Flame
} from 'lucide-react';

export const AppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timetable' | 'attendance' | 'repo' | 'tools'>('timetable');

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      {/* Device Frame */}
      <div className="relative rounded-[2.5rem] border-4 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden p-2">
        {/* Notch / Speaker Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700 mr-2"></div>
          <div className="w-8 h-1.5 rounded-full bg-slate-700"></div>
        </div>

        {/* Screen Container */}
        <div className="bg-slate-950 rounded-[2rem] p-4 pt-10 text-slate-100 flex flex-col h-[520px] overflow-hidden border border-slate-800/60">
          
          {/* Mock App Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-tight">Campus Saathi</div>
                <div className="text-[10px] text-slate-400">B.Tech CSE • Sem 5</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
              75% Safe
            </div>
          </div>

          {/* Interactive Screen Tab Controls */}
          <div className="grid grid-cols-4 gap-1 my-3 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('timetable')}
              className={`py-1.5 text-[10px] font-medium rounded-lg transition-colors flex flex-col items-center justify-center ${
                activeTab === 'timetable'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 mb-0.5" />
              <span>Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`py-1.5 text-[10px] font-medium rounded-lg transition-colors flex flex-col items-center justify-center ${
                activeTab === 'attendance'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 mb-0.5" />
              <span>Attendance</span>
            </button>
            <button
              onClick={() => setActiveTab('repo')}
              className={`py-1.5 text-[10px] font-medium rounded-lg transition-colors flex flex-col items-center justify-center ${
                activeTab === 'repo'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 mb-0.5" />
              <span>PYQs</span>
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`py-1.5 text-[10px] font-medium rounded-lg transition-colors flex flex-col items-center justify-center ${
                activeTab === 'tools'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 mb-0.5" />
              <span>Tools</span>
            </button>
          </div>

          {/* Active Screen Content Body */}
          <div className="flex-1 overflow-y-auto pr-0.5 space-y-2.5 text-xs">
            
            {/* VIEW 1: TIMETABLE */}
            {activeTab === 'timetable' && (
              <div className="space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span>Today's Classes (Wednesday)</span>
                  <span className="text-brand-400 font-medium">3 of 4 Remaining</span>
                </div>

                <div className="p-2.5 rounded-xl bg-brand-950/40 border border-brand-700/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-1.5 py-0.5 text-[9px] font-semibold bg-brand-600 text-white rounded mb-1">
                        NOW HAPPENING
                      </span>
                      <h4 className="font-semibold text-white text-xs">Data Structures & Algorithms</h4>
                      <p className="text-[10px] text-slate-300">Room 304 • Prof. R. Sharma</p>
                    </div>
                    <div className="text-right text-[10px] text-slate-400">
                      <Clock className="w-3 h-3 inline mr-1 text-brand-400" />
                      10:00 - 11:00
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-200 text-xs">Computer Networks</h4>
                      <p className="text-[10px] text-slate-400">Lab 2 • Prof. A. Mehta</p>
                    </div>
                    <div className="text-right text-[10px] text-slate-400">
                      11:15 - 12:15
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-200 text-xs">Database Management Systems</h4>
                      <p className="text-[10px] text-slate-400">Room 201 • Prof. V. Patel</p>
                    </div>
                    <div className="text-right text-[10px] text-slate-400">
                      01:30 - 02:30
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: ATTENDANCE */}
            {activeTab === 'attendance' && (
              <div className="space-y-2 animate-in fade-in duration-150">
                {/* Overall metric */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-slate-850 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">Overall Attendance</div>
                    <div className="text-xl font-bold text-emerald-400">81.4%</div>
                    <div className="text-[10px] text-slate-300 mt-0.5">Threshold: 75% required</div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-center">
                    <span className="text-[9px] text-emerald-300 block">Safe Bunk</span>
                    <span className="text-xs font-bold text-emerald-400">2 Classes</span>
                  </div>
                </div>

                {/* Subject items */}
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-200">Data Structures</span>
                    <span className="text-emerald-400 font-semibold">86% (24/28)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-200">Computer Networks</span>
                    <span className="text-amber-400 font-semibold">74% (17/23)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                  <p className="text-[9px] text-amber-300/80">Need 1 consecutive class to reach 75%</p>
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
                    className="w-full py-1.5 pl-8 pr-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400"
                  />
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-1.5 py-0.5 bg-indigo-950 text-indigo-300 text-[9px] font-medium rounded">
                        PYQ • 2024
                      </span>
                      <h4 className="font-semibold text-slate-200 text-xs mt-1">Algorithms End-Semester Paper</h4>
                      <p className="text-[10px] text-slate-400">Subject Code: CS501 • Verified</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-1.5 py-0.5 bg-blue-950 text-blue-300 text-[9px] font-medium rounded">
                        Notes • Unit 1-4
                      </span>
                      <h4 className="font-semibold text-slate-200 text-xs mt-1">Operating Systems Handouts</h4>
                      <p className="text-[10px] text-slate-400">Subject Code: CS502 • Moderated</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: TOOLS */}
            {activeTab === 'tools' && (
              <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-150">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <GraduationCap className="w-4 h-4 text-brand-400 mb-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">CGPA/SGPA</div>
                    <div className="text-[9px] text-slate-400">Credit Calculator</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <Flame className="w-4 h-4 text-amber-400 mb-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Focus Timer</div>
                    <div className="text-[9px] text-slate-400">Pomodoro Streak</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <FileText className="w-4 h-4 text-emerald-400 mb-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">ATS Resume</div>
                    <div className="text-[9px] text-slate-400">Builder & Checker</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <ShieldCheck className="w-4 h-4 text-sky-400 mb-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Smart Scanner</div>
                    <div className="text-[9px] text-slate-400">Offline PDF Tools</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Device Bottom Bar */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1.5"></span>
              Local on-device storage
            </span>
            <span className="text-brand-400">v1.0 Release</span>
          </div>

        </div>
      </div>
      <p className="text-center text-xs text-slate-400 mt-3 font-medium">
        Interactive UI preview of core Campus Saathi student modules
      </p>
    </div>
  );
};
