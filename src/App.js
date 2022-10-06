import HomePage from "./components/HomePage";
import CreateEventPage from "./components/CreateEventPage";
import EventDetailsPage from "./components/EventDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateEventPage />} />
        <Route path='/event' element={<EventDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
