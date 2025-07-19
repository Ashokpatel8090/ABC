import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e0f7fa] via-[#f5fdfc] to-[#ffffff] px-4 sm:px-10 md:px-20 py-20 font-sans overflow-hidden">
      {/* Decorative Background SVG */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#b2ebf2"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[#007BFF] text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-12">
          Our Vision & Mission
        </h2>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Vision */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-[#1f4a83] text-2xl font-bold mb-4">Vision</h3>
            <p className="text-[#2a2a2a] text-base leading-relaxed">
              To be India’s most trusted digital health companion — integrating <span className="text-[#10B981] font-semibold">precision nutrition</span>, 
              <span className="text-[#10B981] font-semibold"> AI-driven care</span>, and <span className="text-[#10B981] font-semibold">preventive health</span> to empower every individual toward long-term well-being.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-[#1f4a83] text-2xl font-bold mb-4">Mission</h3>
            <ul className="text-[#2a2a2a] text-base leading-relaxed list-disc list-inside space-y-2">
              <li>Deliver smart millet-based meal plans backed by nutrition science</li>
              <li>Enable instant doctor & dietician connections through mobile AI</li>
              <li>Offer AI-driven health guidance and risk prediction</li>
              <li>Make preventive care accessible in every corner of India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
