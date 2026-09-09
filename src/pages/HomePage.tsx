import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  Scan, 
  FileCheck, 
  ChevronRight 
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { JsonLd } from '../components/JsonLd';
import { AppMockup } from '../components/AppMockup';
import { GooglePlayBadge } from '../components/GooglePlayBadge';

export const HomePage: React.FC = () => {
  return (
    <>
      <Seo 
        title="Campus Saathi – Your Campus. Your Companion."
        description="A smarter way to manage your academic life, productivity, campus resources and everyday student tasks."
        canonicalPath="/"
      />
      <JsonLd pageType="software" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Subtle decorative background circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-100/40 to-sky-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Official Developer Website • Android App</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Campus Saathi
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-600 mt-2 font-mono">
                  "Your Campus. Your Companion."
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                A smarter way to manage your academic life, productivity, campus resources and everyday student tasks. Engineered specifically for college and university students.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <GooglePlayBadge variant="primary" />

                <Link
                  to="/features"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>

              {/* Trust Indicators: No fake stats, genuine features */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200 text-left">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Local Processing</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Scans & tools run on-device</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Moderated Repo</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Verified academic papers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Student First</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">75% attendance calculations</div>
                </div>
              </div>

            </div>

            {/* Right Column: App Mockup UI */}
            <div className="lg:col-span-5 flex justify-center">
              <AppMockup />
            </div>

          </div>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Built For College Life
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Essential Student Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From lecture timetables to marksheet conversions and verified question papers, Campus Saathi solves everyday academic friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Smart Timetable */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Smart Timetable</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Organize lectures, room numbers, and faculty details. Keep track of daily classes without scrambling through messy group chats.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/features" className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center">
                  Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: Attendance Tracker */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Attendance Tracking</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Track subject-wise lecture attendance and understand your exact status relative to university criteria like the 75% attendance rule.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/features" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center">
                  Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: Campus Repository */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Campus Repository</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Discover peer-contributed academic resources: Previous Year Questions (PYQs), lecture notes, lab manuals, and syllabus copies.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/repository" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center">
                  Explore Repository <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 4: Smart Scanner */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center">
                  <Scan className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Smart Scanner</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Scan assignment pages and notes directly on your device with edge correction, clarity filters, and export to PDF without forced cloud uploads.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/tools" className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center">
                  View Scanner <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 5: Student Tools */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Academic & PDF Tools</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Built-in CGPA/SGPA credit calculators, focus Pomodoro timer, document resizers, image converters, and background removal for student projects.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/tools" className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center">
                  See All Tools <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 6: Career & Placement Hub */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">ATS Resume Builder</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Craft clean, single and multi-page ATS-formatted resumes. Includes informational ATS keyword analysis to help evaluate structure.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/tools" className="text-xs font-bold text-rose-600 hover:text-rose-700 inline-flex items-center">
                  Explore Resume Tools <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Questions & Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base">What is Campus Saathi?</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Campus Saathi is an all-in-one student productivity and academic companion mobile application. It helps college and university students manage their course schedules, monitor attendance against institutional thresholds, access community-moderated study materials, and access everyday utilities like grade calculators and document scanners.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base">Is Campus Saathi available on Android?</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Yes. Campus Saathi is designed for Android devices and is distributed via Google Play. You can find the direct store link at the top and bottom of this website.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base">Where are my scanned documents and personal files stored?</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Personal scanned documents created with the Smart Scanner remain on your local device. We do not automatically upload or sync personal document scans to cloud servers unless you explicitly share or submit content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base">How does the Campus Repository handle copyright and uploads?</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Campus Repository is designed for legitimate academic sharing such as student handwritten notes, syllabus copies, and previous year question papers. Students must only upload materials they have the right or permission to distribute. Submissions undergo moderation, and copyright holders can request removals at any time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Download CTA Banner */}
      <section className="py-16 border-t border-slate-200 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to organize your student journey?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Get Campus Saathi on Google Play and keep your classes, attendance, notes, and academic tools in one companion.
          </p>
          <div className="flex justify-center">
            <GooglePlayBadge variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
};
