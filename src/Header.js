
import './App.css';
import Nav from "./Nav.js";

function Header() {
  return (
    <>
      <header className="flex-container justify-between">
          <img src={null} alt="Logo Little Lemon" />
          <Nav />
      </header>
    </>
  );
}

export default Header;
