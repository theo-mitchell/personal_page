import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import utilStyles from '../styles/utils.module.scss';
import Script from "next/script";
import MainPageLayout from "../components/mainpage-layout";

const Home = () => {
  return (
    <MainPageLayout>
      <Head>
        <title>Welcome</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/ogre.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
      </main>
      <h1 className={utilStyles.heading2Xl}>Test CSS</h1>
      <h1>Test CSS</h1>

      {/* <footer className={styles.footer}>
      </footer> */}
    </MainPageLayout>
  );
};

export default Home;
