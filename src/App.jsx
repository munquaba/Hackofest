import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./componenets/Navbar"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";
import Rules from "./pages/Rules";
const App = () => {
  return(
<main>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="timeline" element={<Timeline />} />
      <Route path="rules" element={<Rules />} />
    </Routes>
  </Router>
</main>
  )
}
export default App;
