import React, { useState } from 'react';

// Hero Section
const CareersHeroSection = () => (
  <section className="text-white px-6 md:px-20 py-28 text-cente w-[98%] mx-auto mt-8 rounded-xl bg-gradient-to-r from-[#34D3C9] to-[#007BFF] font-sans">
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Build the Future of Healthcare <br /> with Purpose & Technology
      </h1>
      <p className="text-lg md:text-xl">
        Join India’s health revolution — MediCAPS is hiring passionate individuals to make a difference.
      </p>
    </div>
  </section>
);

// Overview
const OverviewSection = () => (
  <section className="bg-white px-6 md:px-20 py-16 text-left font-sans">
    <div className="max-w-[1000px] mx-auto">
      <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-8 pl-4">Overview</h2>
      <p className="text-[#1F2937] mb-4">
        At MediCAPS, we’re not just building apps — we’re shaping the future of intelligent healthcare.
        Our mission integrates AI, digital health, and empathy to make healthcare accessible to all.
      </p>
      <p className="text-[#1F2937]">
        Be part of India’s digital wellness revolution — inclusive, proactive, and powered by technology.
      </p>
    </div>
  </section>
);

// Benefits
const CareerBenefitsSection = () => {
  const benefits = [
    "Work on nationally scalable healthcare initiatives",
    "Join a cross-functional, impact-driven team",
    "Opportunities in AI, nutrition, data, and outreach",
    "Upskill with certifications & real-world projects",
    "Shape your career with a mission-first culture",
  ];

  return (
    <section className="bg-[#f0fdf9] px-6 md:px-20 py-16 rounded-xl font-sans w-[98%] mx-auto">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-8 pl-4">
          Why Join Us?
        </h2>
        <ul className="list-disc list-inside text-[#1F2937] text-lg space-y-2">
          {benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </section>
  );
};

// Eligibility
const EligibilitySection = () => {
  const requirements = [
    "Qualification: 10th/12th/Graduate (role-based)",
    "Comfortable with digital tools and tech apps",
    "Communication in English and local language",
    "Willing to work in urban/rural settings",
    "Completion of training programs (if required)",
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-16 text-left font-sans">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-8 pl-4">
          Eligibility Criteria
        </h2>
        <p className="text-[#1F2937] mb-4">To apply, you typically need:</p>
        <ul className="list-disc list-inside text-[#1F2937] text-lg space-y-2">
          {requirements.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    </section>
  );
};

// Job Roles
const JobRolesSection = () => {
  const roles = [
    { title: "Community Health Advocate", description: "Work with field teams to promote healthy living and guide people to healthcare services." },
    { title: "Digital Health Coach", description: "Use MediCAPS tools to offer personalized nutrition and wellness guidance." },
    { title: "Backend/Data Intern", description: "Build scalable APIs and databases that power our digital health platforms." },
  ];

  return (
    <section className="bg-[#e6f7ff] px-6 md:px-20 py-16 rounded-xl font-sans w-[98%] mx-auto">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-12 pl-4">
          Open Roles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-[#10B981] text-xl font-bold mb-2">{role.title}</h3>
              <p className="text-[#1F2937] text-base">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills
const EssentialSkillsSection = () => {
  const skills = [
    "Digital communication & soft skills",
    "Understanding of AI/health tech (optional)",
    "Time management & responsiveness",
    "Empathy and community engagement",
    "Data entry or analysis exposure",
    "Positive, collaborative work ethic",
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-16 font-sans text-left">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-8 pl-4">
          Key Skills We Value
        </h2>
        <ul className="list-disc list-inside text-[#1F2937] text-lg space-y-2">
          {skills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </section>
  );
};

// Contact Form
const ContactUsFormSection = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted", formData);
    alert("Thank you! We'll get back soon.");
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <section className="bg-gradient-to-br from-[#007BFF] to-[#10B981] px-6 md:px-20 py-16 text-white font-sans text-center rounded-xl mx-auto w-[98%] mb-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Connect With Us</h2>
        <form onSubmit={handleSubmit} className="bg-white text-left text-[#1F2937] p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-medium mb-1">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName}
              onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message}
              onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
            />
          </div>
          <button type="submit"
            className="w-full bg-[#10B981] hover:bg-[#0e9b74] text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </section>
        
  );
};

const CareersPage = () => (
  <>
    <CareersHeroSection />
    <div className="min-h-screen flex flex-col w-[80%] mx-auto">
      <OverviewSection />
      <CareerBenefitsSection />
      <EligibilitySection />
      <JobRolesSection />
      <EssentialSkillsSection />
      <ContactUsFormSection />
    </div>
  </>
);

export default CareersPage;
