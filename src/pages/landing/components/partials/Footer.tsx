import { FaRegHospital } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h4>
            <FaRegHospital size={45} />
            CoreHealth
          </h4>
          <p>CoreHealth Medical & HealthCare Center</p>
          <ul>
            <li>123, Anywhere St. Any city 12345</li>
            <li>123-456-789-0</li>
            <li>hello@example.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Departments</li>
            <li>Doctors</li>
            <li>Timetable</li>
            <li>Appointments</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Testimonials</li>
            <li>Blogss</li>
            <li>Contact Us</li>
            <li>FAQ's</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>&copy; { Date.now() } Core Health. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
