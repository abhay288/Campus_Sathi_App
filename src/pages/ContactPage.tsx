import React from 'react';
import { Mail, Send, Code2 } from 'lucide-react';
import { Seo } from '../components/Seo';
import { GooglePlayBadge } from '../components/GooglePlayBadge';

export const ContactPage: React.FC = () => {
  const developer = { name: "Abhay Kushwaha", title: "Developer & Creator" };

  return (
    <>
      <Seo 
        title="Contact – Campus Saathi"
        description="Contact the Campus Saathi developer: Abhay Kushwaha. Official support and developer communication."
        canonicalPath="/contact"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Contact Developer
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We welcome questions, feedback, bug disclosures, and suggestions from students, faculty coordinators, and college developers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Primary Contact Card */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Direct Email Inquiries</h2>
                  <p className="text-xs text-slate-500 font-medium">Official developer communication desk</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                For general support, feedback, Play Store inquiries, repository moderation notices, or technical collaboration, reach out to us at:
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Support & Developer Email</span>
                  <a 
                    href="mailto:mauryaabhay938@gmail.com" 
                    className="text-base font-bold text-brand-600 hover:underline"
                  >
                    mauryaabhay938@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:mauryaabhay938@gmail.com"
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors shadow-xs"
                  aria-label="Send email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-3 text-xs text-slate-500 leading-relaxed border-t border-slate-100 flex items-center justify-between">
                <span>Inquiries are typically addressed within 24 to 48 hours.</span>
                <span className="text-emerald-700 font-bold">Active Support</span>
              </div>
            </div>

            {/* Developer Details & Play Store Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center space-x-2">
                    <Code2 className="w-5 h-5 text-brand-600" />
                    <span>Developer</span>
                  </h2>
                  <p className="text-slate-500 text-xs mt-1">
                    Creator and maintainer of Campus Saathi:
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-extrabold text-base border border-brand-200">
                      {developer.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">{developer.name}</span>
                      <span className="text-[11px] text-slate-500 font-medium">Sole Developer & Maintainer</span>
                    </div>
                  </div>
                  <span className="text-xs text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 font-bold">
                    {developer.title}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Android Application</h3>
                  <p className="text-xs text-slate-600">
                    Download the latest verified release directly from Google Play:
                  </p>
                  <div className="pt-1">
                    <GooglePlayBadge variant="primary" className="w-full justify-center" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
