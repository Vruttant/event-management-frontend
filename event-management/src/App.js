import EventsData from "./data/EventsData";
import { Routes, Route } from "react-router-dom";
import AppContainer from "./components/LandingPage/AppContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppContainer componentToRender="home" />} />
        <Route
          path="/events"
          element={
            <AppContainer componentToRender="events" eventData={EventsData} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
