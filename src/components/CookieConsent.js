"use client";
import { useState, useEffect } from "react";
import "./cookieConsent.css";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <p>
        Usamos cookies para melhorar sua experiência no site. Ao continuar, você
        concorda com nossa{" "}
        <a href="/politica" target="_blank" rel="noopener noreferrer">
          Política de Privacidade
        </a>.
      </p>
      <button onClick={acceptCookies}>Aceitar</button>
    </div>
  );
}
