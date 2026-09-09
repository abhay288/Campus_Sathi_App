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
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-950/70 border border-brand-800/60 text-brand-300 text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span>Official Developer Website • Android App</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Campus Saathi
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-400 mt-2 font-mono">
                  "Your Campus. Your Companion."
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                A smarter way to manage your academic life, productivity, campus resources and everyday student tasks. Engineered specifically for college and university students.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <GooglePlayBadge variant="primary" />

                <Link
                  to="/features"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Indicators: No fake stats, genuine features */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
                  <div className="text-xs font-semibold text-slate-200">Local Processing</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Scans & tools run on-device</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
                  <div className="text-xs font-semibold text-slate-200">Moderated Repo</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Verified academic resources</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
                  <div className="text-xs font-semibold text-slate-200">Student First</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">75% attendance calculators</div>
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
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Built For College Life</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Essential Student Capabilities
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From lecture timetables to marksheet conversions and verified question papers, Campus Saathi solves everyday academic friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Smart Timetable */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 card-hover">
              <div className="w-11 h-11 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Smart Timetable</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Organize lectures, room numbers, and faculty details. Keep track of daily classes without scrambling through messy group chats.
              </p>
              <Link to="/features" className="text-xs font-semibold text-brand-400 hover:text-brand-300 inline-flex items-center">
                Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Card 2: Attendance Tracker */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 card-hover">
              <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Attendance Tracking</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Track subject-wise lecture attendance and understand your exact status relative to university criteria like the 75% attendance rule.
              </p>
              <Link to="/features" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center">
                Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Card 3: Campus Repository */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 card-hover">
              <div className="w-11 h-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Campus Repository</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Discover peer-contributed academic resources: Previous Year Questions (PYQs), lecture notes, lab manuals, and syllabus copies.
              </p>
              <Link to="/repository" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                Explore Repository <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Card 4: Smart Scanner */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 card-hover">
              <div className="w-11 h-11 rounded-xl bg-sky-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Scan className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Smart Scanner</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Scan assignment pages and notes directly on your device with edge correction, clarity filters, and export to PDF without forced cloud uploads.
              </p>
              <Link to="/tools" className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center">
                View Scanner <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Card 5: Student Tools */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 card-hover">
              <div className="w-11 h-11 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Academic & PDF Tools</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Built-in CGPA/SGPA credit calculators, focus Pomodoro timer, document resizers, image converters, and background removal for student projects.
              </p>
              <Link to="/tools" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center">
                See All Tools <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Card 6: Career & Placement Hub */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 card-hover">
              <div className="w-11 h-11 rounded-xl bg-rose-600/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">ATS Resume Builder</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Craft clean, single and multi-page ATS-formatted resumes. Includes informational ATS keyword analysis to help evaluate structure.
              </p>
              <Link to="/tools" className="text-xs font-semibold text-rose-400 hover:text-rose-300 inline-flex items-center">
                Explore Resume Tools <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* AEO / Common Questions Section */}
      <section className="py-16 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Questions & Answers</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-white text-base">What is Campus Saathi?</h4>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Campus Saathi is an all-in-one student productivity and academic companion mobile application. It helps college and university students manage their course schedules, monitor attendance against institutional thresholds, access community-moderated study materials, and access everyday utilities like grade calculators and document scanners.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-white text-base">Is Campus Saathi available on Android?</h4>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Yes. Campus Saathi is designed for Android devices and is distributed via Google Play. You can find the direct store link at the top and bottom of this website.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-white text-base">Where are my scanned documents and personal files stored?</h4>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Personal scanned documents created with the Smart Scanner remain on your local device. We do not automatically upload or sync personal document scans to cloud servers unless you explicitly share or submit content.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-white text-base">How does the Campus Repository handle copyright and uploads?</h4>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Campus Repository is designed for legitimate academic sharing such as student handwritten notes, syllabus copies, and previous year question papers. Students must only upload materials they have the right or permission to distribute. Submissions undergo moderation, and copyright holders can request removals at any time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Download CTA Banner */}
      <section className="py-14 border-t border-slate-800/80 bg-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to organize your student journey?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
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
