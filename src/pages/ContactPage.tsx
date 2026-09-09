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

      <div className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Contact Developer
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We welcome questions, feedback, bug disclosures, and suggestions from students, faculty coordinators, and college developers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Primary Contact Card */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Direct Email Inquiries</h2>
                  <p className="text-xs text-slate-400">Official developer communication desk</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                For general support, feedback, Play Store inquiries, repository moderation notices, or technical collaboration, reach out to us at:
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Support & Developer Email</span>
                  <a 
                    href="mailto:mauryaabhay938@gmail.com" 
                    className="text-base font-semibold text-brand-400 hover:underline"
                  >
                    mauryaabhay938@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:mauryaabhay938@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
                  aria-label="Send email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 flex items-center justify-between">
                <span>Inquiries are typically addressed within 24 to 48 hours.</span>
                <span className="text-emerald-400 font-medium">Active Support</span>
              </div>
            </div>

            {/* Developer Details & Play Store Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
                    <Code2 className="w-5 h-5 text-brand-400" />
                    <span>Developer</span>
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    Creator and maintainer of Campus Saathi:
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-brand-400 flex items-center justify-center font-bold text-base border border-slate-800">
                      {developer.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">{developer.name}</span>
                      <span className="text-[11px] text-slate-400">Sole Developer & Maintainer</span>
                    </div>
                  </div>
                  <span className="text-xs text-brand-400 bg-brand-950/60 px-2.5 py-1 rounded-md border border-brand-800/40">
                    {developer.title}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Android Application</h3>
                  <p className="text-xs text-slate-400">
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
