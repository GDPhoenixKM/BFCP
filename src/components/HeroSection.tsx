
import VideoPlayer from "./VideoPlayer";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-bfcp-pink/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-bfcp-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="glow-text">BFCP 2025</span>
              <br />
              <span className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Battle For Creator Points
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              BFCP Is A Contest Hosted By PhoenixKM, Your Goal Is To Make The Best Level Out Of The Bunch.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-scale-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-bfcp-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-bfcp-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-20 -right-4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative contest-card p-6 shadow-2xl overflow-hidden">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Latest From BFCP</h3>
                  <VideoPlayer 
                    videoId="sGg79BXpccA"
                    title="BFCP 2025 Latest Episode"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
