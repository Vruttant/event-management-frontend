import { useContext, useState } from "react";
import { AppContext } from "../../data/Context";
const SideBar = () => {
  const [eventDateFilter, setEventDateFilter] = useState("");
  const [eventLocationFilter, setEventLocationFilter] = useState("");
  const { eventsData, eventsHandler, eventsToShow, eventsToShowDataHandler } =
    useContext(AppContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filteredEvents = eventsData.filter((tEvent) =>
      eventLocationFilter
        ? eventDateFilter
          ? tEvent.location === eventLocationFilter &&
            tEvent.date === eventDateFilter
          : tEvent.location === eventLocationFilter
        : tEvent
    );
    eventsToShowDataHandler(filteredEvents);
  };

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
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="byDate" className="form-label">
            Event Date
          </label>
          <input
            type="date"
            className="form-control"
            id="byDate"
            onChange={(e) => setEventDateFilter(e.target.value)}
          />
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
            onChange={(e) => setEventLocationFilter(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-secondary ms-1">Reset</button>
      </form>
    </div>
  );
};

export default SideBar;
