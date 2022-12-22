import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Clock, GeoAlt, CalendarEvent } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import EventDetails from "../EventsPage/EventDetails";
import { AppContext } from "../../data/Context";

const EventsList = () => {
  const { eventsData, eventsDataHandler } = useContext(AppContext);
  console.log(eventsData);
  const [show, setShow] = useState(false);
  const [activeEvent, setActiveEvent] = useState({});
  const { user } = useContext(AppContext);

  const handleClose = () => setShow(false);
  const handleShow = (currentEvent) => {
    setShow(true);
    setActiveEvent(currentEvent);
  };

  const handleCancel = (currentEvent) => {
    const newEventsList = eventsData.filter(
      (event) => event.id !== currentEvent.id
    );
    eventsDataHandler(newEventsList);
  };
  return (
    <div className="row">
      {show ? (
        <EventDetails
          eventData={activeEvent}
          show={show}
          handleClose={handleClose}
        />
      ) : null}
      {eventsData
        ? eventsData.map((currentEvent) => {
            return (
              <div
                className="col mb-3 justify-items-center"
                key={currentEvent.id}
              >
                <Card
                  style={{ width: "30rem", height: "100%" }}
                  className="shadow-sm"
                >
                  <Card.Img variant="top" src={currentEvent.image} />
                  <Card.Body>
                    <Card.Title>{currentEvent.title}</Card.Title>
                    <ul className="list-unstyled">
                      <li className="p-1">
                        <span>
                          <GeoAlt /> {currentEvent.location}
                        </span>
                      </li>
                      <li className="p-1">
                        <span>
                          <CalendarEvent /> {currentEvent.date}
                        </span>
                      </li>
                      <li className="p-1">
                        <Clock /> {currentEvent.time}
                      </li>
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    {user ? (
                      user.is_organizer ? (
                        <Button
                          className="ms-1 float-end"
                          variant="danger"
                          onClick={() => handleCancel(currentEvent)}
                        >
                          Cancel Event
                        </Button>
                      ) : null
                    ) : null}
                    <Button
                      className="float-end"
                      variant="primary"
                      onClick={() => handleShow(currentEvent)}
                    >
                      View Details
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })
        : "There are no events"}
    </div>
  );
};

export default EventsList;
