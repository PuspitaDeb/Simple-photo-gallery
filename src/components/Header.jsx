function Header() {
  return (
    <header className="header">
      <div className="container navbar">

        <a href="#home" className="logo">
          Photo<span>Gallery</span>
        </a>

        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;