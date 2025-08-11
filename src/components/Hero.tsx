import { ArrowRight } from 'lucide-react';
import backgroundImage from '/backound-image.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
      aria-label="Hero Section"
    >
      <img 
        src={backgroundImage} 
        alt="Tech Communities Day Event Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none" 
        loading="eager"
        width={1920}
        height={1080}
      />
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-12 py-12 md:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-white tracking-tight whitespace-nowrap">
          Tech Communities Day
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal">
          Building the Future of Tech Communities in Africa<br className="hidden md:block" />
          <span className="font-bold text-primary-light mt-3 inline-block">Connect, Inspire, Innovate!</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl">
          <a
            href="#apply"
            className="inline-flex items-center justify-center space-x-3 bg-primary text-white px-6 sm:px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark hover:scale-105 transition-all duration-200 font-bold text-lg flex-1"
            aria-label="Apply for Tech Communities Day"
          >
            <span>Call for Applications</span>
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/10 transition-all duration-200 font-bold text-lg"
            aria-label="View Event Gallery"
          >
            <span>View Gallery</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;