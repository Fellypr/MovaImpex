"use client";
import { useState, useEffect } from "react";
import "./cookieConsent.css";
import { useLanguage } from "../../src/context/LanguageContext";
import Link from "next/link";

const translations = {
  pt: {
    message: "Usamos cookies para melhorar sua experiência no site. Ao continuar, você concorda com nossa",
    privacyPolicy: "Política de Privacidade",
    accept: "Aceitar",
  },
  en: {
    message: "We use cookies to improve your site experience. By continuing, you agree with our",
    privacyPolicy: "Privacy Policy",
    accept: "Accept",
  },
};

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const { locale } = useLanguage();
  const t = translations[locale];

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
        {t.message}{" "}
        <Link href="/politica" target="_blank" rel="noopener noreferrer">
          {t.privacyPolicy}
        </Link>.
      </p>
      <button onClick={acceptCookies}>{t.accept}</button>
    </div>
  );
}