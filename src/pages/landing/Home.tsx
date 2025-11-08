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

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

import booking_image from "../../assets/book.png"
import AppointmentBookingForm from "./components/ui/AppointmentBookingForm"
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

      <section className="testimonial-section">
        <div className="testimonial-header">
          <div>
            <span>TESTIMONIALS</span>
            <h1>
              What our Patients Say <br />
              About Us
            </h1>
          </div>
          <div>
            <FaArrowCircleLeft size={40} />
            <FaArrowCircleRight size={40} />
          </div>
        </div>

        <div className="testimonials-container">
          <div>
            <div>
              <RiDoubleQuotesL />
              <div>
                <p>
                  I recently had to bring my child to CoreHealth for a minor
                  injury, and i was so impressed with the Care he received. The
                  pediatrician was great with him and made himfell at ease, and
                  the entire staff was kind and attentive
                </p>
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="test-person">
              <img src="" alt="" />
              <div>
                <h3>LAURENCE M MWANGI</h3>
                <p>Nyeri, Kenya</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <RiDoubleQuotesL />
              <div>
                <p>
                  I recently had to bring my child to CoreHealth for a minor
                  injury, and i was so impressed with the Care he received. The
                  pediatrician was great with him and made himfell at ease, and
                  the entire staff was kind and attentive
                </p>
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="test-person">
              <img src="" alt="" />
              <div>
                <h3>LAURENCE M MWANGI</h3>
                <p>Nyeri, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="appoint-container">
          <img src={booking_image} alt="" className="booking-image" />
          <div>
            <AppointmentBookingForm/>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home
