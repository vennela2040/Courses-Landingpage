import Home from "../Components/Home"
import InstructorsSlider from "../Components/InstructorsSlider"
import NavBar from "../Components/NavBar"
import ProgramOverview from "../Components/ProgramOverview"
import Syllabus from "../Components/Syllabus"
import Review from "../Components/Review"
import Fee from "../Components/Fee"
import InfoSection from "../Components/InfoSection"
import Footer from "../Components/Footer"



function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ProgramOverview />
      <Syllabus />
      <InstructorsSlider />
      <Review />
      <Fee />
      <InfoSection />
      <Footer />
    </>
  )
}

export default App
