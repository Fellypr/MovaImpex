import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="NavBarMain">
      <img
        width={150}
        height={70}
        src="https://movaimpex.com.br/wp-content/uploads/2021/11/Mova-Impex-PNG-2-1-1.png"
        className="custom-logo entered lazyloaded"
        alt="Mova Impex"
        decoding="async"
        loading="lazy"
      />
      <h2>Home</h2>
      <div className="languagens">
        <img
          decoding="async"
          width={70}
          height={70}
          src="https://movaimpex.com.br/wp-content/uploads/2021/11/united-states-2.png"
          alt="Bandeira EUA"
          loading="lazy"
        />
        <img
          decoding="async"
          width={70}
          height={70}
          src="https://movaimpex.com.br/wp-content/uploads/2021/11/brazil-1.png"
          alt="Bandeira Brasil"
          loading="lazy"
        />
      </div>
    </div>
  );
}
