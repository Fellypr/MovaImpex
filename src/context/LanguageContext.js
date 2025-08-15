'use client'; // O contexto precisa ser um Client Component

import { createContext, useState, useContext } from 'react';

// 1. Criação do contexto
const LanguageContext = createContext();

// 2. Criação do provedor
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('pt'); // Estado inicial: português

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Criação do hook customizado para usar o contexto
export const useLanguage = () => useContext(LanguageContext);