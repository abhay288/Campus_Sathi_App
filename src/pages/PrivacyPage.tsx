import React from 'react';
import { Smartphone, Bell, Camera, HardDrive } from 'lucide-react';
import { Seo } from '../components/Seo';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <Seo 
        title="Privacy Policy – Campus Saathi"
        description="Official Privacy Policy for Campus Saathi: read how we handle your account details, permissions, local files, and advertising compliance."
        canonicalPath="/privacy"
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-4 border-b border-slate-200 pb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Last Updated: March 2026 • Effective Date: March 2026
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              At Campus Saathi ("we", "our", or "us"), protecting student privacy is fundamental to how we build our application. This Privacy Policy details the types of information we collect, how that information is utilized, your rights, and how your data is protected when using the Campus Saathi mobile application and website.
            </p>
          </div>

          {/* Policy Body */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-10 text-slate-600 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">1.</span>
                <span>Information We Collect</span>
              </h2>
              <p>
                We only collect data necessary to provide and improve the functionality of Campus Saathi. We do not sell your personal information to third parties.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li><strong className="text-slate-900">Account Information:</strong> When you register or sign in, we collect your email address, name, and optional profile details (such as your institution, branch, and semester) to personalize your academic timetable and repository filters.</li>
                <li><strong className="text-slate-900">User-Entered Academic Records:</strong> Course names, attendance records, assignment deadlines, and grade calculation inputs that you manually enter into the app.</li>
                <li><strong className="text-slate-900">Community Contributions:</strong> Academic study notes, previous year question papers, or campus event announcements that you voluntarily submit to the Campus Repository or Events Hub.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">2.</span>
                <span>Device Permissions & Usage</span>
              </h2>
              <p>
                Campus Saathi requests specific Android system permissions only when you interact with features that require them:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Camera className="w-4 h-4 text-brand-600" />
                    <span>Camera Permission</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Used exclusively by the Smart Document Scanner to capture physical lecture notes or assignment pages. Images are processed locally on your device.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <HardDrive className="w-4 h-4 text-emerald-600" />
                    <span>Storage / Photo Selection</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Used to import images for background removal, select academic documents for upload, and export scanned PDFs to your local storage.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Bell className="w-4 h-4 text-indigo-600" />
                    <span>Notifications Permission</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Used to trigger upcoming lecture alerts, timetable reminders, and assignment deadline notifications.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-xs">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-sky-600" />
                    <span>Device & Diagnostics</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Non-identifiable hardware model and OS version metrics collected to diagnose stability and eliminate app crashes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">3.</span>
                <span>Local Document & File Processing</span>
              </h2>
              <p>
                We believe that personal documents belong to the student. When using the Smart Document Scanner, Image Resizer, or ATS Resume Builder, files remain on your device. We do not automatically back up, index, or transmit your private scanned assignments or resumes to cloud servers unless you explicitly choose to publish or share a document to the public Campus Repository.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">4.</span>
                <span>Advertising & Google AdMob</span>
              </h2>
              <p>
                Campus Saathi displays advertisements served via Google AdMob to fund domain hosting and infrastructure costs.
              </p>
              <p className="text-sm text-slate-600">
                Google AdMob may collect and process pseudonymous identifiers, device information, and ad interaction metrics to deliver non-personalized or personalized advertisements subject to your device settings and Google's Advertising Policies. You can manage ad personalization through your Android system settings under <em>Settings &gt; Google &gt; Ads</em>.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">5.</span>
                <span>Third-Party Services</span>
              </h2>
              <p>
                Campus Saathi interfaces with selected third-party service providers who process data strictly under confidentiality agreements:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li><strong className="text-slate-900">Google Play Services & AdMob:</strong> For application distribution, crash logging, and advertisement rendering.</li>
                <li><strong className="text-slate-900">Cloud Database & Storage:</strong> For authenticating users, managing user accounts, and hosting community-approved Campus Repository notes and event listings.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">6.</span>
                <span>Data Retention & Deletion</span>
              </h2>
              <p>
                We retain account details as long as your account remains active. You have the right at any time to request the complete deletion of your account and any associated cloud data. You can delete your account from within the app settings or by contacting our support team at <a href="mailto:mauryaabhay938@gmail.com" className="text-brand-600 font-semibold hover:underline">mauryaabhay938@gmail.com</a>. Local app data on your device can be wiped instantly by uninstalling the app or clearing app storage in Android settings.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">7.</span>
                <span>Children's Privacy</span>
              </h2>
              <p>
                Campus Saathi is designed for university and college students (typically 17 years and older). We do not knowingly collect or solicit personal information from children under the age of 13. If we discover that a child under 13 has provided personal data, we take immediate steps to delete such records.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">8.</span>
                <span>Security Measures</span>
              </h2>
              <p>
                We implement industry-standard technical safeguards, including HTTPS TLS encryption for all transit communications, secure authentication tokens, and strict database Row Level Security policies. While no method of digital transmission or storage is impenetrable, we continuously refine our architecture to protect student data against unauthorized access.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">9.</span>
                <span>Changes to this Privacy Policy</span>
              </h2>
              <p>
                We may periodically update this policy to reflect application enhancements or regulatory changes. Updated versions will be posted on this page with a revised "Last Updated" timestamp. Continued use of Campus Saathi following modifications constitutes your acknowledgment of the updated terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3 border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-brand-600">10.</span>
                <span>Contact Us</span>
              </h2>
              <p>
                If you have questions, privacy concerns, or data deletion requests regarding this Privacy Policy, please contact our developer desk:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1.5 shadow-xs">
                <div><strong className="text-slate-900">Developer:</strong> Abhay Kushwaha</div>
                <div><strong className="text-slate-900">Email:</strong> <a href="mailto:mauryaabhay938@gmail.com" className="text-brand-600 font-semibold hover:underline">mauryaabhay938@gmail.com</a></div>
                <div><strong className="text-slate-900">Application:</strong> Campus Saathi</div>
              </div>
            </section>

          </div>

        </div>
      </div>
    </>
  );
};
