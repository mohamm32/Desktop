
import "./Travel-Dashboard.css";

const TravelDashboard = () => {
  const searches = [
    { from: "SIN", to: "LAX", date: "7 Sep 2021" },
    { from: "MY", to: "DUB", date: "9 Sep 2021" },
  ];

  return (
    <div className="recent-searches-container">
      <div className="recent-searches-content">
        <h2 className="recent-searches-title">RECENT SEARCHES</h2>
        <div className="search-box-container">
          {searches.map((search, index) => (
            <div key={index} className="search-box">
              <div className="top-row">
                <p className="from">{search.from}</p>
                <div className="flight-path">
                  <span>⚬--</span>
                  <span>✈</span>
                  <span>--⚬</span>
                </div>
                <p className="to">{search.to}</p>
              </div>
              <div className="bottom-row">
                <p className="date">
                  <span className="font-bold">Depart On:</span> {search.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelDashboard;