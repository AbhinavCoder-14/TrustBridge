import React from 'react';

interface VidOverlayProps {
  videoPath: string;
}

const VidOverlay: React.FC<VidOverlayProps> = ({ ./public/back }) => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 text-center">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 z-0 animate-gradient bg-[linear-gradient(120deg,_#fff0_5%,_theme(colors.primary/20)_20%,_#fff0_25%)] bg-[length:200%_200%] mix-blend-soft-light" />
            
            <div className="container relative z-10 mx-auto px-4">
            <h1 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
                <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Building Trust Between
                </span>
                <span className="mt-2 block bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
                Freelancers and Companies
                </span>
            </h1>
    
            <p className="mb-8 font-sans text-xl font-light text-muted-foreground md:text-2xl">
                Secure, transparent, and fair collaboration platform for remote work
            </p>
    
            {/* Add your CTA button here */}
            <button className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90">
                Get Started
            </button>
            </div>

            {/* Animation styles
            <style jsx global>{`
            @keyframes gradient {
                0% { background-position: 100% 50%; }
                50% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
    
            .animate-gradient {
                animation: gradient 8s ease infinite;
            }
            `}</style> */}

        </section>
    </div>
  );
};

export default VidOverlay;
