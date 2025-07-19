import React from 'react';

const ProjectStatusSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#e6f7ff] via-[#f0faff] to-white px-6 md:px-20 py-20 relative overflow-hidden font-sans">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#b3e5fc"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-8">
          Project Status
        </h2>

        {/* Description */}
        <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
          Medicaps is a ground-up initiative, currently under development — and will be piloted at:
        </p>

        {/* Deployment Site Highlight */}
        <p className="text-[#10B981] text-xl md:text-2xl font-bold leading-relaxed mb-4 max-w-3xl mx-auto">
          RMC Dausa Medical College & Hospital, Rajasthan
        </p>

        {/* Additional Info */}
        <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-2 max-w-3xl mx-auto">
          India’s first AI-integrated healthcare campus — co-developed from the ground up.
        </p>
        <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-2 max-w-3xl mx-auto">
          Location: Dausa, Rajasthan
        </p>
        <p className="text-[#1F2937] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Construction Timeline: <span className="font-medium">2025–2026</span>
        </p>
      </div>
    </section>
  );
};

export default ProjectStatusSection;
