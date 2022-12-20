const SideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light h-screen w-10"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-6">Filter Events</span>
      </a>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="byDate" className="form-label">
            Event Date
          </label>
          <input type="date" className="form-control" id="byDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="byLocation" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="byLocation"
            placeholder="India"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SideBar;
