import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield, FileText } from 'lucide-react';
import { GooglePlayBadge } from './GooglePlayBadge';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Tools', path: '/tools' },
    { name: 'Repository', path: '/repository' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl p-1"
            aria-label="Campus Saathi Home"
          >
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-0.5 shadow-sm border border-slate-200/80 group-hover:border-brand-300 transition-all">
              <img 
                src="/logo.png" 
                alt="Campus Saathi Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                width="44"
                height="44"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                Campus Saathi
              </span>
              <span className="text-[11px] text-slate-500 tracking-wide font-medium hidden sm:block">
                Your Campus. Your Companion.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-semibold border border-brand-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Play Store CTA */}
          <div className="hidden lg:flex items-center">
            <GooglePlayBadge variant="compact" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-semibold border border-brand-200/60'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Secondary mobile links */}
            <div className="pt-2 border-t border-slate-100 mt-2 space-y-1">
              <NavLink
                to="/security"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                <Shield className="w-4 h-4 mr-2 text-slate-400" />
                Security
              </NavLink>
              <NavLink
                to="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                <FileText className="w-4 h-4 mr-2 text-slate-400" />
                Privacy Policy
              </NavLink>
            </div>
          </nav>

          <div className="pt-3 flex justify-center">
            <div onClick={() => setMobileMenuOpen(false)}>
              <GooglePlayBadge className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
