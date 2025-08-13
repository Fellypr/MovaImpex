import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="NavBarMain">
      <img
        src="/img/Logo/Mova-Impex-PNG-2-1-1.png"
        className="custom-logoEnteredLazyloaded"
        alt="Mova Impex"
        decoding="async"
        loading="lazy"
      />
      <h2 className="titleHome">Home</h2>
      <div className="languagens">
        <img
          decoding="async"
          src="https://movaimpex.com.br/wp-content/uploads/2021/11/united-states-2.png"
          alt="Bandeira EUA"
          loading="lazy"
          className="Bandeira"
        />
        <img
          decoding="async"
          src="https://movaimpex.com.br/wp-content/uploads/2021/11/brazil-1.png"
          alt="Bandeira Brasil"
          loading="lazy"
          className="Bandeira"
        />
      </div>
    </div>
  );
}
