import { motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Globe2,
  MessageSquare,
  ShieldCheck,
  Star,
  Zap,
  Clock,
  TrendingUp,
  Database,
  Lock,
  Play,
  CheckCircle2,
  Code2,
  Sparkles,
  Activity
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  // Demo State
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState('');
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleRunDemo = () => {
    if (!demoInput.trim()) return;
    setIsDemoLoading(true);
    setDemoOutput('');
    setTimeout(() => {
      setDemoOutput(`{
  "status": "success",
  "analysis": {
    "sentiment": "positive",
    "confidence": 0.94,
    "urgency": "low"
  },
  "message": "Processed successfully via AgentSkill"
}`);
      setIsDemoLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-indigo-500/30 relative flex flex-col">
      
      {/* Background Geometric Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600 -skew-x-12 translate-x-20 z-0 opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      {/* 1. URGENCY BANNER */}
      <div className="bg-indigo-600 text-white px-4 py-3 text-center text-sm md:text-base font-bold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 shadow-lg shadow-indigo-200 relative z-50">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 animate-pulse" />
          <span>ATTENTION: Launch Discount Closes In</span>
        </div>
        <div className="flex items-center gap-1 font-mono text-lg bg-black/30 px-3 py-1 rounded">
          <span>04</span>:<span>12</span>:<span>59</span>
        </div>
      </div>

      {/* 2. MINIMAL HEADER */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-slate-200 bg-white/80 backdrop-blur-sm container mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">AgentSkills</span>
        </div>
      </header>

      {/* 3. HERO SECTION (Direct Response Style) */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6">
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            THE #1 MARKETPLACE FOR AI AGENT SKILLS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight"
          >
            Stop Coding Agent Actions From <span className="text-indigo-600">Scratch.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Download, plug, and play <strong className="text-slate-900 font-bold">1,000+ verified skills</strong> for your LLM agents in seconds. From Stripe billing to Twitter/X posting—give your AI superpowers today.
          </motion.p>
          
          {/* BIG CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <button className="relative w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-3">
              <span>GET INSTANT ACCESS NOW</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2 text-emerald-600 font-semibold"><ShieldCheck className="w-4 h-4" /> 100% Risk-Free Guarantee</span>
              <span className="hidden md:block text-slate-300">|</span>
              <span className="flex items-center gap-2 line-through text-slate-400">Normally $99/mo</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AS SEEN ON / SOCIAL PROOF */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="container mx-auto px-6 overflow-hidden flex flex-col items-center">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by 10,000+ Developers building with</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-50">
            {['LangChain', 'AutoGPT', 'LlamaIndex', 'OpenAI', 'Anthropic'].map((brand, i) => (
              <div key={i} className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tighter uppercase">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-24 px-6 container mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-5xl mx-auto border border-slate-800">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
           
           <div className="text-center mb-10 relative z-10">
             <div className="inline-flex flex-col items-center">
                <span className="flex items-center gap-2 text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                  <Play className="w-4 h-4" /> Live Demo
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                  See an Agent Skill in Action
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                  Test our <strong className="text-white">Sentiment Analyzer</strong> skill below. No signup required. See how it instantly transforms raw text into structured JSON.
                </p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
             {/* Input Area */}
             <div className="flex flex-col gap-4">
               <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-3 text-slate-300 font-bold text-sm">
                   <MessageSquare className="w-4 h-4 text-indigo-400" /> Input Payload
                 </div>
                 <textarea 
                   value={demoInput}
                   onChange={(e) => setDemoInput(e.target.value)}
                   placeholder="Enter some text for the agent to analyze... e.g. 'I absolutely love this new product update!'"
                   className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 text-slate-300 resize-none outline-none focus:border-indigo-500 transition-colors placeholder-slate-600 font-mono text-sm"
                 ></textarea>
                 <button 
                   onClick={handleRunDemo}
                   disabled={isDemoLoading || !demoInput.trim()}
                   className="mt-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                 >
                   {isDemoLoading ? (
                     <><Activity className="w-5 h-5 animate-pulse" /> Processing...</>
                   ) : (
                     <><Zap className="w-5 h-5" /> Run Skill</>
                   )}
                 </button>
               </div>
             </div>

             {/* Output Area */}
             <div className="flex flex-col gap-4">
               <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col h-full relative">
                 <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                     <Code2 className="w-4 h-4 text-emerald-400" /> Output (JSON)
                   </div>
                   {demoOutput && <span className="text-xs text-emerald-500 font-bold flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 200 OK</span>}
                 </div>
                 <div className="flex-1 bg-black/50 border border-slate-800/50 rounded-lg p-4 text-emerald-400 font-mono text-sm overflow-auto">
                   {isDemoLoading ? (
                     <div className="flex items-center gap-2 text-slate-500 opacity-70">
                       <span className="animate-bounce">.</span>
                       <span className="animate-bounce" style={{animationDelay: '0.1s'}}>.</span>
                       <span className="animate-bounce" style={{animationDelay: '0.2s'}}>.</span>
                     </div>
                   ) : demoOutput ? (
                     <pre>{demoOutput}</pre>
                   ) : (
                     <span className="text-slate-600">Awaiting input...</span>
                   )}
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. THE PROBLEM (Agitation) */}
      <section className="py-24 px-6 container mx-auto bg-white border-b border-slate-200 rounded-3xl mb-12 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center p-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              Building Agent Tools Takes <span className="text-rose-600 decoration-rose-200 underline underline-offset-4">Weeks.</span>
            </h2>
            <p className="text-lg text-slate-600">
              You want to build autonomous AI agents that *do* things. But integrating APIs, handling authentication, parsing errors, and writing robust tool schemas is a nightmare.
            </p>
            <ul className="space-y-4 font-medium text-slate-700 text-sm">
              {[
                "Reading outdated API documentation.",
                "Writing complex TypeScript schemas.",
                "Handling rate limits and edge cases manually.",
                "Wasting $1,000s in development time."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="min-w-6 h-6 w-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm mt-0.5">×</div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-sm text-rose-400 shadow-xl overflow-hidden relative w-full"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
             <pre className="overflow-hidden break-words whitespace-pre-wrap">{`Error: Tool validation failed.
Expected { params: { url: string } }, 
Received { url: string }
at OpenAIAgent._execute_tool (..)
at process.processTicksAndRejections
...
TypeError: Cannot read properties
...
RateLimitError: 429 Too Many Requests
`}</pre>
          </motion.div>
        </div>
      </section>

      {/* 6. VALUE PROPOSITION */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-indigo-600 -skew-x-12 translate-x-32 z-0 opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Why leading developers choose <span className="text-indigo-600">AgentSkills</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We provide the highest quality, most reliable actions for your AI agents so you can skip the boilerplate and launch faster.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Unlock powerful AI capabilities",
                  desc: "Give your agent the ability to read emails, write to databases, scrape websites, and more, all with zero complex integration code.",
                  icon: <Sparkles className="w-5 h-5 text-indigo-600" />
                },
                {
                  title: "Build smarter applications faster",
                  desc: "Save hundreds of hours by dropping in pre-built, production-tested schemas that handle retries, rate limits, and type validation natively.",
                  icon: <Zap className="w-5 h-5 text-amber-500" />
                },
                {
                  title: "Monetize your own agent skills",
                  desc: "Created a reliable integration? Publish it on our marketplace and earn recurring revenue from thousands of other developers building AI tools.",
                  icon: <Database className="w-5 h-5 text-emerald-500" />
                }
              ].map((prop, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{prop.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition-colors flex items-center gap-2">
                Explore Skills <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] -z-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2688&auto=format&fit=crop" 
                alt="Code editing environment showing easy integration" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <p className="font-bold text-sm uppercase tracking-wider text-emerald-400">Time Saved</p>
                </div>
                <p className="font-extrabold text-3xl">40+ Hours</p>
                <p className="text-xs text-slate-400 mt-1">Avg. per developer per project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED SKILLS */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Star className="w-4 h-4" /> TRENDING NOW
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Featured Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Explore some of the most powerful and popular skills used by top AI developers and automation agencies right now.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Stripe Auto-Biller",
              desc: "Provide your agent full capability to generate invoices, check subscription status, and handle refunds via Stripe.",
              creator: "@finTechBot",
              price: "$49/mo",
              sold: "2.4k",
              icon: <Database className="w-8 h-8 text-indigo-600" />,
              iconBg: "bg-indigo-100"
            },
            {
              name: "Adv. Web Scraper",
              desc: "A headless browser skill that navigates complex SPAs, bypasses captchas, and extracts structured JSON data from any URL.",
              creator: "@dataMine",
              price: "$29/mo",
              sold: "8.1k",
              icon: <Globe2 className="w-8 h-8 text-emerald-600" />,
              iconBg: "bg-emerald-100",
              badge: "Bestseller"
            },
            {
              name: "X/Twitter Thread Gen",
              desc: "Let your agent automatically format content, post threads, analyze replies, and manage Twitter scheduling natively.",
              creator: "@growthHacker",
              price: "$19/mo",
              sold: "3.2k",
              icon: <MessageSquare className="w-8 h-8 text-amber-600" />,
              iconBg: "bg-amber-100"
            }
          ].map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden transition-all group flex flex-col h-full"
            >
              {skill.badge && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  {skill.badge}
                </div>
              )}
              <div className="flex flex-col mb-4">
                <div className={`w-16 h-16 ${skill.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl text-slate-900 mb-1">{skill.name}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-3">by {skill.creator}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {skill.desc}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-bold text-slate-900">{skill.price}</p>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-600">{skill.sold}</span>
                  </div>
                </div>
                <button className="px-4 py-3 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold rounded-xl transition-colors w-full">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 font-bold rounded-xl transition-colors">
            View All 1,000+ Skills
          </button>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Social Proof) */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-600 skew-x-12 -translate-x-32 z-0 opacity-5 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">
            "We shipped <span className="text-indigo-600">3 weeks</span> faster."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "I used to spend days reading API docs just to let my LLM send an email. Picked up the Gmail skill for $15 here and integrated it in 4 minutes. Absolute game changer.",
                name: "Sarah J.",
                role: "Indie Hacker",
                initials: "SJ"
              },
              {
                text: "The quality of these skills is insane. They actually handle the edge cases and rate limits. My agency now buys a skill here before we ever write custom integration code.",
                name: "Marcus T.",
                role: "AI Agency Owner",
                initials: "MT"
              }
            ].map((auth, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-600 font-medium mb-8 leading-relaxed">"{auth.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                    {auth.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{auth.name}</p>
                    <p className="text-sm text-slate-500">{auth.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA (Urgency + Opt-in) */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-900 border-t border-slate-800">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[100px] -z-10 rounded-t-full pointer-events-none"></div>

        <div className="container mx-auto text-center max-w-4xl relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
            Ready to <span className="text-indigo-400">Ship Faster?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium max-w-2xl">
            Join 10,000+ developers accelerating their AI builds.
          </p>
          
          <div className="max-w-xl mx-auto flex flex-col gap-4 w-full">
            <div className="bg-white p-2 flex flex-col sm:flex-row shadow-2xl shadow-indigo-500/10 min-h-[64px] rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-indigo-500/50 transition-all">
              <input 
                type="email" 
                placeholder="Enter your best email address..." 
                className="flex-1 text-slate-900 px-4 py-3 sm:py-0 outline-none text-lg font-medium bg-transparent placeholder-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 sm:py-0 transition-colors text-lg sm:rounded-xl shadow-lg shadow-indigo-200"
              >
                Access Now
              </button>
            </div>
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2 font-medium mt-2">
              <Lock className="w-4 h-4" /> Secure 256-bit encryption. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="font-bold text-slate-400 uppercase tracking-widest">© 2026 AgentSkills.pro. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-semibold">
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
