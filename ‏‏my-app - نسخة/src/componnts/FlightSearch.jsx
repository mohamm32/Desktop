import { useState } from "react";
import "./flight-search.css";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("Singapore (SIN)");
  const [arrival, setArrival] = useState("Los Angeles (LA)");
  const [date, setDate] = useState("2022-05-01");

  return (
    <div className="flight-search-container">
      <h1 className="text-4xl font-bold">Let’s explore & travel the world</h1>
      <p className="mt-2 text-lg">Find the best destinations and the most popular stays!</p>
      <div className="flight-search-box">
        <div className="radio-group">
          <label>
            <input type="radio" value="return" checked={tripType === "return"} onChange={() => setTripType("return")} />
            Return
          </label>
          <label>
            <input type="radio" value="one-way" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} />
            One-way
          </label>
        </div>
        <div className="input-group">
          <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="Departure" />
          <input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} placeholder="Arrival" />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button className="search-button">Search Flights</button>
      </div>
    </div>
  );
};

export default FlightSearch;