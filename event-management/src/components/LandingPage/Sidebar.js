import { useContext, useState } from "react";
import { AppContext } from "../../data/Context";
import { ConvertDateToLocale } from "../../helpers/DateFormatter";
import { removeDuplicatesFromArray } from "../../helpers/EventRanker";
const SideBar = () => {
  const [eventDateFilter, setEventDateFilter] = useState("");
  const [eventLocationFilter, setEventLocationFilter] = useState("");
  const { eventsData, eventsToShowDataHandler } = useContext(AppContext);

  let selectOptions = eventsData.map((event) => event.location);
  selectOptions = removeDuplicatesFromArray(selectOptions);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(eventDateFilter);
    console.log(eventLocationFilter);
    const convertedDate = ConvertDateToLocale(eventDateFilter);
    const filteredEvents = eventsData.filter((tEvent) =>
      eventLocationFilter
        ? eventDateFilter
          ? tEvent.location === eventLocationFilter &&
            tEvent.date === convertedDate
          : tEvent.location === eventLocationFilter
        : tEvent
    );
    console.log(filteredEvents);
    eventsToShowDataHandler(filteredEvents);
  };

  const resetFormHandler = () => {
    eventsToShowDataHandler(eventsData);
    setEventDateFilter("");
    setEventLocationFilter("");
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white h-screen w-10"
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
          {/* <input
            type="text"
            className="form-control"
            id="byLocation"
            placeholder="India"
            onChange={(e) => setEventLocationFilter(e.target.value)}
          /> */}
          <select
            id="byLocation"
            class="form-select"
            onChange={(e) => setEventLocationFilter(e.target.value)}
          >
            {selectOptions.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-secondary ms-1" onClick={resetFormHandler}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default SideBar;
