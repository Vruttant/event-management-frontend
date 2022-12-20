import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import EventsList from "./EventsList";
import SideBar from "./Sidebar";

const AppContainer = ({ componentToRender, eventData }) => {
  console.log(eventData);
  return (
    <div>
      <Navbar
        navbarTitle="Eventr"
        navbarLinks={[
          { linkText: "Home", linkPath: "/" },
          { linkText: "Events", linkPath: "/events" },
        ]}
      />
      <div className="d-flex h-screen">
        <SideBar />
        <div className="border">
          {componentToRender === "events" ? (
            <div className="p-3">
              <h4>Events near you...</h4>
              <EventsList eventData={eventData} />
            </div>
          ) : componentToRender === "home" ? (
            <div className="h-screen">
              <LandingPage />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default AppContainer;
