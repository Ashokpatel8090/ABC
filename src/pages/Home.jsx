import React from "react";
// import Hero from "../components/Hero";
import PillarsSection from "../components/PillarsSection";
import CancerCAPSSection from "../components/CancerCAPSSection";
import ProjectStatusSection from "../components/ProjectStatusSection";
import VisionMissionSection from "../components/VisionMissionSection";
import FoundingTeamSection from "../components/FoundingTeamSection";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Hero/>
      <div className="w-[80%] mx-auto">
      <PillarsSection/>
      <CancerCAPSSection/>
      <ProjectStatusSection/>
      <VisionMissionSection/>
      <FoundingTeamSection/>
      {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
