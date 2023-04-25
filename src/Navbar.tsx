import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <a href="/">PetNation</a>
      </h1>
      <div>
        <a href="/sign-up"> SignUp</a>
        <a href="/about"> About Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
