import { AppContext } from "../../data/Context";
import { computeAverageRatingOfEvent } from "../../helpers/EventRanker";
import { useContext } from "react";
const LandingPage = () => {
  const { eventsData } = useContext(AppContext);
  let topEvents = eventsData.map((tEvent) => {
    return { ...tEvent, review: computeAverageRatingOfEvent(tEvent) };
  });
  topEvents.sort((event1, event2) => event2.rating - event1.rating);
  topEvents = topEvents.slice(0, 3);
  return (
    <div className="text-center">
      <h1>Welcome the EventBright!</h1>
      <p>
        EventBright is a platform for people to discover events happening in
        their community!
        <br />
        EventBright is an open-to-all platform that maintains transparency with
        efficient review system.
      </p>
      <h5>Our top events:</h5>
      <div className="row">
        {topEvents.map((event) => {
          return (
            <div className="col">
              <div
                className="card h-100 bg-info shadow-sm"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <p className="card-text">{event.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
