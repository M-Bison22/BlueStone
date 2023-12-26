import "../homepage/index1.css";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
<header className="header">
<a href="/" className="logo">
<i class="fa-solid fa-gem"></i>
  {" "}
   BLUE STONE{" "}
</a>
<nav className="navbar">
<a href="/">home</a>
  <a href="/Mens">MEN</a>
  <a href="/Women">WOMEN</a>
  <a href="/Child">CHILD</a>

</nav>
<div className="icons">
  <div className="fas fa-bars" id="menu-btn" />

  <button
        className="btn"
        onClick={handleLogout}
      >
    <a href="/Login">Logout</a>
   </button>
</div>
</header>
</>
  );
}

export default Navbar;