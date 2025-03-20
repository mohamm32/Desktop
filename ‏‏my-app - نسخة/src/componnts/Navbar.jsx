import "./navbar.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#">Explore</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Offers</a></li>
      </ul>
      <div className="nav-icons">
        <div className="notification">
          <img src="src\assets\notification bell.png" alt="Notifications" />
          <span className="badge"></span>
        </div>
        <img src="src\assets\profile picture.png" alt="Profile" className="profile-img" />
      </div>
    </nav>

  );
}