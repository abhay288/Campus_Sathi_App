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

      <div className="py-20 md:py-32 bg-slate-950 flex-grow flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-semibold">
            <span>404 Error</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The link you followed may have been updated, removed, or the address might have been typed incorrectly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Visit Support Center</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
