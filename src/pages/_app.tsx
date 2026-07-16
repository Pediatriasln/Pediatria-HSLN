import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("✅ Service Worker registrado com sucesso"))
        .catch((err) =>
          console.error("❌ Erro ao registrar Service Worker:", err)
        );
    }
  }, []);

  return <Component {...pageProps} />;
}
