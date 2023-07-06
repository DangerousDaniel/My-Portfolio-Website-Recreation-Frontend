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
        <meta name="description" content="I build 2D/3D games for game jam, personal projects and 2.5D games for my indie game team named Monstrous Entertainment." />
        <meta property="og:url" content="https://www.dangerousdan996.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DangerousDan996 Portfolio Website" />
        <meta property="og:description" content="I build 2D/3D games for game jam, personal projects and 2.5D games for my indie game team named Monstrous Entertainment." />
        <meta property="og:image" content="images\vexmonsters\Screenshot 2022-03-25-121939.png" />
        <meta name="twitter:card" content="summary_large_image/" />
        <meta property="twitter:domain" content="dangerousdan996.com" />
        <meta property="twitter:url" content="https://www.dangerousdan996.com/" />
        <meta name="twitter:title" content="DangerousDan996 Portfolio Website" />
        <meta name="twitter:description" content="I build 2D/3D games for game jam, personal projects and 2.5D games for my indie game team named Monstrous Entertainment." />
        <meta name="twitter:image" content="images\vexmonsters\Screenshot 2022-03-25-121939.png" />

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
