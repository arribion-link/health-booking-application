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
import { FaLongArrowAltRight } from "react-icons/fa";
import booking_image from "../../assets/book.png"
import AppointmentBookingForm from "./components/ui/AppointmentBookingForm"
import tell_image from "../../assets/tell.png"
const Home = () => {
  const pro = {
    textDecoration: "underline",
    cursor :"pointer"
  }
  return (
    <>
      {/* HEADER SECTION */}
      {/*  */}
      <Header />


      {/* HERO SECTION */}
      {/*  */}
      <section className="hero-section">
        <div className="hero-textual-content">
          <h1>
            Comprssionate Care, <br />
            exceptional results.
          </h1>
          <div className="hero-p-container">
            <p style={pro}>Pro Health</p>
            <div>
              <p>
                Our team of experienced doctors and Healthcare professionals{" "}
                <br /> are committed to <br /> providing quality care and
                personalized attention to our patients.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={hero_image} alt="." />
        </div>
      </section>

      
      {/* ABOUT US SECTION */}
      {/*  */}
      <section className="about-section">
        <div>
          <img src={about_image} alt="about image" />
        </div>
        <div>
          <span className="section-span">ABOUT US</span>
          <h1 className="section-heading">
            CoreHealth is a team of experienced medical professionals
          </h1>
          <p>
            Dedicated to providing top-quiality healthcare services. We believe
            i a holistic approach to healthcare that focuses on treating the
            whole person not just the illiness or symptoms.
          </p>
        </div>
      </section>

      
      {/* DEPARTMENT SECTION */}
      {/*  */}
      <section className="department-section">
        <span className="section-span">OUR DEPARTMENTS</span>
        <h1 className="section-heading">For Your Health</h1>
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


      {/* TESTIMONIAL SECTION */}
      {/*  */}
      <section className="testimonial-section">
        <div>
          <span className="section-span">TESTIMONIALS</span>
          <h1 className="section-heading">
            What our Patients Say <br />
            About Us
          </h1>
        </div>

        <div className="testimonial-section-container">
          <div className="testimonial-header">
            <div>
              <FaArrowCircleLeft size={20} />
              <FaArrowCircleRight size={20} />
            </div>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <RiDoubleQuotesL size={30} />
                <div>
                  <p>
                    I recently had to bring my child to CoreHealth for a minor
                    injury, and i was so impressed with the Care he received.
                    The pediatrician was great with him and made himfell at
                    ease, and the entire staff was kind and attentive
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
                    injury, and i was so impressed with the Care he received.
                    The pediatrician was great with him and made himfell at
                    ease, and the entire staff was kind and attentive
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
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      {/*  */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="hiw-lhs">h</div>
          <div className="hiw-timeline">h</div>
          <div className="hiw-rhs">h</div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      {/*  */}
      <section className="tell-to-schedule">
        <div className="call-to-action-container">
          <img src={tell_image} alt="" className="call-to-action-image" />
          <div>
            <h1>
              Don't Let Your Health <br />
              Take a Backseat!
            </h1>
            <p>
              Schedule an appointment with one of our experienced medical
              professionals today!
            </p>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      {/*  */}
      <section className="blog-section">
        <div className="section-header">
          <span>OUR BLOGS POSTS</span>
          <h1>Latest Updates</h1>
        </div>
        <div className="blog-container"></div>
      </section>

      {/* FAQ's SECTION */}
      {/*  */}
      <section className="faqs-section"></section>

      {/* APPOINTMENT BOOKING SECTION */}
      {/*  */}
      <section>
        <div className="appoint-container">
          <div>
            <AppointmentBookingForm />
          </div>
          <img src={booking_image} alt="" className="booking-image" />
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      {/*  */}
      <section className="subscribe-section">
        <div className="subscribe-container">
          <div>
            <h1>Be Our Subscriber</h1>
            <p>to get the latest news about health from our experts</p>
          </div>
          <div>
            <form action="">
              <label htmlFor="subscriberEmail">Your Email</label>
              <div className="input-container">
                <input type="email" />
                <button className="sub-btn">
                  Subscribe <FaLongArrowAltRight size={18} />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      {/*  */}
      <Footer />
    </>
  );
}

export default Home
