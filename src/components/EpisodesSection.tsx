
import VideoPlayer from "./VideoPlayer";

const EpisodesSection = () => {
  const episodes = [
    {
      id: "icPHfD6um9E",
      title: "BFCP Challenge Episode 1",
      description: "The first episode of the BFCP Challenge series. Watch as contestants begin their journey to create amazing levels and compete for the Creator Point.",
      tags: ["#BFCP2025", "#CreatorPoint", "#BuildingContest"]
    },
    {
      id: "sGg79BXpccA", 
      title: "BFCP Challenge Episode 2",
      description: "The second episode of the BFCP Challenge series. Watch as contestants begin their journey to beat the level then.",
      tags: ["#BFCP2025", "#CreatorPoint", "#BuildingContest"]
    }
  ];

  return (
    <section id="episodes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">BFCP Episodes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bfcp-purple to-bfcp-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Watch the epic journey unfold through our episode series
          </p>
        </div>

        <div className="space-y-12">
          {episodes.map((episode, index) => (
            <div key={episode.id} className={`contest-card p-8 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <VideoPlayer videoId={episode.id} title={episode.title} />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{episode.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {episode.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {episode.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tagIndex === 0 ? 'bg-bfcp-purple/20 text-purple-300' :  
                          tagIndex === 1 ? 'bg-bfcp-pink/20 text-pink-300' :
                          'bg-blue-900/50 text-blue-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
