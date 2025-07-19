import React, { useState } from 'react';


const BlogsHeroSection = () => (
  <section className="text-white px-6 md:px-20 py-28 text-center w-[98%] mx-auto mt-8 rounded-xl bg-gradient-to-r from-[#34D3C9] to-[#007BFF] font-sans">
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Empowering Healthcare <br /> Through Knowledge
      </h1>
      <p className="text-lg md:text-xl font-medium">
        Curated insights, innovative research, and digital wellness — all in one place.
      </p>
    </div>
  </section>
);

const FeaturedReadsSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "blog1.webp",
      date: "May 28, 2025",
      title: "5 Healthy Habits for a Better Life",
      description: "Incorporate these habits into your daily routine to improve physical and mental health.",
    },
    {
      id: 2,
      image: "blog2.webp",
      date: "May 20, 2025",
      title: "Understanding Nutrition: What Your Body Really Needs",
      description: "Explore the essential nutrients your body requires and how to get them naturally.",
    },
    {
      id: 3,
      image: "blog3.webp",
      date: "May 15, 2025",
      title: "Mental Health Awareness in 2025",
      description: "Learn how to identify, manage, and support mental health in the modern world.",
    },
  ];

  return (
    <section className="bg-[#f0fdf9] px-6 md:px-20 py-16 text-center font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-10">Featured Reads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white border border-[#cceeff] rounded-lg shadow-md text-left">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-[#10B981] font-medium mb-1">{post.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-[#1F2937]">{post.title}</h3>
                <p className="text-sm text-[#4B5563]">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SmartWellnessTipsSection = () => {
  const tips = [
    "Drink at least 8 glasses of water daily.",
    "Exercise 30 minutes a day.",
    "Sleep 7–8 hours per night.",
    "Eat fruits, vegetables, and grains.",
    "Practice daily mindfulness.",
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center font-sans">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-10">Smart Wellness Tips</h2>
        <ul className="text-left list-disc list-inside text-[#1F2937] text-base md:text-lg space-y-2 max-w-2xl mx-auto">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const MeetOurExpertsSection = () => (
  <section className="bg-[#f0fdf9] px-6 md:px-20 py-16 text-center font-sans">
    <div className="max-w-[1000px] mx-auto">
      <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-12">Meet Our Experts</h2>
      <div className="bg-white border border-[#cceeff] p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center text-left">
        <div className="flex-shrink-0 w-75 h-40 md:w-50 md:h-30 bg-[#19c1aa] rounded-full flex items-center justify-center overflow-hidden mb-6 md:mb-0 md:mr-8 mt-8">
          <img src="blog4.webp" alt="Dr. Jitendra Kumar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-[#007BFF] text-2xl font-bold mb-1">Dr. Jitendra Kumar</h3>
          <p className="text-[#10B981] font-medium mb-3">Cardiologist</p>
          <p className="text-[#1F2937]">
            Over 15 years of experience in cardiovascular care and preventive wellness.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhatsHappeningSection = () => {
  const events = [
    {
      id: 1,
      title: "Virtual Heart Health Workshop",
      date: "June 15, 2025",
      description: "Join top cardiologists to learn proactive heart strategies.",
    },
    {
      id: 2,
      title: "Nutrition & Wellness Webinar",
      date: "July 10, 2025",
      description: "Learn about balanced diets and practical nutrition tips.",
    },
    {
      id: 3,
      title: "Mental Health Awareness Month",
      date: "August 2025",
      description: "Community sessions focused on emotional and mental well-being.",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-12">What’s Happening</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-[#f0fdf9] p-6 rounded-lg border border-[#cceeff] text-left">
              <h3 className="text-[#007BFF] text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-[#10B981] text-sm font-medium mb-2">{event.date}</p>
              <p className="text-[#1F2937] mb-4">{event.description}</p>
              <a href="#" className="text-[#007BFF] font-semibold hover:underline">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VoicesOfTrustSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "blog5.webp",
      quote: "The MediCAPS team helped me feel truly supported and informed.",
      name: "Abhishek Verma",
      role: "Cardiac Recovery Patient",
    },
    {
      id: 2,
      image: "blog6.webp",
      quote: "I regained full strength thanks to expert physiotherapy care.",
      name: "Rahul Sharma",
      role: "Physiotherapy Patient",
    },
    {
      id: 3,
      image: "blog7.webp",
      quote: "Exceptional pediatric care and heartfelt attention. Thank you!",
      name: "Meena Joshi",
      role: "Mother of Pediatric Patient",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-12">Voices of Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-[#f0fdf9] p-6 rounded-lg text-center shadow-sm">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-white shadow" />
              <p className="italic text-[#1F2937] mb-3">"{t.quote}"</p>
              <p className="text-[#007BFF] font-bold">{t.name}</p>
              <p className="text-sm text-[#4B5563]">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQsSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How often should I get a health check-up?",
      answer: "Annually, or as recommended by your doctor.",
    },
    {
      id: 2,
      question: "How do I improve mental health?",
      answer: "Daily mindfulness, regular movement, and quality sleep.",
    },
    {
      id: 3,
      question: "What makes a balanced diet?",
      answer: "Whole grains, protein, fiber-rich veggies, and hydration.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = id => setOpenFaq(openFaq === id ? null : id);

  return (
    <section className="bg-white px-6 md:px-20 py-16 font-sans">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-[#007BFF] text-3xl md:text-4xl font-extrabold mb-12">FAQs</h2>
        <div className="space-y-4 text-left">
          {faqs.map(faq => (
            <div key={faq.id} className="bg-[#f0fdf9] p-6 rounded-lg border border-[#cceeff]">
              <button
                className="w-full flex justify-between items-center text-[#007BFF] font-semibold text-lg"
                onClick={() => toggleFaq(faq.id)}
              >
                {faq.question}
                <span className="text-xl">{openFaq === faq.id ? '−' : '+'}</span>
              </button>
              {openFaq === faq.id && (
                <p className="mt-4 text-[#1F2937]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinHealthCircleSection = () => (
  <>
  <section className="bg-gradient-to-br from-[#007BFF] to-[#10B981] text-white px-6 md:px-20 py-16 text-center rounded-xl mx-auto w-[80%] mb-8 font-sans">
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Join Our Health Circle</h2>
      <p className="text-lg mb-8">
        Get exclusive updates on MediCAPS innovations and wellness tips.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-grow px-5 py-3 rounded-full border border-white bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button className="bg-white text-[#10B981] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Subscribe
        </button>
      </div>
    </div>
  </section>
    
    </>
);

const BlogsPage = () => (
  <div className="min-h-screen flex flex-col">
    <BlogsHeroSection />
    <FeaturedReadsSection />
    <SmartWellnessTipsSection />
    <MeetOurExpertsSection />
    <WhatsHappeningSection />
    <VoicesOfTrustSection />
    <FAQsSection />
    <JoinHealthCircleSection />
  </div>
);

export default BlogsPage;
