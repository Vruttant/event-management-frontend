import EventsData from "./data/EventsData";
import { Routes, Route } from "react-router-dom";
import AppContainer from "./components/LandingPage/AppContainer";
import { useState } from "react";
import { AppContext } from "./data/Context";
function App() {
  const [currentEventData, setCurrentEventData] = useState(EventsData);
  const [eventsToShow, setEventsToShow] = useState(currentEventData);
  const [user, setCurrentUser] = useState({});

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          eventsData: currentEventData,
          eventsDataHandler: setCurrentEventData,
          eventsToShow: eventsToShow,
          eventsToShowDataHandler: setEventsToShow,
          user,
          setCurrentUser,
        }}
      >
        <Routes>
          <Route path="/" element={<AppContainer componentToRender="home" />} />
          <Route
            path="/events"
            element={<AppContainer componentToRender="events" />}
          />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
