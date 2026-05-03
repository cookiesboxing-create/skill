import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      <header className="px-6 py-6 border-b border-slate-200 bg-white">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">About Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are the team behind AgentSkills.pro, dedicated to accelerating the AI revolution by providing robust, production-ready tools for developers.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" /> Our Mission
              </h2>
              <div className="prose prose-slate prose-lg text-slate-600">
                <p>
                  At Cookies Consulting INC, we believe that building autonomous AI agents shouldn't require weeks of boilerplate code and API wrestling. Our mission is to democratize access to high-quality integrations, allowing developers and companies to focus on their core logic rather than reinventing the wheel.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-indigo-600" /> Company Info
              </h2>
              <div className="bg-slate-50 p-6 rounded-inset-none border border-slate-100 rounded-xl">
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <strong className="text-slate-900 min-w-[120px]">Company Name:</strong>
                    <span>Cookies Consulting INC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <strong className="text-slate-900 min-w-[120px]">Headquarters:</strong>
                    <span>100 AI Boulevard, Suite 404<br/>San Francisco, CA 94107</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <strong className="text-slate-900 min-w-[120px]">Contact:</strong>
                    <a href="mailto:hello@agentskills.pro" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">hello@agentskills.pro</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500 mt-12">
        <div className="container mx-auto">
          <p className="font-bold text-slate-400 uppercase tracking-widest">© 2026 AgentSkills.pro by Cookies Consulting INC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
