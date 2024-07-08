import Home from "../Components/Home"
import InstructorsSlider from "../Components/InstructorsSlider"
import NavBar from "../Components/NavBar"
import ProgramOverview from "../Components/ProgramOverview"
import Syllabus from "../Components/Syllabus"
import SkillsSection from "../Components/SkillsSection"
import Review from "../Components/Review"
import Fee from "../Components/Fee"
import InfoSection from "../Components/InfoSection"
import Footer from "../Components/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ProgramOverview />
      <Syllabus />
      <SkillsSection/>
      <InstructorsSlider />
      <Review />
      <Fee />
      <InfoSection />
      <Footer />
    </>
  )
}

export default App
