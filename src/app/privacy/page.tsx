import Link from 'next/link';

export default function PrivacyPolicy() {
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
        </div>
      </header>

      {/* CONTENT */}
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E1A]/5 to-brand-lime/5 rounded-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 font-medium mb-10">Effective date: October 10, 2026</p>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
              <p>
                FreakyFit ("we", "our", or "the app") is a fitness application designed to help users save and organize workout content and manage their fitness routines.
              </p>
              <p>
                This Privacy Policy explains how FreakyFit collects, uses, stores, and protects personal information.
              </p>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">1. Information We Collect</h2>
                <p className="mb-2">Depending on the features you use, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account information:</strong> Information associated with your Google Sign-In account, such as your name, email address, and profile image, where provided.</li>
                  <li><strong>Workout information:</strong> Workout plans, saved exercises, and other fitness content you create or save within the app.</li>
                  <li><strong>Technical information:</strong> Device type, operating system, app version, and diagnostic information where collected by the app or its third-party services.</li>
                </ul>
                <p className="mt-4">We do not intentionally collect medical records or sensitive health information unless a feature explicitly requires it and appropriate disclosures are provided.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">2. How We Use Information</h2>
                <p className="mb-2">We use information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain app functionality.</li>
                  <li>Authenticate users and manage accounts.</li>
                  <li>Save and synchronize user content where supported.</li>
                  <li>Improve app performance, security, and reliability.</li>
                  <li>Respond to support requests and comply with applicable laws.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">3. Google Sign-In</h2>
                <p>
                  FreakyFit supports Google Sign-In. When you sign in, Google may provide account information according to the permissions you authorize.
                </p>
                <p className="mt-2">
                  Your use of Google Sign-In is also subject to Google's privacy policy: <a href="https://policies.google.com/privacy" className="text-[#FF5E1A] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">4. Sharing of Information</h2>
                <p className="mb-2">We do not sell personal information to third parties.</p>
                <p>Information may be processed by service providers that support authentication, hosting, storage, analytics, or other app functionality, where those services are used. Information may also be disclosed when required by law.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">5. Data Storage and Security</h2>
                <p className="mb-2">We use reasonable measures to protect information against unauthorized access, loss, or misuse. No method of electronic storage or transmission is completely secure.</p>
                <p>Information may be stored on your device or on service-provider servers, depending on the features you use.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">6. Data Retention and Deletion</h2>
                <p className="mb-2">We retain information for as long as necessary to provide the app, fulfill legitimate operational requirements, and comply with applicable laws.</p>
                <p>To request deletion of your account and associated personal data, contact us using the email address below. We will process requests in accordance with applicable legal requirements.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">7. Children's Privacy</h2>
                <p>FreakyFit is intended for users aged 18 and over and is not designed specifically for children.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">8. Third-Party Services</h2>
                <p>The app may rely on third-party services to provide its functionality. These providers may process information under their own privacy policies.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. The latest version will be available at the public URL where this policy is published.</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-white mb-3">10. Contact Us</h2>
                <p className="mb-2">For privacy-related questions or data deletion requests, contact:</p>
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
          <div className="text-xs text-gray-500">
            © 2026 FreakyFit. All rights reserved. • <Link className="hover:text-[#FF5E1A] transition-colors" href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
