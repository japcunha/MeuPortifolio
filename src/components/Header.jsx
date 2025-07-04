export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
        <div className="logo">
          <a href="#aboutMe">Joane Cunha</a>
        </div>
            <ul className="nav-links">
                <li><a href="#aboutMe">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            </div>
      </nav>
    </header>
  );
}
