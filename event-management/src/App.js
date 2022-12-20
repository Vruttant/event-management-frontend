import EventsList from "./components/LandingPage/EventsList";
import EventsData from "./data/EventsData";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateEventForm from "./components/Forms/CreateEventForm";

function App() {
  return (
    <div className="App p-3">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventsList eventData={EventsData} />} />
        <Route path="/events/create/" element={<CreateEventForm />} />
      </Routes>
    </div>
  );
}

export default App;
