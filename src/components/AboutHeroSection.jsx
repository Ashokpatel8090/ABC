import React from 'react';


const AboutHeroSection = () => {
  return (
    <section className="text-white px-6 md:px-20 py-28 relative text-center mt-8 w-[98%] mx-auto border border-[#10B981] rounded-xl bg-gradient-to-r from-[#34D3C9] to-[#007BFF] font-sans">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          About MediCAPS
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Empowering Health with AI, Superfoods, and Personal Health Intelligence.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          MediCAPS is India’s first millet-based, AI-powered digital health ecosystem. From precision nutrition to preventive health guidance and instant doctor connect — MediCAPS puts the future of health in your pocket.
        </p>
      </div>
    </section>
  );
};

const AboutVisionMissionSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16 relative text-center font-sans">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-12">
          Our Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f0fdf9] p-8 rounded-lg shadow-md border border-[#cceeff] text-[#1F2937]">
            <h3 className="text-[#10B981] text-xl font-bold mb-4">Our Vision</h3>
            <p>
              To be India’s most trusted digital health companion — integrating precision nutrition, AI-driven care, and preventive health to empower every individual toward long-term well-being.
            </p>
          </div>

          <div className="bg-[#f0fdf9] p-8 rounded-lg shadow-md border border-[#cceeff] text-[#1F2937]">
            <h3 className="text-[#10B981] text-xl font-bold mb-4">Our Mission</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>Deliver smart millet-based nutrition plans</li>
              <li>Provide instant access to doctors and dieticians via AI</li>
              <li>Build AI-powered tools for personalized health guidance</li>
              <li>Make preventive care accessible in every corner of India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadershipJourneySection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white px-6 md:px-20 py-20 flex items-center justify-center w-[98%] mx-auto border border-[#10B981] rounded-xl font-sans"
      style={{
        backgroundImage: `url(/about.jpg)`,
        minHeight: '400px',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
      <div className="relative z-10 max-w-[1000px] text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-[#d1fae5]">
          Our Leadership Journey
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          MediCAPS was envisioned by leaders in health, tech, and nutrition — passionate about empowering individuals through AI and India's millet legacy. What began as a national movement is now becoming a global health transformation.
        </p>
      </div>
    </section>
  );
};

const IDCIndiaSection = () => {
  return (<>
    <section className="bg-white px-6 md:px-20 py-16 relative text-center font-sans">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-8">
          Technova Health Lab: Powering MediCAPS
        </h2>
        <p className="text-[#1F2937] text-base md:text-lg leading-relaxed">
          Technova Health Lab (formerly IDC India) is an innovation-first organization building next-gen healthcare platforms. With MediCAPS, we’re uniting the power of AI, smart nutrition, and preventive care to build India’s most intelligent health companion.
        </p>
      </div>
    </section>

    </>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7fdfd]">
      <AboutHeroSection />
      <AboutVisionMissionSection />
      <LeadershipJourneySection />
      <IDCIndiaSection />
    </div>
  );
};

export default AboutPage;
