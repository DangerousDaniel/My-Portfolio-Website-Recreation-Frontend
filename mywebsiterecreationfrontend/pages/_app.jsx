import Layout from "../comps/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
<div className="green darken-4">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <title> DangerousDan996 | {Component.pageTitle}</title>
      </Head>

      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </div>
      </div>
  )
}
