import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export default function AccessPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      <header className="px-6 py-6 border-b border-slate-200 bg-white">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Get Instant Access</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join 10,000+ developers saving hundreds of hours on tool integration. 
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-indigo-600 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Annually</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pro Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative flex flex-col">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Pro Developer</h2>
              <p className="text-slate-500 font-medium">Perfect for indie hackers and solo devs.</p>
            </div>
            
            <div className="mb-8 border-b border-slate-100 pb-8 flex-grow">
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-extrabold text-slate-900">${isAnnual ? '79' : '99'}</span>
                <span className="text-slate-500 font-medium mb-1">/mo</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Access to 500+ standard skills",
                  "100 API requests / min rate limit",
                  "Community Discord access",
                  "Basic error parsing",
                  "Email support"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                     <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors shadow-lg mt-auto">
              Choose Pro
            </button>
          </div>

          {/* Agency Plan */}
          <div className="bg-indigo-600 rounded-3xl p-8 shadow-2xl relative flex flex-col transform md:-translate-y-4 border border-indigo-500">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
              <Zap className="w-4 h-4" /> Most Popular
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-white mb-2">Agency Suite</h2>
              <p className="text-indigo-200 font-medium">For teams shipping AI apps to production.</p>
            </div>
            
            <div className="mb-8 border-b border-indigo-500 pb-8 flex-grow">
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-extrabold text-white">${isAnnual ? '199' : '249'}</span>
                <span className="text-indigo-200 font-medium mb-1">/mo</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Access to ALL 1,000+ premium skills",
                  "Unlimited rate limits",
                  "Private Slack channel",
                  "Advanced error recovery & retries",
                  "Priority 24/7 support",
                  "White-label exports"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start text-white">
                     <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                     <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full py-4 bg-white hover:bg-slate-50 text-indigo-700 font-bold rounded-xl transition-colors shadow-lg mt-auto">
              Choose Agency
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm">
             <ShieldCheck className="w-6 h-6 text-emerald-500" />
             <div className="text-left">
               <p className="font-bold text-slate-900 text-sm">30-Day Money-Back Guarantee</p>
               <p className="text-xs text-slate-500 mt-0.5">If you're not saving time building AI tools, you get a full refund.</p>
             </div>
           </div>
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
