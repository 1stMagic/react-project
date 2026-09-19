
import './App.css';

function Footer() {
  return (
    <>
      <footer className="flex-container">
          <div>
            <img src={null} alt="Logo" />
          </div>
          <div>
            <h6>Doormat</h6>
            <ul>
              <li><a href="">Menu</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Reservation</a></li>
              <li><a href="">Order Online</a></li>
              <li><a href="">Login</a></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <ul>
              <li><a href="">Address</a></li>
              <li><a href="">Phone number</a></li>
              <li><a href="">Email</a></li>
            </ul>
          </div>
          <div>
            <h6>Social Media</h6>
            <ul>
              <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">YouTube</a></li>
            </ul>
          </div>
      </footer>
    </>
  );
}

export default Footer;
