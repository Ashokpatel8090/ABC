import React from "react";
import { TypeAnimation } from "react-type-animation";
// import WhatsappButton from "./WhatsappButton";
// import ChatBotWidget from "./ChatBoat";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#34D3C9] to-[#007BFF] text-center px-4 sm:px-8 md:px-20 pt-16 pb-28  overflow-visible text-white font-sans " >
      <div className="max-w-[1150px] mx-auto relative z-10">
        {/* Animated Headline */}
        <h1 className="font-extrabold text-white text-[28px] sm:text-[36px] md:text-[48px] leading-tight tracking-tight mb-6 drop-shadow-sm">
          <TypeAnimation
            sequence={[
              "MediCAPS — Your Personal Health & Longevity Companion ",
              3000,
              "Precision Nutrition. Preventive Care. Personal Health AI.",
              3000,
              "MediCAPS — AI meets Superfoods for Better Living",
              3000,
            ]}
            wrapper="span"
            speed={60}
            cursor={true}
            repeat={Infinity}
          />
        </h1>

        {/* Subheading */}
        <p className="text-white text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] leading-relaxed font-medium max-w-4xl mx-auto mt-4">
          <strong>MediCAPS</strong> is your gateway to healthier living. From smart meal planning with superfoods like{" "}
          millets, to AI-powered health coaching and instant doctor connect — 
          <strong> MediCAPS</strong> puts the future of health in your pocket.
        </p>

        {/* Credits */}
        <p className="italic text-white/90 text-[1rem] sm:text-[1.1rem] mt-5 font-medium">
          Built by: <span className="font-semibold">IDCONS Technova Private Limited.</span><br />
          <span className="font-normal">
            Powered by: Deep Tech, AI, Machine Learning, Nutrition Science
          </span>
        </p>

        {/* CTA Button with Link */}
        <a
          href="/join"
          className="inline-block mt-8 bg-gradient-to-r from-[#065f46] to-[#047857] hover:from-[#047857] hover:to-[#065f46] text-white font-semibold px-8 py-3 rounded-full text-base transition duration-300 shadow-lg cursor-pointer"
        >
          Join the Health Movement
        </a>
      </div>

      {/* Decorative Circle */}
      <div className="absolute -z-10 left-1/3 top-[110px] w-[260px] h-[260px] bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] rounded-full opacity-30 blur-md"></div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3">
        {/* <ChatBotWidget />
        <WhatsappButton /> */}
      </div>
    </section>
  );
};

export default Hero;
