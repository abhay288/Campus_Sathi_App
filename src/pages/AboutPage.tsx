import React from 'react';
import { Heart, Shield, Code2, GraduationCap } from 'lucide-react';
import { Seo } from '../components/Seo';

export const AboutPage: React.FC = () => {
  const developer = { name: "Abhay Kushwaha", role: "Developer & Creator" };

  return (
    <>
      <Seo 
        title="About Campus Saathi"
        description="Learn about Campus Saathi: our student-first mission, core principles, and the development team behind the project."
        canonicalPath="/about"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              About The Project
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Campus Saathi
            </h1>
            <p className="text-brand-600 text-lg sm:text-xl font-bold font-mono">
              "Your Campus. Your Companion."
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Campus Saathi was created to solve everyday academic friction for college students. Rather than juggling dozens of disparate apps for calculating GPAs, tracking lecture cuts, scanning lab notes, and locating old exam papers, Campus Saathi brings all essential student utilities into a single, cohesive Android experience.
            </p>
          </div>

          {/* Guiding Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Student-Centered Utility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every screen and tool is built to solve actual student needs—like staying above the 75% attendance rule or preparing clean resumes for campus drives.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Local File Respect</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scanned documents, resumes, and study streaks are processed locally on your phone. We respect your privacy and avoid unnecessary cloud lock-in.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Academic Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in genuine peer support. Campus Repository promotes legitimate student notes, practical files, and previous year papers under fair academic sharing.
              </p>
            </div>
          </div>

          {/* Developer Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center space-x-2.5">
                <Code2 className="w-6 h-6 text-brand-600" />
                <span>Developer</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                The developer actively creating and maintaining Campus Saathi:
              </p>
            </div>

            <div className="max-w-md">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 font-extrabold text-2xl">
                  {developer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{developer.name}</h3>
                  <p className="text-xs text-brand-600 font-bold mt-0.5">{developer.role}</p>
                  <p className="text-xs text-slate-500 mt-1">Creator & Maintainer of Campus Saathi</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
