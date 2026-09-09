import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail } from 'lucide-react';
import { GooglePlayBadge } from './GooglePlayBadge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-0.5 shadow-sm border border-slate-200">
                <img 
                  src="/logo.png" 
                  alt="Campus Saathi Logo" 
                  className="w-full h-full object-contain"
                  width="44"
                  height="44"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900 block">Campus Saathi</span>
                <span className="text-xs text-brand-600 font-semibold tracking-wide">Your Campus. Your Companion.</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              A comprehensive student productivity suite designed to help college and university students organize class timetables, attendance, academic notes, campus events, and study utilities in one unified experience.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <GooglePlayBadge variant="primary" />

              <a
                href="mailto:mauryaabhay938@gmail.com"
                className="inline-flex items-center space-x-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>mauryaabhay938@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-brand-600 transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/tools" className="text-slate-600 hover:text-brand-600 transition-colors">Student Tools</Link>
              </li>
              <li>
                <Link to="/repository" className="text-slate-600 hover:text-brand-600 transition-colors">Campus Repository</Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-600 hover:text-brand-600 transition-colors">Campus Events</Link>
              </li>
            </ul>
          </div>

          {/* Support & Community Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Developer & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-brand-600 transition-colors">About Campus Saathi</Link>
              </li>
              <li>
                <Link to="/support" className="text-slate-600 hover:text-brand-600 transition-colors">Help & Support</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-brand-600 transition-colors">Contact Developer</Link>
              </li>
              <li>
                <a 
                  href="/app-ads.txt" 
                  className="text-slate-600 hover:text-brand-600 transition-colors inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>app-ads.txt</span>
                  <span className="ml-1.5 text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-medium">AdMob</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Security Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legal & Trust</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-brand-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-brand-600 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/security" className="text-slate-600 hover:text-brand-600 transition-colors inline-flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Security Practices</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Content & Team Attribution */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {currentYear} Campus Saathi. All rights reserved.</p>
            <p className="text-slate-500 mt-0.5">
              Developed by Abhay Kushwaha.
            </p>
          </div>

          <div className="text-slate-500 text-center md:text-right max-w-md">
            Students should only upload or share academic materials they have the right or permission to distribute.
          </div>
        </div>

      </div>
    </footer>
  );
};
