import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - FreakyFit',
  description: 'Terms of Service and user agreement for the FreakyFit mobile application and web platform.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-brand-dark text-gray-300 font-sans selection:bg-brand-lime selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-borderLime flex items-center justify-center p-1 shadow-[0_0_15px_rgba(255,94,26,0.25)] group-hover:border-brand-lime transition-colors">
              <img src="/logo.svg" alt="FreakyFit Logo" className="w-full h-auto object-contain" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-white">
              Freaky<span className="text-[#FF5E1A]">Fit</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E1A]/5 to-brand-lime/5 rounded-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 font-medium mb-10">Effective date: October 10, 2026</p>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
              <p>
                Welcome to FreakyFit. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the FreakyFit mobile application, website, and related services (collectively, the &quot;Service&quot;), operated by Truemind Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p>
                By downloading, accessing, or using FreakyFit, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
              </p>

              {/* MEDICAL DISCLAIMER CALLOUT */}
              <div className="p-6 rounded-2xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 text-white">
                <div className="flex items-center gap-2 font-display font-bold text-lg text-[#FF5E1A] mb-2">
                  <span>⚠️</span>
                  <h2>IMPORTANT HEALTH & MEDICAL DISCLAIMER</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-200">
                  FreakyFit is an organizational, educational, and fitness tracking tool. We are not a medical healthcare organization, and our workouts, routines, and AI exercise recommendations do not constitute medical advice, diagnosis, or treatment. 
                  Always consult a qualified physician before starting any diet or exercise program. If you experience faintness, dizziness, shortness of breath, or physical pain during any workout, discontinue immediately and seek medical attention. You perform all exercises at your own risk.
                </p>
              </div>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">1. Eligibility & User Accounts</h2>
                <p className="mb-2">To use FreakyFit, you represent and warrant that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are at least 13 years of age (or the age of legal majority in your jurisdiction).</li>
                  <li>You have the legal capacity to enter into these binding Terms.</li>
                  <li>You provide accurate, current, and complete information during registration and keep your account details up to date.</li>
                  <li>You are responsible for safeguarding your authentication credentials (such as Google Sign-In) and for all activities that occur under your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">2. Social Video Import & AI Extraction</h2>
                <p className="mb-2">
                  FreakyFit offers smart import features allowing you to paste publicly accessible social media links (e.g., YouTube, TikTok, Instagram Reels) to extract workouts, exercises, timestamps, and routine notes.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You agree to use this feature solely for your private, non-commercial fitness logging and reference.</li>
                  <li>FreakyFit does not claim ownership of third-party video content or media referenced via social links. All original video rights belong to their respective creators and hosting platforms.</li>
                  <li>Your use of third-party platforms is subject to their respective terms and policies.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">3. Subscriptions, In-App Purchases & Billing</h2>
                <p className="mb-2">
                  FreakyFit may offer premium subscriptions (&quot;FreakyFit Pro&quot;) providing access to unlimited AI imports, advanced mesocycle planners, and progressive overload telemetry.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Billing:</strong> Subscriptions and purchases are processed through the Apple App Store or Google Play Store. Payment is charged to your store account at confirmation of purchase.</li>
                  <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours prior to the end of the current billing cycle.</li>
                  <li><strong>Management & Cancellation:</strong> You can manage or cancel your subscription anytime in your Apple ID or Google Play Store account settings.</li>
                  <li><strong>Refunds:</strong> All refund requests are handled directly by Apple or Google in accordance with their respective app store policies.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">4. Intellectual Property Rights</h2>
                <p className="mb-2">
                  The Service, including its design, branding, logo, code, features, algorithms, and interfaces, is owned by Truemind Labs and is protected by copyright, trademark, and other applicable intellectual property laws.
                </p>
                <p>
                  We grant you a limited, personal, non-exclusive, non-transferable, revocable license to use the app for personal, non-commercial fitness tracking.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">5. User Content & Data</h2>
                <p className="mb-2">
                  You retain ownership of the data, custom workouts, notes, and training logs you create (&quot;User Content&quot;).
                </p>
                <p>
                  By creating User Content within FreakyFit, you grant us a worldwide, non-exclusive license to host, store, and process such content solely as necessary to provide, maintain, and optimize the Service for you.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">6. Prohibited Conduct</h2>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Decompile, reverse engineer, or attempt to extract source code from FreakyFit.</li>
                  <li>Bypass or disable any security measures, rate limits, or subscription paywalls.</li>
                  <li>Use automated bots, scrapers, or scripts to access or extract data from the Service.</li>
                  <li>Transmit harmful code, viruses, or interfere with server performance and data integrity.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">7. Disclaimers & Limitation of Liability</h2>
                <p className="mb-2">
                  THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRUEMIND LABS AND ITS OFFICERS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, OR PERSONAL INJURY ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">8. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to the Service at our sole discretion, without prior notice, if you breach these Terms or engage in fraudulent or unlawful activities.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">9. Governing Law & Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Truemind Labs operates, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">10. Modifications to Terms</h2>
                <p>
                  We may revise these Terms from time to time. When changes are made, we will update the &quot;Effective date&quot; at the top of this page. Your continued use of the Service following posted changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">11. Contact Information</h2>
                <p className="mb-2">If you have questions, concerns, or legal inquiries regarding these Terms, please reach out to us:</p>
                <ul className="space-y-1">
                  <li><strong>App:</strong> FreakyFit</li>
                  <li><strong>Developer:</strong> Truemind Labs</li>
                  <li><strong>Email:</strong> <a href="mailto:support@truemindlabs.com" className="text-[#FF5E1A] hover:underline">support@truemindlabs.com</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 glass-panel mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-borderLime flex items-center justify-center p-1">
              <img src="/logo.svg" alt="FreakyFit Logo" className="w-full h-auto object-contain" />
            </div>
            <span className="font-display font-bold text-lg text-white">FreakyFit</span>
            <span className="text-xs text-gray-500 ml-2">Turn saved workouts into trackable routines</span>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span>© 2026 FreakyFit. All rights reserved.</span>
            <span>•</span>
            <Link className="hover:text-[#FF5E1A] transition-colors" href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link className="hover:text-[#FF5E1A] transition-colors" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
