'use client';

import { motion, Variants } from 'framer-motion';
import { Heart, Star, Gamepad2, Trophy, Sparkles, Zap, Users, Target, BookOpen, Brain, Clock, BarChart2 } from 'lucide-react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleStartFreeTrial = () => {
    router.push('/pricing');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };





  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated Background */}
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
      </div>

      {/* Header - more refined */}
      <motion.header 
        className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-sm"
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
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">Features</a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">How It Works</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">Testimonials</a>
            <button 
              onClick={() => router.push('/pricing')}
              className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
            >
              Pricing
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartFreeTrial}
            className="relative overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-white/20 transition-all duration-300"
          >
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="relative z-10">
        <motion.section 
          className="container mx-auto px-6 pt-24 pb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
                variants={itemVariants}
              >
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">AI-Powered Learning Companion</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="text-white text-shadow-lg">Smarter Studying</span>
                <br />
                <span className="text-white text-shadow-lg">With a Companion Who Feels You</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-white/90 mb-8 leading-relaxed text-shadow"
                variants={itemVariants}
              >
                VimoAI adapts to your learning style, providing personalized support that evolves with your needs. Experience motivation that feels human, with AI that understands you.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStartFreeTrial}
                  className="relative overflow-hidden group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-black/40 transition-all duration-300 border border-white/20"
                >
                  See How It Works
                </motion.button>
              </motion.div>

              {/* Stats - more refined */}
              <motion.div 
                className="flex flex-wrap gap-8"
                variants={itemVariants}
              >
                {[
                  { value: "10k+", label: "Active Learners", icon: <Users className="w-5 h-5 text-white" /> },
                  { value: "4.2/5", label: "Average Rating", icon: <Star className="w-5 h-5 text-white" /> },
                  { value: "24/7", label: "AI Support", icon: <Brain className="w-5 h-5 text-white" /> }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{ y: -3 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white text-shadow">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-full max-w-lg">
                {/* Main hero image */}
                <motion.div 
                  className="relative w-full aspect-square"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                >
                  {/* Glass card effect */}
                  <div className="absolute inset-0 backdrop-blur-lg bg-black/30 rounded-3xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] opacity-5"></div>
                    
                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-48 h-48 mb-6 flex items-center justify-center">
                        <Image 
                          src="/StudyMateAI.png" 
                          alt="VimoAI" 
                          width={192}
                          height={192}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">Vimo</h3>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent mb-4">Your personal study Companion</h3>
                      
                      <p className="text-white/80 mb-6 max-w-md">
                        Adapts to your learning style • Motivates with empathy • Tracks your progress • Makes studying enjoyable
                      </p>
                      
                      {/* Floating indicators */}
                      <div className="flex gap-4">
                        {[
                          { icon: <BookOpen className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
                          { icon: <Clock className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
                          { icon: <BarChart2 className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className={`${item.color} p-3 rounded-xl shadow-sm`}
                            whileHover={{ y: -5, rotate: 5 }}
                          >
                            {item.icon}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-5 -left-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [-5, 5, -5]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <span className="text-sm font-medium">Motivation +100%</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                    animate={{ 
                      y: [10, -10, 10],
                      rotate: [5, -5, 5]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 3
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-500" />
                      <span className="text-sm font-medium">New Achievement!</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Logo Cloud Section */}
        <motion.section 
          className="py-16 border-y border-white/20 bg-transparent/30"
          initial={{ opacity: 0.7 }}
          whileInView={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-6">
            <p className="text-center text-white text-sm uppercase tracking-wider font-extrabold mb-8">Trusted by students at</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {["Harvard", "KBTU", "MIT", "SDU university", "Cambridge", "Berkeley", "Nazarbayev University"].map((uni, index) => (
                <motion.div
                  key={index}
                  className="text-2xl font-black text-white text-shadow-lg hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {uni}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          id="features"
          className="py-24 bg-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 256 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0.5 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Why Choose VimoAI?</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
                  Tools that feel like a
                </span>
                <br />
                <span className="text-white">
                  friend not just features
                </span>
              </motion.h2>
              
              <motion.p
                className="text-lg text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Vimo blends smart AI with gentle structure and cozy motivation, helping you stay focused without the pressure. Learn with care, grow with ease.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-white" />,
                  title: "Adaptive Learning",
                  description: "Vimo gently adjusts study challenges in real time, keeping you engaged and progressing — never stuck, never overwhelmed.",
                  color: "bg-white/20"
                },
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Emotional Support",
                  description: "Your study buddy senses when you're tired or stressed and responds with warmth: a break, encouragement, or a cozy shift in pace.",
                  color: "bg-pink-900/20"
                },
                {
                  icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
                  title: "Gamified Progress",
                  description: "Earn XP, unlock cute rewards, and grow alongside your companion - every study session becomes a mini-adventure.",
                  color: "bg-purple-900/20"
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-400" />,
                  title: "Smart Scheduling",
                  description: "Your energy matters. Vimo plans sessions when you're most focused, so studying fits your rhythm, not the other way around.",
                  color: "bg-blue-900/20"
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-amber-400" />,
                  title: "Personalized Content",
                  description: "Receive hand-picked resources that match your style — from calming videos to hands-on tasks that actually click with you.",
                  color: "bg-amber-900/20"
                },
                {
                  icon: <BarChart2 className="w-8 h-8 text-teal-400" />,
                  title: "Progress Analytics",
                  description: "Understand your growth with kind, insightful feedback. Track focus trends, celebrate wins, and keep your progress feeling real.",
                  color: "bg-teal-900/20"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800/30 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.floor(index/3) * 0.2 + (index%3) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          id="how-it-works"
          className="py-24 bg-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Simple Integration</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
                  Getting Started Is
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                  Effortless
                </span>
              </motion.h2>
              
              <motion.p
                className="text-lg text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Set up VimoAI in minutes and experience personalized learning immediately.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Set Your Goals",
                  description: "Tell us what you're studying and your target outcomes. Our AI will create a customized learning path.",
                  icon: <Target className="w-6 h-6 text-white" />
                },
                {
                  step: "2",
                  title: "Meet Your Companion",
                  description: "Choose your AI study partner's personality and appearance to match your preferences.",
                  icon: <Heart className="w-6 h-6 text-white" />
                },
                {
                  step: "3",
                  title: "Start Learning",
                  description: "Begin your sessions and watch as VimoAI adapts to your unique learning style and needs.",
                  icon: <BookOpen className="w-6 h-6 text-white" />
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-white/10 transition-all duration-300 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white backdrop-blur-sm rounded-2xl flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    {step.icon}
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/80">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          id="testimonials"
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Star className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Success Stories</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-white text-shadow-lg">
                  Loved By
                </span>
                <br />
                <span className="text-white text-shadow-lg">
                  Students Worldwide
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah K.",
                  role: "Medical Student",
                  content: "VimoAI helped me organize my study schedule and stick to it. The emotional support feature is surprisingly effective when I&apos;m feeling overwhelmed.",
                  rating: 5
                },
                {
                  name: "David L.",
                  role: "Computer Science Major",
                  content: "The gamification elements make studying addictive in the best way possible. I&apos;ve never been this consistent with my learning.",
                  rating: 5
                },
                {
                  name: "Emma R.",
                  role: "Law Student",
                  content: "Finally an AI that understands when I need a break versus when I need encouragement to push through. It&apos;s like having a perfect study partner.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-white fill-white" : "text-gray-600"}`} 
                      />
                    ))}
                  </div>
                  <p className="text-white italic mb-6 text-shadow-soft">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-shadow">{testimonial.name}</div>
                      <div className="text-sm text-white">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="relative bg-gray-900/80 rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-white/10 backdrop-blur-sm">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Ready to Transform Your Learning?
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Join thousands of students who&apos;ve made studying more effective and enjoyable with VimoAI.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartFreeTrial}
                    className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm border border-white/20"
                  >
                    <span>Start Free Trial</span>
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent border border-white/20 text-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    See Pricing Plans
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
    <motion.footer 
        className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Image src="/StudyMateAI.png" alt="VimoAI" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-white text-shadow-lg">
                VimoAI
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 mx-auto">
              <a href="#features" className="text-white hover:text-white/80 transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-white/80 transition-colors">Pricing</a>
              <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
              <a href="#blog" className="text-white hover:text-white/80 transition-colors">Blog</a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-4">
              {/* Social media icons would go here ПОТОММ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/80 text-sm">© {new Date().getFullYear()} VimoAI. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
} 
