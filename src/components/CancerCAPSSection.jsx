import React from 'react';

const CancerCAPSSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e6faff] to-[#f0faff] px-4 sm:px-10 md:px-20 py-20 font-sans overflow-hidden">
      {/* Decorative SVG background wave */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#a5f3fc"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-[#007BFF] text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6">
          Cancer CAPS <span className="text-[#10B981]">(Comprehensive Awareness, Prevention & Support)</span>
        </h2>

        {/* Subheading */}
        <p className="text-[#333] text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          Our flagship platform in the fight against cancer — a full-stack AI-driven support system that empowers individuals and communities through:
        </p>

        {/* List */}
        <ul className="text-[#444] text-left list-disc list-inside text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6 space-y-2">
          <li> Early risk prediction & awareness</li>
          <li> Screening coordination for faster diagnosis</li>
          <li> Digital support for patients, families & caregivers</li>
          <li> Integration with national health programs (PMJAY, NPCDC-S)</li>
        </ul>

        {/* Status */}
        <p className="text-[#036672] text-left text-base sm:text-lg font-medium mb-2 max-w-3xl mx-auto">
          <span className="font-semibold text-[#007BFF]">Status:</span> Framework design in progress 
        </p>

        {/* Collaboration */}
        <p className="text-[#036672] text-left text-base sm:text-lg font-medium max-w-3xl mx-auto">
          Developed with guidance from oncologists, clinicians & public health experts 
        </p>
      </div>
    </section>
  );
};

export default CancerCAPSSection;
