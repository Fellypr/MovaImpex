"use client";

import "./card.css";
import Link from "next/link";

import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Card() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="card">
      <Link href="/servicos" className="card-content" data-aos="fade-up">
        <picture>
          <img
            src="/img/capacitacao-presencial-du-e-novo-processo-de-exportacao.jpg"
            alt="Banner"
          />
        </picture>
        <h3 className="card-title">Serviços</h3>
        <p className="card-text">
          Comércio exterior Conheça os nossos serviços para Importar ou
          Exportar. Saiba mais
        </p>
      </Link>

      <Link href="/nossaEmpresa" className="card-content" data-aos="fade-up">
        <picture>
          <img src="/img/GettyImages-1140820205.jpg" alt="Banner" />
        </picture>
        <h3 className="card-title">Nossa Empresa</h3>
        <p className="card-text">
          Acreditamos Que o crescimento e solidez é construído através de
          transparência e honestidade. Saiba mais
        </p>
      </Link>

      <Link href="/informacoes" className="card-content" data-aos="fade-up">
        <picture>
          <img
            src="/img/capacitacao-presencial-exportacao-passo-a-passo.jpg"
            alt="Banner"
          />
        </picture>
        <h3 className="card-title">Informações</h3>
        <p className="card-text">
          Acompanhamos Sua carga, da preparação do embarque até a chegada ao
          destino na Importação e na Exportação. Saiba mais
        </p>
      </Link>
    </div>
  );
}
