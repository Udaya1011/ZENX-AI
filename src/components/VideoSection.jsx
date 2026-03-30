import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const videoScale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.85, 1.1, 1.1, 0.85]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
              videoRef.current.muted = true;
              videoRef.current.play();
              setIsPlaying(true);
            });
            videoRef.current.muted = false;
            setIsMuted(false);
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section ref={containerRef} className="pt-0 pb-10 bg-transparent relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* LOCAL CIRCUIT ACCENTS - To enhance the global ones behind the video */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-500/20 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
        <motion.div style={{ opacity: videoOpacity }} className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-[10px] font-black uppercase tracking-[3px] mb-4">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Live Experience
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
            Experience the Future of <br className="hidden md:block" /> 
            <span className="gradient-text">Voice Automation</span>
          </h2>
        </motion.div>

        {/* Video Player Section with Circuit Backdrop */}
        <motion.div
           style={{ 
             scale: videoScale,
             opacity: videoOpacity,
             rotateX: useTransform(smoothProgress, [0, 0.5], [10, 0]),
           }}
           className="relative max-w-5xl mx-auto rounded-[32px] md:rounded-[48px] p-1.5 bg-gradient-to-br from-white/20 via-teal-500/20 to-purple-500/20 shadow-[0_0_80px_rgba(45,212,191,0.1)] overflow-hidden group"
        >
          <div className="relative aspect-video rounded-[30px] md:rounded-[46px] overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-inner">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover rounded-[30px] md:rounded-[46px]"
              muted
              loop
              playsInline
              preload="auto"
              src="https://voice.zenxai.io/videos/team-video-v2.mp4"
            />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-30 flex items-center gap-3">
               <button 
                 onClick={togglePlay}
                 className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-teal-500 hover:text-black transition-all shadow-2xl active:scale-95"
               >
                 {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
               </button>
               <button 
                 onClick={toggleMute}
                 className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-teal-500 hover:text-black transition-all shadow-2xl active:scale-95"
               >
                 {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
               </button>
            </div>

            <div className="absolute bottom-8 right-8 z-30 pointer-events-none hidden lg:block">
              <div className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border-white/5 border opacity-60">
                 <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[4px]">Verified Stream</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
