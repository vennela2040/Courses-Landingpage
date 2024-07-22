import React, { useRef } from 'react';
import Home from "../Components/Home";
import InstructorsSlider from "../Components/InstructorsSlider";
import NavBar from "../Components/NavBar";
import ProgramOverview from "../Components/ProgramOverview";
import Syllabus from "../Components/Syllabus";
import SkillsSection from "../Components/SkillsSection";
import Review from "../Components/Review";
import Fee from "../Components/Fee";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const homeRef = useRef(null);
  const programOverviewRef = useRef(null);
  const syllabusRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const instructorsSliderRef = useRef(null);
  const reviewRef = useRef(null);
  const feeRef = useRef(null);
  const infoSectionRef = useRef(null);
  const footerRef = useRef(null);

  const handleScrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      programOverview: programOverviewRef,
      syllabus: syllabusRef,
      skillsSection: skillsSectionRef,
      instructorsSlider: instructorsSliderRef,
      review: reviewRef,
      fee: feeRef,
      infoSection: infoSectionRef,
      footer: footerRef,
    };

    refs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar onScrollToSection={handleScrollToSection} />
      <section ref={homeRef} id="home">
        <Home />
      </section>
      <section ref={programOverviewRef} id="programOverview">
        <ProgramOverview />
      </section>
      <section ref={syllabusRef} id="syllabus">
        <Syllabus />
      </section>
      <section ref={skillsSectionRef} id="skillsSection">
        <SkillsSection />
      </section>
      <section ref={instructorsSliderRef} id="instructorsSlider">
        <InstructorsSlider />
      </section>
      <section ref={reviewRef} id="review">
        <Review />
      </section>
      <section ref={feeRef} id="fee">
        <Fee />
      </section>
      <section ref={infoSectionRef} id="infoSection">
        <InfoSection />
      </section>
      <section ref={footerRef} id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
