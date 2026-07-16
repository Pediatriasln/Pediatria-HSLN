import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Manifesto do PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon da aba do navegador */}
        <link rel="icon" href="/favicon.ico" />

        {/* Cor da barra de endereço em dispositivos móveis */}
        <meta name="theme-color" content="#1e40af" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
