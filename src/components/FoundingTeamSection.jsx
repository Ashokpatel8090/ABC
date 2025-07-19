import React from 'react';

const FoundingTeamSection = () => {
  const emailAddress = "medicaps.idcindia@gmail.com";

  return (
    <>
      {/* Founding Team Section */}
      <section className="bg-gradient-to-br from-[#f0fbff] via-[#ebf9f5] to-[#ffffff] md:px-20 py-0 relative overflow-hidden  rounded-xl my-0 font-sans">
        {/* Decorative wave background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <path
              fill="#a7f3d0"
              fillOpacity="1"
              d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 text-center py-12">
          <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-8">
            The Founding Team
          </h2>

          <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            MediCAPS is built by a multidisciplinary team committed to merging{" "}
            <span className="text-[#10B981] font-semibold">precision nutrition</span>,{" "}
            <span className="text-[#10B981] font-semibold">AI-powered care</span>, and digital-first healthcare ecosystems.
          </p>

          <p className="text-[#1F2937] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Contact:{" "}
            <a href={`mailto:${emailAddress}`} className="text-[#007BFF] hover:underline">
              {emailAddress}
            </a>
          </p>
        </div>
      </section>

      {/* Join Mission Section */}
      <section className="bg-gradient-to-br from-[#ffffff] via-[#f4faff] to-[#f0fdf9] relative overflow-hidden font-[Inter] text-center rounded-xl my-0">
        {/* Wave background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <path
              fill="#a7f3d0"
              fillOpacity="1"
              d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 py-12">
          <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-8">
            Join The Mission
          </h2>

          <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Are you passionate about transforming the future of healthcare in India? We’re actively collaborating with:
          </p>

          <ul className="text-[#1F2937] text-base md:text-lg leading-relaxed list-disc list-inside mb-8 max-w-3xl mx-auto text-left">
            <li>Doctors, clinicians & wellness experts</li>
            <li>AI & data science researchers</li>
            <li>Nutritionists & millet ecosystem leaders</li>
            <li>Healthcare institutions & public health organizations</li>
            <li>Visionary investors and strategic partners</li>
          </ul>

          <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-center">
            Join us in building India’s most inclusive, intelligent, and preventive health ecosystem.
          </p>

          <a
            href={`mailto:${emailAddress}`}
            className="bg-[#10B981] hover:bg-[#0e9b74] text-white font-semibold px-8 py-3 rounded-full text-base transition duration-300 shadow-md inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default FoundingTeamSection;
