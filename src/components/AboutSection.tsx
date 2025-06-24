
import { Trophy, Clock, Users } from "lucide-react";

const AboutSection = () => {
  const creators = [
    "PhoenixKM (Host)",
    "1. Mi phax",
    "2. ImmPotatoGD", 
    "3. Crestial",
    "4. Abso",
    "5. MeadowDream",
    "6. Mitchell",
    "7. Ryxenol7"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bfcp-purple to-bfcp-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Does Anyone Know What BFDI Is? Well It Stands For "Battle For Dream Island", And I Really Like The
            Show, What If.. I Make It In GD..... BUT!! Remaking Stuff Is Just Boring, Bad, And Unoriginal, Not
            Creative Too, So What If I Name The Show "Battle For Creator Points" BFCP For Short, And For More FUN Measure,
            So Basically BFDI Is Just A Contest, 25 Contest Actually And One Person Won Dream Island, So I Kinda
            Wanna Make You Guys Battle In 10 Contest And There Will Be 1 Winner That Survives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="contest-card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-bfcp-purple text-4xl mb-4 flex justify-center">
              <Trophy className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">Prize</h3>
            <p className="text-gray-300 text-center">
              A Creator Point
            </p>
          </div>

          <div className="contest-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-bfcp-pink text-4xl mb-4 flex justify-center">
              <Clock className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">Time Challenge</h3>
            <p className="text-gray-300 text-center">
              It is Random Every Time
            </p>
          </div>

          <div className="contest-card p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-blue-500 text-4xl mb-4 flex justify-center">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">GD Creators In The Contest</h3>
            <div className="text-gray-300 text-center space-y-1">
              {creators.map((creator, index) => (
                <p key={index} className="text-sm">{creator}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="contest-card p-6 max-w-2xl mx-auto">
            <p className="text-gray-300">
              If your level isn't rate-worthy enough to win, we'll personally help upgrade it before
              submitting to mods for rating, ensuring you still get your Creator Point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
