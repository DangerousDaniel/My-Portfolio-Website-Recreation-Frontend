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

        <meta name="title" content="DangerousDan996 Portfolio Website" />
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dangerousdan996.com/" />
        <meta property="og:title" content="DangerousDan996 Portfolio Website" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://imgur.com/u33c1tf.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dangerousdan996.com/" />
        <meta property="twitter:title" content="DangerousDan996 Portfolio Website" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://imgur.com/u33c1tf.png" />

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
