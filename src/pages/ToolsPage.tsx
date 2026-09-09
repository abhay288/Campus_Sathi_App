import React from 'react';
import { 
  GraduationCap, 
  Calculator, 
  Clock, 
  Flame, 
  Sparkles, 
  FileText, 
  Maximize2, 
  Scissors, 
  Scan, 
  FileCheck2, 
  Cpu, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';
import { Seo } from '../components/Seo';

export const ToolsPage: React.FC = () => {
  const tools = [
    {
      category: "Academic Calculations",
      items: [
        {
          name: "CGPA Calculator",
          icon: <GraduationCap className="w-5 h-5 text-brand-400" />,
          desc: "Calculate cumulative grade point average across multiple semesters with custom credit formulas and percentage equivalents."
        },
        {
          name: "SGPA Calculator",
          icon: <Calculator className="w-5 h-5 text-indigo-400" />,
          desc: "Compute single-semester grade point average based on individual subject grades and credit hour weightings."
        },
        {
          name: "Attendance Safe-Bunk Calculator",
          icon: <Clock className="w-5 h-5 text-emerald-400" />,
          desc: "Assess how many classes can be missed without dipping below the required 75% threshold, or calculate required attendance to recover."
        },
        {
          name: "Conversions & Engineering Formulas",
          icon: <Cpu className="w-5 h-5 text-sky-400" />,
          desc: "Reference standard academic conversions, units, and foundational engineering formulas quickly on the go."
        }
      ]
    },
    {
      category: "Focus & Productivity",
      items: [
        {
          name: "Study Focus Timer",
          icon: <Clock className="w-5 h-5 text-amber-400" />,
          desc: "Customizable Pomodoro timer tailored for university study blocks, revision sessions, and laboratory assignments."
        },
        {
          name: "Study Streak Counter",
          icon: <Flame className="w-5 h-5 text-orange-400" />,
          desc: "Monitor consistent daily study habits and track personal revision streaks over the course of the semester."
        }
      ]
    },
    {
      category: "Document & Media Utilities",
      items: [
        {
          name: "Smart Document Scanner",
          icon: <Scan className="w-5 h-5 text-teal-400" />,
          desc: "On-device camera scanner with automated boundary detection, perspective alignment, clarity filters, and local PDF export."
        },
        {
          name: "Image to PDF / DOC",
          icon: <FileText className="w-5 h-5 text-blue-400" />,
          desc: "Combine multiple homework photographs or lecture snapshots into clean single or multi-page documents."
        },
        {
          name: "Image & PDF Resizer",
          icon: <Maximize2 className="w-5 h-5 text-violet-400" />,
          desc: "Compress and resize file dimensions and KB/MB limits to meet portal upload requirements for college submissions."
        },
        {
          name: "Background Remover",
          icon: <Scissors className="w-5 h-5 text-pink-400" />,
          desc: "Isolate subjects and remove backgrounds for student project graphics, club banners, and resume headshots with manual touch touch-up."
        }
      ]
    },
    {
      category: "Placement & Resume Tools",
      items: [
        {
          name: "ATS Resume Builder",
          icon: <FileCheck2 className="w-5 h-5 text-rose-400" />,
          desc: "Create clean, single and multi-page resumes using ATS-compliant structured templates with direct vector PDF export."
        },
        {
          name: "ATS Resume Checker",
          icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
          desc: "Review your resume for standard structural sections, contact clarity, and job description alignment."
        }
      ]
    }
  ];

  return (
    <>
      <Seo 
        title="Student Tools – Campus Saathi"
        description="Comprehensive toolkit built for students: CGPA/SGPA calculator, attendance calculator, Pomodoro timer, Smart Scanner, and ATS Resume Builder."
        canonicalPath="/tools"
      />

      <div className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Page Intro */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
              Student Productivity Suite
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Tools Built Around Real Student Needs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Eliminate third-party ad-heavy web calculators and unverified file tools. Campus Saathi bundles lightweight, student-tailored utilities directly inside the mobile app.
            </p>
          </div>

          {/* Tools Categories Grid */}
          <div className="space-y-12">
            {tools.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                <h2 className="text-xl font-bold text-white tracking-tight border-b border-slate-800/80 pb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  <span>{section.category}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((tool, tIdx) => (
                    <div 
                      key={tIdx} 
                      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-hover flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                          {tool.icon}
                        </div>
                        <h3 className="text-base font-bold text-white">
                          {tool.name}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Smart Scanner Deep-Dive & Local Storage Notice */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-teal-950/70 border border-teal-800/50 text-teal-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Smart Scanner: Local Document Privacy</h3>
                <p className="text-xs text-slate-400">Your documents stay on your device.</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Campus Saathi performs edge detection, perspective distortion correction, and color enhancements locally on your Android device. Personal scanned notes and exported PDF files are saved to your device's designated download folder and are not automatically transmitted to cloud servers.
            </p>
          </div>

          {/* Resume Builder Disclaimer */}
          <div className="p-6 rounded-xl bg-slate-900/40 border border-amber-900/40 flex items-start space-x-3.5 text-xs text-slate-300">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-amber-300">ATS Analysis Informational Notice:</span>
              <p className="leading-relaxed">
                The ATS Resume Checker and matching evaluations are informational tools designed to assist students in formatting resumes according to industry standard conventions. ATS analysis does not guarantee selection or an interview with any employer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
