import React from 'react';
import { Seo } from '../components/Seo';

export const TermsPage: React.FC = () => {
  return (
    <>
      <Seo 
        title="Terms & Conditions – Campus Saathi"
        description="Official Terms and Conditions for Campus Saathi: read guidelines on acceptable use, academic content responsibilities, and copyright policies."
        canonicalPath="/terms"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-4 border-b border-slate-200 pb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Terms of Service
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Last Updated: March 2026 • Effective Date: March 2026
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              These Terms and Conditions govern your access to and use of the Campus Saathi mobile application and website. By downloading, installing, or using Campus Saathi, you agree to be bound by these terms. If you do not agree, please do not use the application.
            </p>
          </div>

          {/* Terms Content */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-10 text-slate-600 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Acceptable Use */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">1.</span>
                <span>Acceptable Use & Eligibility</span>
              </h2>
              <p>
                Campus Saathi is intended to aid college and university students in managing academic schedules, calculating grades, tracking personal lecture attendance, discovering collegiate events, and accessing student tools. You must use the service only for lawful, personal, and academic purposes.
              </p>
            </section>

            {/* 2. User Accounts */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">2.</span>
                <span>User Accounts & Security</span>
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify the developer of any unauthorized use or security breach.
              </p>
            </section>

            {/* 3. Academic Content & Copyright Responsibility */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">3.</span>
                <span>Academic Content & Copyright Policy</span>
              </h2>
              <p>
                Campus Repository and Campus Events allow users to contribute academic materials and announcements. You maintain ownership of original materials you create, but you grant Campus Saathi a non-exclusive license to host and display such content for peer academic utility.
              </p>
              <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200 space-y-2 text-sm text-slate-800 shadow-xs">
                <p className="font-bold text-brand-900">
                  Important Responsible-Content Requirement:
                </p>
                <p className="font-semibold text-slate-900">
                  "Students should only upload or share materials they have the right or permission to distribute."
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Uploading copyright-infringing textbooks, leaked examination answer keys, commercial publishing materials, or proprietary faculty assessments without permission is strictly prohibited. Campus Saathi will promptly remove infringing materials upon receiving a verifiable notice.
                </p>
              </div>
            </section>

            {/* 4. Prohibited Activities */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">4.</span>
                <span>Prohibited Activities</span>
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>Attempting to bypass, reverse engineer, or decompile the application or backend APIs.</li>
                <li>Submitting fraudulent event listings, malicious links, or advertising spam.</li>
                <li>Harassing, threatening, or impersonating other students, university officials, or organizers.</li>
                <li>Interfering with network infrastructure, automating mass downloads, or overloading services.</li>
              </ul>
            </section>

            {/* 5. Tool Disclaimers */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">5.</span>
                <span>Calculators & ATS Tool Disclaimers</span>
              </h2>
              <p>
                The CGPA/SGPA calculators, attendance safe-bunk forecasts, and ATS resume checker are provided solely as informational planning aids. University grading scales, rounding rules, and official attendance records maintained by your institution take precedence over any estimates generated by the app. The ATS Resume Checker does not guarantee job interview selection or employment.
              </p>
            </section>

            {/* 6. Intellectual Property */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">6.</span>
                <span>Intellectual Property Rights</span>
              </h2>
              <p>
                The Campus Saathi application name, logo, user interface designs, and code are the intellectual property of Abhay Kushwaha. You may not copy, reproduce, or redistribute our brand assets without explicit written authorization.
              </p>
            </section>

            {/* 7. Disclaimer of Warranties */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">7.</span>
                <span>Disclaimer of Warranties</span>
              </h2>
              <p className="text-slate-600 text-sm">
                Campus Saathi is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular academic purpose, or non-infringement. We do not warrant that service will be uninterrupted, bug-free, or entirely error-free.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">8.</span>
                <span>Limitation of Liability</span>
              </h2>
              <p className="text-slate-600 text-sm">
                To the maximum extent permitted by applicable law, the developers and contributors of Campus Saathi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the application or repository materials.
              </p>
            </section>

            {/* 9. Modifications to Terms */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">9.</span>
                <span>Modifications to Terms</span>
              </h2>
              <p>
                We reserve the right to revise these Terms & Conditions as the application matures. When changes are made, we will update the date at the top of this document. Continued use of Campus Saathi constitutes acceptance of revised terms.
              </p>
            </section>

            {/* 10. Contact */}
            <section className="space-y-3 border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">10.</span>
                <span>Contact Information</span>
              </h2>
              <p>
                For questions regarding these Terms & Conditions, contact:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1.5 shadow-xs">
                <div><strong className="text-slate-900">Developer:</strong> Abhay Kushwaha</div>
                <div><strong className="text-slate-900">Email:</strong> <a href="mailto:mauryaabhay938@gmail.com" className="text-brand-600 font-semibold hover:underline">mauryaabhay938@gmail.com</a></div>
              </div>
            </section>

          </div>

        </div>
      </div>
    </>
  );
};
