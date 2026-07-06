import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Edition from "./components/Edition";
import Theme from "./components/Theme";
import Problemstatement from "./components/Problemstatement";
import Prize from "./components/Prize";
import Schedule from "./components/Schedule";
import Whyparticipate from "./components/Whyparticipate";
import Badge from "./components/Badge";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Home />
      <About />
      <Edition />
      <Theme />
      <Problemstatement />
      <Prize />
      <Schedule />
      <Whyparticipate />
      <Badge />
      <Footer />
    </div>
  );
}

export default App;
