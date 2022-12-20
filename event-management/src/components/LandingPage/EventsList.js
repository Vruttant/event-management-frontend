import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Clock, GeoAlt, CalendarEvent } from "react-bootstrap-icons";
import { useState } from "react";
import EventDetails from "../EventsPage/EventDetails";

const EventsList = ({ eventData }) => {
  const [show, setShow] = useState(false);
  const [activeEvent, setActiveEvent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (currentEvent) => {
    console.log(currentEvent);
    setShow(true);
    setActiveEvent(currentEvent);
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
      {eventData
        ? eventData.map((currentEvent) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-3 justify-items-center"
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
