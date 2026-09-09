import React from 'react';
import { ShieldCheck, Lock, Database, Smartphone, KeyRound, RefreshCw, AlertCircle } from 'lucide-react';
import { Seo } from '../components/Seo';

export const SecurityPage: React.FC = () => {
  const securityPillars = [
    {
      icon: <Lock className="w-6 h-6 text-brand-600" />,
      title: "Encrypted Network Communications",
      desc: "All traffic between the Campus Saathi client application and backend infrastructure is conducted over HTTPS using modern Transport Layer Security (TLS) protocols, safeguarding session integrity and credentials against interception."
    },
    {
      icon: <KeyRound className="w-6 h-6 text-emerald-600" />,
      title: "Least-Privilege Architecture",
      desc: "Access rights are restricted according to minimal necessity. Client applications are provisioned with public anonymous access tokens or authenticated user-scoped tokens, ensuring no administrative authority is granted to standard users."
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      title: "Row Level Security (RLS)",
      desc: "Our database schemas enforce Row Level Security policies. This ensures that users are only authorized to read or write data records directly associated with their own verified user ID, preventing cross-tenant data leakage."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-600" />,
      title: "Local On-Device Document Isolation",
      desc: "Personal documents scanned with the Smart Scanner or generated with the Resume Builder remain on local device storage. We avoid unneeded cloud ingestion of private student documents, reducing potential attack surfaces."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Input Validation & Content Screening",
      desc: "Community repository uploads and event listing submissions undergo server-side validation and administrative moderation to mitigate the distribution of malicious links, corrupted binaries, or inappropriate content."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
      title: "Regular Dependency Maintenance",
      desc: "We actively monitor, audit, and patch third-party dependencies and framework libraries to resolve newly disclosed security vulnerabilities and maintain stable operation."
    }
  ];

  return (
    <>
      <Seo 
        title="Security Practices – Campus Saathi"
        description="Learn about Campus Saathi's security architecture: encrypted communications, Row Level Security, local document isolation, and secure authentication."
        canonicalPath="/security"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Application Integrity
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Security Practices
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We approach security with engineering discipline, sensible architectural constraints, and transparency. Here is an overview of how Campus Saathi protects student data and application infrastructure.
            </p>
          </div>

          {/* Security Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Client-Side & Static Website Hygiene */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center space-x-2.5">
              <ShieldCheck className="w-6 h-6 text-brand-600" />
              <span>Public Website Security & Secret Protection</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              This official developer website is hosted as a static application on Netlify with pre-configured HTTP security headers including X-Frame-Options (clickjacking mitigation), X-Content-Type-Options: nosniff, and strict Referrer Policies.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Administrative credentials, database service-role keys, private API secrets, and server configuration files are strictly isolated from client-side bundles and public repositories.
            </p>
          </div>

          {/* Security Evolution & Realistic Posture */}
          <div className="p-7 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2 text-sm text-slate-800">
            <h3 className="font-bold text-slate-900 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-emerald-600" />
              <span>Continuous Security Evolution</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              No digital system can claim to be "100% immune" to threats. Security is an ongoing, evolving discipline. We continuously review our implementation, assess new attack vectors, and welcome responsible security disclosures. If you discover a potential vulnerability in Campus Saathi, please report it directly to <a href="mailto:mauryaabhay938@gmail.com" className="text-brand-600 font-semibold hover:underline">mauryaabhay938@gmail.com</a> for prompt investigation.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
