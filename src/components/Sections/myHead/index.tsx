import Head from "next/head";

export const MyHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="description"
        content="Portfolio pessoal de João Prestes, desenvolvedor Full-Stack. Aqui você encontrará informações sobre meus projetos, habilidades e experiências profissionais."
      />
      <meta
        name="keywords"
        content="portfólio, desenvolvedor Full-Stack, projetos, habilidades, experiências profissionais, João Prestes"
      />
      <meta name="author" content="João C. Prestes" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <title>Portfólio | João Prestes</title>
    </Head>
  );
};
