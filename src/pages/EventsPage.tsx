import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ExternalLink, 
  Compass, 
  CheckCircle 
} from 'lucide-react';
import { Seo } from '../components/Seo';

export const EventsPage: React.FC = () => {
  const eventTypes = [
    { title: "Hackathons & Coding Contests", desc: "Inter-college hackathons, algorithmic coding competitions, and 24-48 hour project sprints." },
    { title: "Technical Symposiums", desc: "Paper presentations, robotics challenges, guest tech talks, and departmental expos." },
    { title: "Workshops & Bootcamps", desc: "Hands-on masterclasses covering AI/ML, Cloud, Web development, IoT, and embedded systems." },
    { title: "Cultural & Sports Fests", desc: "Annual college cultural extravaganzas, inter-university sports tournaments, and debate fests." }
  ];

  const detailFields = [
    { icon: <Calendar className="w-4 h-4 text-brand-400" />, name: "Verified Date & Schedule", desc: "Clear start/end dates, submission deadlines, and round-wise timelines." },
    { icon: <MapPin className="w-4 h-4 text-emerald-400" />, name: "Precise Venue & Mode", desc: "Detailed campus auditorium, department lab, or online webinar links." },
    { icon: <Users className="w-4 h-4 text-indigo-400" />, name: "Organizer & Department", desc: "Student clubs, department societies, and recognized faculty coordinators." },
    { icon: <ExternalLink className="w-4 h-4 text-sky-400" />, name: "Official Registration Links", desc: "Direct links to Google Forms, Unstop, or official college portals." }
  ];

  return (
    <>
      <Seo 
        title="Campus Events – Campus Saathi"
        description="Discover college hackathons, technical symposiums, workshops, and campus opportunities with verified event details and registration links."
        canonicalPath="/events"
      />

      <div className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
              Campus Opportunities
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Campus Events Portal
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Stay connected with collegiate opportunities. Discover hackathons, technical workshops, cultural celebrations, and national competitions across campuses without missing registration deadlines.
            </p>
          </div>

          {/* Event Categories */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Explore Event Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventTypes.map((type, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-hover space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{type.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Information Each Event Card Contains */}
          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Comprehensive Event Transparency
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Every event listed on Campus Saathi provides verified event metadata so students know exactly where, when, and how to participate:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailFields.map((field, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                    {field.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{field.name}</h3>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{field.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submission and Moderation Policy */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-800/60 text-emerald-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Event Moderation & Authenticity</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Student organizers and club coordinators can submit campus event listings through the app. To protect students against misleading announcements, unauthorized fee solicitations, or spam, submitted events undergo administrative review prior to public listing in the Campus Saathi feed.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
