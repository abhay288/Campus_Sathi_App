import React, { useState } from 'react';
import { 
  HelpCircle, 
  Mail, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { JsonLd } from '../components/JsonLd';

export const SupportPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [topic, setTopic] = useState('General Inquiry');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const faqItems = [
    {
      q: "How do I log in or reset my account credentials?",
      a: "Campus Saathi uses secure authentication mechanisms. If you signed in via email or OAuth, you can use the built-in password reset link on the login screen to receive a verification email."
    },
    {
      q: "How do I submit study notes or PYQ papers to Campus Repository?",
      a: "Navigate to the Campus Repository screen in the app, tap the '+' or 'Contribute' button, fill in your college, branch, semester, and course code, and attach your document. Submissions are reviewed by administrators prior to public listing."
    },
    {
      q: "How can I post an upcoming college event or hackathon?",
      a: "In the Campus Events section, click 'Submit Event' and provide the event title, dates, mode (online/in-person), venue, organizer name, and official registration link. After moderation, the event will appear in the directory."
    },
    {
      q: "Where are documents scanned with the Smart Scanner stored?",
      a: "Scanned files and exported PDFs are saved locally on your Android device in your standard downloads/documents folder. They are not uploaded to our servers unless you choose to share them."
    },
    {
      q: "How does the Resume Builder work and what does ATS analysis mean?",
      a: "The Resume Builder organizes your education, projects, and work history into standard ATS-friendly formats with clean PDF output. The ATS checker inspects section structure and keyword presence. Note that ATS feedback is informational and does not guarantee employer selection."
    },
    {
      q: "Why do I see advertisements in the app?",
      a: "Campus Saathi displays non-intrusive advertisements (via Google AdMob) to offset operational costs, domain hosting, and server infrastructure while keeping academic features accessible to students."
    },
    {
      q: "How can I report inappropriate content or copyright violations?",
      a: "You can tap the 'Report' button on any repository resource or event card inside the app, or send an email directly to mauryaabhay938@gmail.com with the document title and reason for removal."
    },
    {
      q: "What should I do if the app crashes or encounters a bug?",
      a: "Please send an email to mauryaabhay938@gmail.com with your device model, Android version, and a brief description of the action that caused the error. We investigate and resolve crash logs promptly."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Campus Saathi Support] ${topic}`);
    const body = encodeURIComponent(`User Email: ${email}\n\nIssue Description:\n${message}`);
    window.location.href = `mailto:mauryaabhay938@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Seo 
        title="Help & Support – Campus Saathi"
        description="Need help with Campus Saathi? Browse answers to common topics or contact developer support directly."
        canonicalPath="/support"
      />
      <JsonLd pageType="faq" faqItems={faqItems.map(f => ({ question: f.q, answer: f.a }))} />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Help Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Need Help with Campus Saathi?
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We're here to assist. Find answers to common questions about your account, features, or submit a support inquiry directly to our development team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* FAQ Accordion Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center space-x-2.5">
                <HelpCircle className="w-6 h-6 text-brand-600" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-3">
                {faqItems.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-bold text-slate-900">
                          {item.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-brand-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Support Form Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-brand-600" />
                    <span>Contact Support</span>
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Have a specific question, bug report, or content takedown request? Send a direct message to our support desk.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="topic" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Topic
                    </label>
                    <select
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 font-medium focus:outline-none focus:border-brand-500 focus:bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Account or Login Issue">Account or Login Issue</option>
                      <option value="Repository & Resource Issue">Repository & Resource Issue</option>
                      <option value="Campus Events Listing">Campus Events Listing</option>
                      <option value="Smart Scanner Support">Smart Scanner Support</option>
                      <option value="Resume Builder Support">Resume Builder Support</option>
                      <option value="AdMob or Advertising">AdMob or Advertising</option>
                      <option value="Report Inappropriate Content">Report Inappropriate Content / Copyright</option>
                      <option value="Technical Bug or Crash">Technical Bug or Crash</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your issue or question in detail..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Support</span>
                  </button>
                </form>

                {submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Opening your email client to send your inquiry directly to our support desk.</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span>Direct developer contact: </span>
                  <a href="mailto:mauryaabhay938@gmail.com" className="text-brand-600 font-semibold hover:underline">
                    mauryaabhay938@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
