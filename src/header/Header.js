import MainMenu from "./mainMenu/MainMenu";
import Nav from "./nav/Nav";



function Header() {
  return (
    <header className="header">
      <Nav />
      <MainMenu />

    </header>
  );
}

export default Header;
