
import './App.css';
import Nav from "./Nav.js";

// Site header with logo and navigation
function Header() {
  return (
    <>
      <header className="flex-container justify-between">
          <img className="logo" src="/images/logo.png" alt="Logo Little Lemon" />
          <Nav />
      </header>
    </>
  );
}

export default Header;
