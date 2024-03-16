import Head from "next/head";

export const MyHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="Descrição da sua página" />
      <meta name="keywords" content="palavras-chave, para, SEO" />
      <meta name="author" content="João C. Prestes" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <title>Portfolio | João Prestes</title>

      {/* Links de estilos externos, scripts, etc., podem ser adicionados aqui */}
    </Head>
  );
};
