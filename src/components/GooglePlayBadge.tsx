import React from 'react';

interface GooglePlayBadgeProps {
  variant?: 'primary' | 'outline' | 'compact';
  className?: string;
}

export const GooglePlayBadge: React.FC<GooglePlayBadgeProps> = ({ 
  variant = 'primary', 
  className = '' 
}) => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.campussaathi.app";

  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-3 px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
        variant === 'outline'
          ? 'bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600'
          : variant === 'compact'
          ? 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-3.5 py-1.5'
          : 'bg-black hover:bg-slate-900 text-white border border-slate-700/80 shadow-black/40 hover:border-brand-500/60'
      } ${className}`}
      aria-label="Available on the Play Store - Campus Saathi"
    >
      {/* Official multi-color Google Play Store Vector Icon */}
      <svg
        className="w-7 h-7 shrink-0 group-hover:scale-105 transition-transform"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.9.0.2z"
          fill="#00E676"
        />
        <path
          d="M47 36.3C44.7 40.5 43.4 45.4 43.4 51v410c0 5.6 1.3 10.5 3.6 14.7l221.7-220.8L47 36.3z"
          fill="#00B0FF"
        />
        <path
          d="M468.9 230.1l-83.5-47.9-60.1 60.1 60.1 60.1 83.5-47.9c13.9-8 23.1-23.1 23.1-42.2s-9.2-34.2-23.1-42.2z"
          fill="#FFD600"
        />
        <path
          d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
          fill="#FF3D00"
        />
      </svg>

      <div className="text-left flex flex-col justify-center">
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider leading-none">
          Available on the
        </span>
        <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
          Play Store
        </span>
      </div>
    </a>
  );
};
