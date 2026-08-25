import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Code, Brain } from 'lucide-react';

export default function AgentBookHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur px-4 py-2 rounded-full mb-6 border border-purple-400/30">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Free Educational Resource</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Nisar AI Agent Book
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Master AI agent architecture, design patterns, and production-ready implementation. 
            9 comprehensive chapters. Zero dependencies. Learn anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Read the Book
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-400/50 rounded-lg font-semibold hover:bg-purple-500/20 transition-all"
            >
              View on GitHub
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:border-purple-400/50 transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Chapter Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">9 Comprehensive Chapters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chapters.map((ch, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-400/50 transition-all cursor-pointer group"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{ch.emoji}</div>
                <h3 className="font-semibold mb-2">{ch.title}</h3>
                <p className="text-sm text-slate-400">{ch.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🧠',
    title: 'Agent Architecture',
    desc: 'Learn core concepts and system design patterns'
  },
  {
    icon: '⚙️',
    title: 'Interactive Simulator',
    desc: 'See agents in action with live demonstrations'
  },
  {
    icon: '🔒',
    title: 'Production Ready',
    desc: 'Security, validation, and scalability patterns'
  },
  {
    icon: '📱',
    title: 'Mobile Responsive',
    desc: 'Learn on any device, anytime, anywhere'
  }
];

const chapters = [
  {
    emoji: '🏗️',
    title: 'Agent Architecture',
    desc: 'Foundational concepts and system components'
  },
  {
    emoji: '💾',
    title: 'Memory & Tools',
    desc: 'Agent capabilities and context management'
  },
  {
    emoji: '🧩',
    title: 'Planning & Reasoning',
    desc: 'Intent recognition and decision-making'
  },
  {
    emoji: '⚡',
    title: 'Runtime Execution',
    desc: 'Lifecycle management and execution loops'
  },
  {
    emoji: '🔐',
    title: 'Security & Validation',
    desc: 'Safe execution and input validation'
  },
  {
    emoji: '🚀',
    title: 'Production Architecture',
    desc: 'Deployment and scaling patterns'
  },
  {
    emoji: '📊',
    title: 'Observability',
    desc: 'Monitoring and debugging techniques'
  },
  {
    emoji: '🔄',
    title: 'Advanced Patterns',
    desc: 'Multi-agent systems and orchestration'
  },
  {
    emoji: '🎯',
    title: 'Real-World Applications',
    desc: 'Practical implementation examples'
  }
];
