import Header from "./components/partials/Header"
import Footer from "./components/partials/Footer"
import hero_image from "../../assets/hero.png"
import about_image from "../../assets/about.png"
import DepartmentsCard from "./components/ui/DepartmentsCard"
// import departments from "../../data/departments"
import { PiSiren } from "react-icons/pi";
import { PiBaby } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";
const Home = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div>
          <h1>
            Comprssionate Care, <br />
            exceptional results.
          </h1>
          <div>
            <p>Pro Health</p>
            <div>
              <p>
                Our team of experienced doctors and Healthcare professionals are
                committed to providing quality care and personalized attention
                to our patients.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={hero_image} alt="." />
        </div>
      </section>

      <section className="about-section">
        <div>
          <img src={about_image} alt="about image" />
        </div>
        <div>
          <span>ABOUT US</span>
          <h1>CoreHealth is a team of experienced medical professionals</h1>
          <p>
            Dedicated to providing top-quiality healthcare services. We believe
            i a holistic approach to healthcare that focuses on treating the
            whole person not just the illiness or symptoms.
          </p>
        </div>
      </section>

      <section className="department-section">
        <span>OUR DEPARTMENTS</span>
        <h1>For Your Health</h1>
        <div className="department-container">
          <DepartmentsCard
            logo=<PiSiren size={60} />
            name="Emergency Department"
          />
          <DepartmentsCard
            logo=<PiBaby size={60} />
            name="Pediatric Department"
          />
          <DepartmentsCard
            logo=<FaUserDoctor size={60} />
            name="Obstetric and Gynecology Department"
          />
          <DepartmentsCard
            logo=<FaHeartbeat size={60} />
            name="Cardiology Department"
          />
          <DepartmentsCard
            logo=<LuBrainCircuit size={60} />
            name="Neurology Department"
          />
          <DepartmentsCard
            logo=<GiBrain size={60} />
            name="Psychiary Department"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home
