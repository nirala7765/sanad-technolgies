
import HeroSection from "./Components/HomeCompo/HeroSection";

import ServicesGrid from "./Components/HomeCompo/ServicesGrid";
import AIRoadmap from "./Components/HomeCompo/AIRoadmap";
import ProcessSteps from "./Components/HomeCompo/ProcessSteps";
import TransformBusiness from "./Components/AboutCompo/TransformBusiness";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid/>
      <AIRoadmap/>
      <ProcessSteps/>
      <TransformBusiness/>
    </>
  );
}
