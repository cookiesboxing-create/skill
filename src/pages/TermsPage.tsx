import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate prose-lg text-slate-600 max-w-none">
          <p>Last updated: May 10, 2026</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using AgentSkills.pro, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Use of Service</h2>
          <p>You agree to use our agent skills and APIs responsibly. You must not use the services for any illegal or unauthorized purpose.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Subscriptions and Payments</h2>
          <p>All payments are securely processed. Subscriptions are billed on a recurring basis as outlined at the time of purchase. You can cancel your subscription at any time.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p>The code, schemas, and architecture provided by AgentSkills.pro remain the intellectual property of our platform and respective creators. You are granted a license to use these skills in your own applications.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Limitation of Liability</h2>
          <p>AgentSkills.pro shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use the services.</p>
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
