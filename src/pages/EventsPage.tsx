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
    { icon: <Calendar className="w-5 h-5 text-brand-600" />, name: "Verified Date & Schedule", desc: "Clear start/end dates, submission deadlines, and round-wise timelines." },
    { icon: <MapPin className="w-5 h-5 text-emerald-600" />, name: "Precise Venue & Mode", desc: "Detailed campus auditorium, department lab, or online webinar links." },
    { icon: <Users className="w-5 h-5 text-indigo-600" />, name: "Organizer & Department", desc: "Student clubs, department societies, and recognized faculty coordinators." },
    { icon: <ExternalLink className="w-5 h-5 text-sky-600" />, name: "Official Registration Links", desc: "Direct links to Google Forms, Unstop, or official college portals." }
  ];

  return (
    <>
      <Seo 
        title="Campus Events – Campus Saathi"
        description="Discover college hackathons, technical symposiums, workshops, and campus opportunities with verified event details and registration links."
        canonicalPath="/events"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Campus Opportunities
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Campus Events Portal
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Stay connected with collegiate opportunities. Discover hackathons, technical workshops, cultural celebrations, and national competitions across campuses without missing registration deadlines.
            </p>
          </div>

          {/* Event Categories */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Explore Event Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventTypes.map((type, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Information Each Event Card Contains */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Comprehensive Event Transparency
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Every event listed on Campus Saathi provides verified event metadata so students know exactly where, when, and how to participate:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailFields.map((field, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-xs">
                    {field.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{field.name}</h3>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{field.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submission and Moderation Policy */}
          <div className="p-7 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Event Moderation & Authenticity</h3>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Student organizers and club coordinators can submit campus event listings through the app. To protect students against misleading announcements, unauthorized fee solicitations, or spam, submitted events undergo administrative review prior to public listing in the Campus Saathi feed.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
