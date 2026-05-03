import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      <header className="px-6 py-6 border-b border-slate-200 bg-white">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg text-slate-600 max-w-none">
          <p>Last updated: May 10, 2026</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or directly contact us. This may include your name, email address, and billing information.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information, including confirmations and receipts.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access. All billing data is handled by secure third-party processors.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Sharing of Information</h2>
          <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processors) or to comply with the law.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500 mt-20">
        <div className="container mx-auto">
          <p className="font-bold text-slate-400 uppercase tracking-widest">© 2026 AgentSkills.pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
