import React from 'react'; import { Twitter, Send } from 'lucide-react';

export default function AboutTaskMorph() { return ( <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 p-8 flex justify-center"> <div className="w-full max-w-6xl"> <header className="flex flex-col md:flex-row items-center justify-between gap-4"> <div className="flex items-center gap-3"> <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-slate-900"> TAP </div> <div> <h1 className="text-2xl font-bold">TaskMorph AI Power</h1> <p className="text-slate-400 text-sm">AI-powered smart freelancing platform</p> </div> </div> <a
href="#features"
className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-600 text-slate-900 font-bold rounded-xl"
> Try Now </a> </header>

<main className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 mt-6 shadow-xl">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            The Future of Freelancing — Smart, Fast, Organized
          </h2>
          <p className="text-slate-400 leading-relaxed">
            TaskMorph AI isn’t just another freelance marketplace — it’s an intelligent system that analyzes
            project descriptions, breaks them into smaller tasks, and automatically assigns each one to the most
            qualified freelancer in real time. It leverages NLP for understanding, ML for matching, and an
            integrated AI assistant for execution.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-800/50 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">How It Works</h3>
              <ol className="space-y-2 text-slate-400">
                <li>
                  <span className="font-bold text-cyan-400">1.</span> Requirement analysis using NLP.
                </li>
                <li>
                  <span className="font-bold text-cyan-400">2.</span> Automatic task segmentation and assignment.
                </li>
                <li>
                  <span className="font-bold text-cyan-400">3.</span> Smart execution with AI assistance.
                </li>
              </ol>
              <div className="flex gap-3 mt-4">
                <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-600 text-slate-900 font-bold rounded-xl">Contact Us</a>
                <a href="#features" className="px-4 py-2 border border-slate-700 text-cyan-400 rounded-xl">Features</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Why TaskMorph?</h3>
              <ul className="list-disc pl-4 text-slate-400 space-y-1">
                <li>Faster delivery through smart segmentation</li>
                <li>Higher quality via expert-based task assignment</li>
                <li>Reduced project management overhead</li>
                <li>Clearer, skill-matched tasks for freelancers</li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="bg-slate-800/60 p-4 rounded-xl">
          <h4 className="font-semibold mb-1">Project Dashboard (Preview)</h4>
          <p className="text-slate-400 text-sm mb-3">
            Quick overview of tasks, progress, and performance insights.
          </p>
          <div className="bg-slate-900/60 p-3 rounded-lg text-sm">
            <strong>Status:</strong> In Progress <br />
            <strong>Tasks:</strong> 12 &nbsp; <strong>Completed:</strong> 5
          </div>
          <p className="text-slate-500 text-xs mt-3">
            Simple APIs for integration with your systems.
          </p>
        </aside>
      </section>

      <section id="features" className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['Intelligent Text Analysis', 'NLP extracts requirements from project descriptions.'],
            ['Automatic Task Segmentation', 'Divides projects into actionable milestones.'],
            ['Instant Matching', 'Recommends the right freelancer instantly.'],
            ['Built-in AI Assistant', 'Provides coding, design, and content suggestions.'],
            ['Integrated Dashboard', 'Manage tasks, communication, and payments.'],
            ['Scalable Reporting', 'Get performance metrics and insights.'],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-slate-800/40 p-4 rounded-xl">
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Who Benefits?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/40 p-4 rounded-xl">
            <h4 className="font-semibold">Project Owners</h4>
            <p className="text-slate-400 text-sm">
              Launch well-structured projects faster with less management hassle.
            </p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl">
            <h4 className="font-semibold">Freelancers</h4>
            <p className="text-slate-400 text-sm">
              Get clearly defined tasks tailored to your skills and maximize earnings.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
        <p className="text-slate-400 text-sm">
          Interested in a demo or integration? Send us a message and we’ll reach back soon.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <a href="mailto:hello@tapwr.com" className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-600 text-slate-900 font-bold rounded-xl">Email Us</a>
          <a href="#" className="px-4 py-2 border border-slate-700 text-cyan-400 rounded-xl">Request Demo</a>
        </div>

        <div className="mt-6 space-y-3 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <Twitter size={18} className="text-cyan-400" />
            <p>
              <strong>Twitter (X):</strong>{' '}
              <a href="https://x.com/TAPsidrachain?s=09" target="_blank" className="text-cyan-400 hover:underline">@TAPsidrachain</a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Send size={18} className="text-cyan-400" />
            <p>
              <strong>Telegram Group:</strong>{' '}
              <a href="https://t.me/GlobalAIPowerofficial" target="_blank" className="text-cyan-400 hover:underline">GlobalAIPowerofficial</a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Send size={18} className="text-cyan-400" />
            <p>
              <strong>Official Telegram Channel:</strong>{' '}
              <a href="https://t.me/tapsidra" target="_blank" className="text-cyan-400 hover:underline">t.me/tapsidra</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
        <div>© <strong>TaskMorph AI Power</strong> — All rights reserved</div>
        <div>Designed for seamless integration and scalability</div>
      </footer>
    </main>
  </div>
</div>

); }

