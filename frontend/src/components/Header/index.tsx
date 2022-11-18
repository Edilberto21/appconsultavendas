import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>App Consulta Vendas</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/betinho1281">@betinho1281</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
