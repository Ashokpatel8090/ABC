import React from 'react';

const PillarsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#e6f7ff] via-[#f0faff] to-white py-16 px-4 sm:px-8 md:px-20 font-sans flex justify-center">
      <div className="w-full max-w-[1200px] text-center">
        {/* Section Heading */}
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold leading-tight mb-12 tracking-tight">
          The Three Pillars of <span className="text-[#10B981]">MediCAPS</span>
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#cceeff] text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:ring-2 hover:ring-[#34D3C9] relative">
            <h3 className="text-[#007BFF] text-xl font-bold mb-3">
              MDS – MediCAPS Diagnostics Suite
            </h3>
            <p className="text-[#1F2937] text-base leading-relaxed mb-4">
              Under development: A next-gen AI platform for interpreting radiology and pathology scans — X-rays, CT, MRI, and blood tests.
            </p>
            <p className="text-sm font-semibold text-[#4B5563] mb-1">
              Status: <span className="font-normal">MVP prototyping in progress</span>
            </p>
            <p className="text-sm font-semibold text-[#4B5563]">
              Objective: <span className="font-normal">Reduce diagnostic delays in tier-2/3 cities</span>
            </p>
            <div className="absolute w-full h-1 bg-[#b3e0ff] left-0 bottom-0 rounded-lg"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#cceeff] text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:ring-2 hover:ring-[#34D3C9] relative">
            <h3 className="text-[#007BFF] text-xl font-bold mb-3">
              MPT – MediCAPS Personalized Therapeutics
            </h3>
            <p className="text-[#1F2937] text-base leading-relaxed mb-4">
              Building ML models to personalize treatment using patient history, lifestyle, and predicted drug interactions.
            </p>
            <p className="text-sm font-semibold text-[#4B5563] mb-1">
              Status: <span className="font-normal">Dataset curation + model design</span>
            </p>
            <p className="text-sm font-semibold text-[#4B5563]">
              Objective: <span className="font-normal">End one-size-fits-all treatment in India</span>
            </p>
            <div className="absolute w-full h-1 bg-[#b3e0ff] left-0 bottom-0 rounded-lg"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#cceeff] text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:ring-2 hover:ring-[#34D3C9] relative">
            <h3 className="text-[#007BFF] text-xl font-bold mb-3">
              MPH – MediCAPS Preventive Health
            </h3>
            <p className="text-[#1F2937] text-base leading-relaxed mb-4">
              Creating digital tools and AI-powered assessments to help users stay healthy — not just treat illness.
            </p>
            <p className="text-sm font-semibold text-[#4B5563] mb-1">
              Status: <span className="font-normal">Risk prediction & habit coaching in design</span>
            </p>
            <p className="text-sm font-semibold text-[#4B5563]">
              Objective: <span className="font-normal">Reduce NCDs via early lifestyle intervention</span>
            </p>
            <div className="absolute w-full h-1 bg-[#b3e0ff] left-0 bottom-0 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
