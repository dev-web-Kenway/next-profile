import Head from "next/head";

type MetaData = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: MetaData) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Dev-Web-Kenway",
  keywords: "Dev, Web, Kenway",
  description: "Dev-Web-Kenway profile",
};

export default Meta;
