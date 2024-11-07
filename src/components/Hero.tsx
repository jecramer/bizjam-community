import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      </div>
      <div className="container relative z-10 px-4 py-16 mx-auto text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="animate-float">
          <Zap 
            className="w-16 h-16 mx-auto mb-8 text-primary" 
            style={{
              background: 'linear-gradient(to bottom right, #FFC300, #FF5733)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }} 
          />
        </div>
        <h1 className="text-8xl font-bold tracking-tight text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            BIZJAM
          </span>
        </h1>
        <div className="max-w-2xl mx-auto mt-8 space-y-6 text-gray-600">
          <p className="text-lg leading-relaxed">
            Inspired by the "hypercasual" revolution in mobile gaming, the Bizjam community is harnessing AI to accelerate B2C SaaS startups. Members leverage AI-powered tools to quickly build and test landing pages, prototypes and MVPs - rapidly iterating based on real user feedback to establish product-market fit.
          </p>
          <p className="text-lg leading-relaxed">
            Eschewing traditional timelines, Bizjam champions a data-driven, fail-fast approach. As the boundaries between software and business continue blurring, this community is equipping founders with the tools and mindset to thrive in the coming "Cambrian Explosion" of niche, AI-driven applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;