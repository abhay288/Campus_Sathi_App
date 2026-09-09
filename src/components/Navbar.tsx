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
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
            aria-label="Campus Saathi Home"
          >
            <img 
              src="/logo.png" 
              alt="Campus Saathi Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain shadow-sm border border-slate-800 bg-slate-900 group-hover:scale-105 transition-transform"
              width="40"
              height="40"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-400 transition-colors">
                Campus Saathi
              </span>
              <span className="text-[10px] text-slate-400 tracking-wide font-medium hidden sm:block">
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
                      ? 'text-brand-400 bg-brand-950/60 border border-brand-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <GooglePlayBadge variant="compact" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-400 bg-brand-950/70 border border-brand-800/60'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Secondary mobile links */}
            <div className="pt-2 border-t border-slate-800/80 mt-2 space-y-1">
              <NavLink
                to="/security"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg"
              >
                <Shield className="w-4 h-4 mr-2" />
                Security
              </NavLink>
              <NavLink
                to="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg"
              >
                <FileText className="w-4 h-4 mr-2" />
                Privacy Policy
              </NavLink>
            </div>
          </nav>

          <div className="pt-2 flex justify-center">
            <div onClick={() => setMobileMenuOpen(false)}>
              <GooglePlayBadge className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
