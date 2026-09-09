import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle } from 'lucide-react';
import { Seo } from '../components/Seo';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo 
        title="Page Not Found – Campus Saathi"
        description="The requested page could not be found. Return to Campus Saathi home or explore features."
      />

      <div className="py-20 md:py-32 bg-slate-50 flex-grow flex items-center border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold">
            <span>404 Error</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto">
            The link you followed may have been updated, removed, or the address might have been typed incorrectly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 text-sm font-semibold transition-colors shadow-xs"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>Visit Support Center</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
