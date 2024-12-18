import { Zap } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2069&auto=format&fit=crop')"
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col justify-center items-center min-h-screen text-center text-white">
        <div className="animate-float mb-8">
          <Zap 
            className="w-16 h-16 mx-auto"
            style={{
              background: 'linear-gradient(to bottom right, #FFC300, #FF5733)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Bizjam: #1 Community for AI Innovators & Product Builders
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            Inspired by the "hypercasual" revolution in mobile gaming, the Bizjam community is harnessing AI to accelerate B2C SaaS startups. Members leverage AI-powered tools to quickly build and test landing pages, prototypes and MVPs - rapidly iterating based on real user feedback to establish product-market fit.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Eschewing traditional timelines, Bizjam champions a data-driven, fail-fast approach. As the boundaries between software and business continue blurring, this community is equipping founders with the tools and mindset to thrive in the coming "Cambrian Explosion" of niche, AI-driven applications.
          </p>
        </div>

        <Button 
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity"
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join us on Slack
        </Button>
      </div>
    </div>
  );
};

export default Hero;