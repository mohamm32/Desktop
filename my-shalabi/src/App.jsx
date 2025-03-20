import Header from "./components/Header";
import FlightSearch from "./components/FlightSearch";
import TravelDashboard from "./components/TravelDashboard"
import "./App.css";
import PrepareTrip from "./components/PrepareTrip";
import PopularDestinations from "./components/PopularDestinations";
import RecommendedHolidays from "./components/RecommendedHolidays";
import PopularStays from "./components/PopularStays";
import NewsletterSignup from "./components/NewsletterSignup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FlightSearch />
      <TravelDashboard/>
      <PrepareTrip/>
      <PopularDestinations/>
      <RecommendedHolidays/>
      <PopularStays/>
      <NewsletterSignup/>
      <Footer/>
    </div>
  );
}

export default App;
