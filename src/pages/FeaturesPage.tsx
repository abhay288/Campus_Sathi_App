import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Scan, 
  Bot, 
  Briefcase, 
  CheckSquare, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { Link } from 'react-router-dom';

export const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-brand-600" />,
      title: "Smart Timetable",
      badge: "Academic Schedule",
      summary: "Organize classes, lecture hours, instructors, and room numbers with zero friction.",
      details: [
        "Day-to-day lecture schedules and whole-week timetable views",
        "Configurable lecture start time and venue details",
        "Clean, visual indicators for active and upcoming sessions",
        "Designed to replace messy screenshots and informal timetable PDFs"
      ]
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Attendance Tracking",
      badge: "Institutional Thresholds",
      summary: "Stay informed about your attendance status and prevent exam eligibility issues.",
      details: [
        "Subject-wise lecture present, absent, and duty-leave counts",
        "Live comparison against the mandatory 75% attendance policy",
        "Safe-bunk calculator shows how many classes you can afford to miss",
        "Recovery calculator estimates classes needed to regain safe standing"
      ]
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-indigo-600" />,
      title: "Assignments & Tasks",
      badge: "Deadline Management",
      summary: "Prioritize academic coursework, lab submissions, and term projects.",
      details: [
        "Track pending, submitted, and overdue academic deadlines",
        "Tag tasks by subject code, submission type, and urgency",
        "Clean checklist interface designed for quick status updates"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-sky-600" />,
      title: "Campus Repository",
      badge: "Academic Resources",
      summary: "A community-supported library organized by college, branch, and semester.",
      details: [
        "Previous Year Question Papers (PYQs) with session tags",
        "Curated handwritten notes and lab manuals",
        "Standard university syllabi and question banks",
        "Moderated submissions ensuring legitimate academic content"
      ],
      link: { text: "Learn more about Repository", path: "/repository" }
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      title: "Campus Events",
      badge: "Opportunities & Fests",
      summary: "Discover technical symposiums, hackathons, and cultural fests.",
      details: [
        "Comprehensive event directory covering dates, venue, and mode",
        "Direct registration links from verified organizers",
        "Community submission portal with moderation to ensure authenticity"
      ],
      link: { text: "Explore Campus Events", path: "/events" }
    },
    {
      icon: <Scan className="w-6 h-6 text-teal-600" />,
      title: "Smart Document Scanner",
      badge: "Local & Private",
      summary: "Scan lecture notes, lab sheets, and assignments on your device.",
      details: [
        "Automated edge detection and perspective quad adjustment",
        "Clarity filters: Magic Color, B&W, and Document Sharp",
        "Multi-page PDF export and image saving without cloud requirements",
        "Documents stay strictly on your local device storage"
      ],
      link: { text: "View Scanner & Tools", path: "/tools" }
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      title: "AI Study Assistant",
      badge: "Academic Guidance",
      summary: "Understand complex coursework concepts and structure study plans.",
      details: [
        "Ask academic questions across engineering and science topics",
        "Generate conceptual summaries and key formula reviews",
        "Tailored for quick study clarifications before exams"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-rose-600" />,
      title: "Placement & Career Hub",
      badge: "Job Preparation",
      summary: "Prepare for campus recruitment, technical interviews, and resume reviews.",
      details: [
        "ATS-friendly resume templates with direct PDF export",
        "Informational ATS structure check to test keyword matching",
        "Core technical subjects recap and placement prep checklists"
      ],
      link: { text: "Check Resume Builder", path: "/tools" }
    }
  ];

  return (
    <>
      <Seo 
        title="Features – Campus Saathi"
        description="Explore Campus Saathi's core capabilities: Smart Timetable, Attendance tracking, Campus Repository, Smart Scanner, AI Study Assistant, and Placement tools."
        canonicalPath="/features"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Core Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Designed For Every Aspect of Campus Life
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Campus Saathi replaces disjointed tools with a unified academic companion. Each feature is engineered specifically to address real student workflow bottlenecks.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      {feature.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {feature.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                      {feature.title}
                    </h2>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      {feature.summary}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-slate-100">
                    {feature.details.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-3 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {feature.link && (
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      to={feature.link.path}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center space-x-1"
                    >
                      <span>{feature.link.text}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
