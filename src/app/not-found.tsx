'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, Home } from 'lucide-react'
import { Grain } from '@/components/ui/Grain'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground">
      <Grain />
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="max-w-[1280px] mx-auto h-full relative"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
          }}
        >
          {/* Transparent grid placeholder */}
          <div className="absolute inset-0 border border-border/10 opacity-20" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-[120px] md:text-[200px] font-serif font-bold leading-none tracking-tighter text-amber-500 opacity-20">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Lost in the <span className="text-amber-500">Digital Void?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-12">
            The page you are looking for doesn&apos;t exist or has been moved to another dimension.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-amber-500 text-zinc-950 rounded-full font-bold shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-all flex items-center justify-center gap-2 group"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-background border border-border text-foreground rounded-full font-bold glass hover:bg-muted transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </div>
  )
}
