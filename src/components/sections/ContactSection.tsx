"use client"
 
import { motion } from "motion/react";
import { Mail, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import JsonContactCard from "@/components/JsonContactCard";
import Magnetic from "@/components/ui/Magnetic";
 
export const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      <div className="max-container flex flex-col items-center">
        {/* Content */}
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
          
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Let&apos;s Build the Future Together.
          </h2>
 
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl text-center">
            Whether you have a question or just want to say hi, my inbox is always open. 
            I&apos;m currently looking for new opportunities.
          </p>
 
          {/* Main Action Call */}
          <Magnetic>
            <motion.a
              href={socials.find(s => s.name === "Email")?.href || "#"}
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 bg-yellow-600 text-white rounded-full font-bold shadow-2xl shadow-yellow-600/20 hover:bg-yellow-700 transition-all flex items-center gap-2 text-lg mb-16"
            >
              Say Hello
              <Mail size={20} />
            </motion.a>
          </Magnetic>
   
          {/* Interactive JSON Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <JsonContactCard />
          </motion.div>

          {/* Social Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl font-bold">
            {socials.filter(s => s.name !== "Email").slice(0, 4).map((social) => (
              <Magnetic key={social.name}>
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 md:p-4 glass rounded-xl md:rounded-2xl hover:bg-muted transition-all group w-full h-full"
                >
                  {social.icon && (
                    <div 
                      className="w-5 h-5 bg-foreground group-hover:bg-yellow-600 transition-colors"
                      style={{
                        maskImage: `url(${social.icon})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: `url(${social.icon})`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                      }}
                    />
                  )}
                  <span className="text-sm">{social.name}</span>
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
