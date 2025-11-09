import "../../../../css/app.css"
const AppointmentBookingForm = () => {
    // const handleSubmit = (e) = > {
    //     e.preventDefault();
    // }
  return (
    <div>
      <span className="section-span">BOOK AN</span>
      <h1>Appointment</h1>
      <form action="">
        <div className="form-two-section">
          <div className="from-group">
            <label htmlFor="name">Name</label><br />
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="from-group">
            <label htmlFor="phone">Phone Number</label><br />
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className="from-group">
          <label htmlFor="name">Medical record Number</label><br />
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-two-section">
          <div className="from-group">
            <label htmlFor="name">Reason for visit</label><br />
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="from-group">
            <label htmlFor="name">Department</label><br />
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className="form-two-section">
          <div className="from-group">
            <label htmlFor="name">Prefeferred Date</label><br />
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="from-group">
            <label htmlFor="name">Prefeferred Time</label><br />
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default AppointmentBookingForm
