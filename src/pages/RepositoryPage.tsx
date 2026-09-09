import React from 'react';
import { 
  BookOpen, 
  ShieldAlert, 
  Filter, 
  CheckCircle
} from 'lucide-react';
import { Seo } from '../components/Seo';

export const RepositoryPage: React.FC = () => {
  const taxonomy = [
    { label: "College / University", desc: "Browse your specific university or institute curriculum structure" },
    { label: "Degree & Course", desc: "B.Tech, BCA, B.Sc, MCA, M.Tech, and academic degree tracks" },
    { label: "Branch & Discipline", desc: "Computer Science, Electrical, Mechanical, Civil, Electronics, and specialized streams" },
    { label: "Semester", desc: "Filter by Semester 1 through 8 to pinpoint active coursework" },
    { label: "Subject & Code", desc: "Find resources mapped to official university course codes (e.g. CS501)" },
    { label: "Exam & Session Type", desc: "Mid-semester, end-semester, practical assessments, and previous academic years" }
  ];

  const categories = [
    { name: "Previous Year Questions (PYQs)", desc: "Past university examination papers organized by year and session for targeted exam practice." },
    { name: "Lecture Notes", desc: "Comprehensive chapter summaries and handwritten lecture notes shared by peers and top performers." },
    { name: "Lab Manuals", desc: "Laboratory guides, experiment procedures, circuit diagrams, and code snippets." },
    { name: "Practical Files", desc: "Standard practical templates and project documentation examples." },
    { name: "Official Syllabi", desc: "Current university unit breakdowns, recommended reference books, and marking schemes." },
    { name: "Question Banks", desc: "Chapter-wise important questions, viva voce preparation lists, and numerical problems." },
    { name: "Assignment Briefs", desc: "Sample problems, tutorial sheets, and coursework references." },
    { name: "Study Material", desc: "General reference handouts and verified supplementary academic readings." }
  ];

  return (
    <>
      <Seo 
        title="Campus Repository – Campus Saathi"
        description="Structured academic resources organized by college, branch, and semester: PYQs, handwritten notes, lab manuals, syllabi, and question banks."
        canonicalPath="/repository"
      />

      <div className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
              Academic Library
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Campus Repository
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Finding genuine previous year papers, lab guidelines, and course notes shouldn't take hours of digging through expired drive links. Campus Repository provides a structured, searchable catalog for legitimate student academic resources.
            </p>
          </div>

          {/* Structured Taxonomy Card */}
          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2.5">
                <Filter className="w-5 h-5 text-brand-400" />
                <span>Organized by Hierarchical Academic Structure</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Every resource in the repository is categorized systematically to ensure easy discoverability:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {taxonomy.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-xs font-semibold text-brand-400">Step 0{idx + 1}</div>
                  <h3 className="text-sm font-bold text-white">{item.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Categories */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Supported Academic Categories
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Explore the range of academic materials cataloged across college faculties:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {categories.map((cat, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 card-hover space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Moderation & Academic Integrity Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Moderation Process */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Verification & Community Moderation</span>
              </div>
              <h3 className="text-base font-bold text-white">Quality-Checked Submissions</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Academic files submitted by community members are reviewed by administrators before public listing. This moderation workflow screens out spam, damaged scans, incorrect course labeling, and low-quality materials to keep the repository trustworthy.
              </p>
            </div>

            {/* Copyright & Responsible Sharing Policy */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-brand-900/50 space-y-3">
              <div className="flex items-center space-x-2 text-brand-400 font-semibold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>Responsible Content Policy</span>
              </div>
              <h3 className="text-base font-bold text-white">Respect for Copyright & Fair Use</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Campus Saathi respects intellectual property rights. Students should only upload or share materials they have the right or permission to distribute. Copyrighted textbooks or proprietary publishing house content must not be shared without authorization.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
