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

        <meta property="og:title" content="DangerousDan996 Website" />
        <meta property="og:type" content="I graduated from NSCC IT Programming (Class of 2020).
                    I build 2D/3D games for game jam, personal projects and 2.5D games for my indie game team named Monstrous Entertainment.
                    We are currently working on a 2.5D platformer called Vex Monsters.where you save monsters from an evil mysterious villain"/>
        <meta property="og:image" content="https://i.imgur.com/BMy6J0r.png" />
        <meta property="og:url" content="https://dangerousdan996-nextjs-frontend.vercel.app/"></meta>

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
