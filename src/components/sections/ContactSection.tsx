"use client"
 
import { motion } from "motion/react";
import { Mail, ArrowUpRight, MessageSquare } from "lucide-react";
 
export const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      <div className="max-container flex flex-col items-center">
        {/* Konten */}
        <motion.div
          className="flex flex-col items-center text-center max-w-5xl px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs">
            <MessageSquare size={16} />
            <span>Open for Collaboration</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Let&apos;s Build the Future Together.
          </h2>
 
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl text-justify md:text-center">
            Whether you have a question or just want to say hi, my inbox is always open. 
            I&apos;m currently looking for new opportunities.
          </p>
 
          {/* Main Action Call */}
          <motion.a
            href="mailto:luviaprilyansyahg@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 bg-yellow-600 text-white rounded-full font-bold shadow-2xl shadow-yellow-600/20 hover:bg-yellow-700 transition-all flex items-center gap-2 text-lg mb-16"
          >
            Say Hello
            <Mail size={20} />
          </motion.a>
  
          {/* Social Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl font-bold">
            <a 
              href="https://github.com/leapwithluvi"
              target="_blank"
              className="flex items-center justify-center gap-2 p-4 glass rounded-2xl hover:bg-muted transition-all group"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:text-yellow-600 transition-colors"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/luviaprilyansyahgabriel"
              target="_blank"
              className="flex items-center justify-center gap-2 p-4 glass rounded-2xl hover:bg-muted transition-all group"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:text-yellow-600 transition-colors"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/byl.rooks"
              target="_blank"
              className="flex items-center justify-center gap-2 p-4 glass rounded-2xl hover:bg-muted transition-all group"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:text-yellow-600 transition-colors"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href="mailto:luviaprilyansyahg@gmail.com"
              className="flex items-center justify-center gap-2 p-4 glass rounded-2xl hover:bg-muted transition-all group"
            >
              <Mail size={20} className="group-hover:text-yellow-600 transition-colors" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
