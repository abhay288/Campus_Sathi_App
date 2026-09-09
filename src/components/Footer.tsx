import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail } from 'lucide-react';
import { GooglePlayBadge } from './GooglePlayBadge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Campus Saathi Logo" 
                className="w-10 h-10 rounded-xl object-contain border border-slate-800 bg-slate-900"
                width="40"
                height="40"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">Campus Saathi</span>
                <span className="text-xs text-brand-400 font-medium tracking-wide">Your Campus. Your Companion.</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              A comprehensive student productivity suite designed to help college and university students organize class timetables, attendance, academic notes, campus events, and study utilities in one unified experience.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <GooglePlayBadge variant="primary" />

              <a
                href="mailto:mauryaabhay938@gmail.com"
                className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors py-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>mauryaabhay938@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-white transition-colors">Student Tools</Link>
              </li>
              <li>
                <Link to="/repository" className="hover:text-white transition-colors">Campus Repository</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">Campus Events</Link>
              </li>
            </ul>
          </div>

          {/* Support & Community Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Company & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Campus Saathi</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">Help & Support</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Developer</Link>
              </li>
              <li>
                <a 
                  href="/app-ads.txt" 
                  className="hover:text-white transition-colors inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>app-ads.txt</span>
                  <span className="ml-1.5 text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">AdMob</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Security Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Legal & Trust</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors inline-flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Security Practices</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Content & Team Attribution */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {currentYear} Campus Saathi. All rights reserved.</p>
            <p className="text-slate-400 mt-1">
              Developed by Abhay Kushwaha.
            </p>
          </div>

          <div className="text-slate-400 text-center md:text-right max-w-md">
            Students should only upload or share academic materials they have the right or permission to distribute.
          </div>
        </div>

      </div>
    </footer>
  );
};
