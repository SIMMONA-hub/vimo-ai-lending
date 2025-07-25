'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Sparkles, ArrowRight, Users, Trophy, Zap } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated Background - тот же гиф что и на главной */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/girl.gif"
            alt="Background Animation"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/70 to-black/80"></div>
      </div>

      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/30 border-b border-slate-600/20 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/StudyMateAI.png" alt="VimoAI" width={32} height={32} className="w-8 h-8" /> 
            <span className="text-2xl font-bold text-white">
              VimoAI
            </span> 
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/')}
            className="relative overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-white/20 transition-all duration-300"
          >
            <span className="relative z-10">Back</span>
          </motion.button>
        </nav>
      </motion.header>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-bounce"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <motion.section 
          className="container mx-auto px-6 pt-16 pb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Message */}
            <motion.div
              className="bg-gradient-to-br from-slate-800/10 to-gray-900/15 backdrop-blur-lg border border-slate-600/20 rounded-3xl p-12 mb-12 shadow-2xl relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative elements */}
                             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-xl"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-400/10 to-transparent rounded-full blur-lg"></div>
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20 relative z-10"
                variants={itemVariants}
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-lg font-semibold text-white">New Startup Project</span>
              </motion.div>

              <motion.h1 
                className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white relative z-10"
                variants={itemVariants}
              >
                Welcome to 
                <br />
                <span className="text-pink-400">
                  VimoAI Beta Version
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto relative z-10"
                variants={itemVariants}
              >
                This is an innovative startup project! 🚀 We are currently in the development and testing phase. 
                For our early users, access to the platform is completely free.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-yellow-600/15 to-orange-600/15 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6 mb-8 relative z-10"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                  <span className="text-lg font-semibold text-white">Attention!</span>
                </div>
                <p className="text-white text-lg">
                  The extension is currently being improved and enhanced. 
                  We would love to hear your feedback and suggestions!
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                className="bg-gradient-to-br from-slate-800/10 to-gray-800/15 backdrop-blur-sm border border-slate-500/20 rounded-xl p-8 mb-10 relative z-10"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-white" />
                  <span className="text-xl font-semibold text-white">Contact Us!</span>
                </div>
                <p className="text-white/80 mb-4 text-lg">
                  If you have any comments, suggestions, or questions:
                </p>
                <motion.a
                  href="mailto:splantflower@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-lg">splantflower@gmail.com</span>
                </motion.a>
              </motion.div>

              {/* Benefits */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-10 relative z-10"
                variants={itemVariants}
              >
                {[
                  {
                    icon: <Users className="w-8 h-8 text-white" />,
                    title: "Early Users",
                    description: "Free access to all features"
                  },
                  {
                    icon: <Heart className="w-8 h-8 text-white" />,
                    title: "Your Feedback",
                    description: "Helps us improve the product"
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-white" />,
                    title: "Active Development",
                    description: "New features every week"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/10 to-gray-800/15 backdrop-blur-sm border border-slate-500/20 rounded-xl p-6 text-center hover:border-white/30 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Get Started Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://chromewebstore.google.com/detail/studymate-ai-pomodoro-tim/oggjhglkgaeichocgelifibgdhklmnbb', '_blank')}
                className="relative overflow-hidden group bg-white text-black px-12 py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto relative z-10 hover:bg-gray-100"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

            </motion.div>

            {/* Footer Message */}
            <motion.div
              className="text-center relative"
              variants={itemVariants}
            >
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent rounded-2xl"></div>
              <p className="text-white/70 text-lg relative z-10">
                Thank you for choosing VimoAI! 
                <br />
                Together we&apos;re creating the future of personalized learning ✨
              </p>
            </motion.div>

          </div>
        </motion.section>
      </main>
    </div>
  );
} 