import { LanguageProvider } from "../context/LanguageContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mova Impex - Comércio Exterior",
  description:
    "O cuidado com cada detalhe é a base de um trabalho de excelência na importação e exportação de mercadorias.",
  keywords:
    "comércio exterior, importação, exportação, logística, assessoria aduaneira, Mova Impex",
  authors: [{ name: "Mova Impex", url: "https://movaimpex.com.br" }],
  openGraph: {
    title: "Mova Impex - Comércio Exterior",
    description:
      "O cuidado com cada detalhe é a base de um trabalho de excelência na importação e exportação de mercadorias.",
    url: "https://movaimpex.com.br",
    siteName: "Mova Impex",
    images: [
      {
        url: "/img/Design-sem-nome-3-1-150x150.png",
        width: 150,
        height: 150,
        alt: "Mova Impex Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mova Impex - Comércio Exterior",
    description:
      "O cuidado com cada detalhe é a base de um trabalho de excelência na importação e exportação de mercadorias.",
    images: [
      "/img/Design-sem-nome-3-1-150x150.png",
    ],
  },
  alternates: {
    canonical: "https://movaimpex.com.br",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/Design-sem-nome-3-1-150x150.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
