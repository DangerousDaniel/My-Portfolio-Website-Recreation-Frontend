/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
      Last Updated: July 5, 2023
    Description: This class is the root of the app.
    Notes:
    Resources: 
*/

import Layout from "../components/layout/layout";
import Head from "next/head";
import '../styles/app.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="green darken-4">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="images\logo\my_youtube_gaming_logo_2020_v2.2.png"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <title> DangerousDan996 | Default Title</title>
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
