
const RulesSection = () => {
  const participationRules = [
    {
      title: "Eligibility",
      description: "When it is available",
      color: "bg-bfcp-purple"
    },
    {
      title: "Registration", 
      description: "Must register before the deadline to participate in the contest.",
      color: "bg-bfcp-pink"
    },
    {
      title: "Time Management",
      description: "Make your level before the deadline",
      color: "bg-green-500"
    }
  ];

  const submissionRules = [
    {
      title: "Deadlines",
      description: "All submissions must be completed and submitted by the specified deadlines.",
      color: "bg-yellow-500"
    },
    {
      title: "Quality",
      description: "Levels must demonstrate high-quality structuring and gameplay worthy of rating.",
      color: "bg-indigo-500"
    },
    {
      title: "Improvements",
      description: "The Level will be improved over and over the BFCP contest.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="rules" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contest Rules</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bfcp-purple to-bfcp-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The requirements for participating in BFCP 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contest-card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Participation Rules</h3>
            
            <div className="space-y-6">
              {participationRules.map((rule, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-6 h-6 rounded-full ${rule.color} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">{rule.title}</h4>
                    <p className="text-gray-300">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contest-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Submission Rules</h3>
            
            <div className="space-y-6">
              {submissionRules.map((rule, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-6 h-6 rounded-full ${rule.color} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">{rule.title}</h4>
                    <p className="text-gray-300">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
