import "./App.css";
import HeadingAnimation from "./components/AllServices";
import CaseStudies from "./components/Footer";
import Header from "./components/Header";
import OurServices from "./components/OurServices";

function App() {
  return (
    <>
      <Header />
      <OurServices />
      <HeadingAnimation />
      <CaseStudies />
      {/* <ScrollAnimation /> */}
    </>
  );
}

export default App;
