
const AppointmentBookingForm = () => {
    // const handleSubmit = (e) = > {
    //     e.preventDefault();
    // }
  return (
    <div>
      <span>BOOK AN</span>
      <h1>Appointment</h1>
      <form action="">
        <div>
          <div className="from-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="from-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className="from-group">
          <label htmlFor="name">Medical record Number</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div>
          <div className="from-group">
            <label htmlFor="name">Reason for visit</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="from-group">
            <label htmlFor="name">Department</label>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div>
          <div className="from-group">
            <label htmlFor="name">Prefeferred Date</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="from-group">
            <label htmlFor="name">Prefeferred Time</label>
            <input type="text" placeholder="John Doe" />
          </div>
              </div>
              <input type="submit" />
      </form>
    </div>
  );
}

export default AppointmentBookingForm
