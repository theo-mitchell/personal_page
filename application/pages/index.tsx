import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import utilStyles from '../styles/utils.module.scss';
import Script from "next/script";
import MainPageLayout from "../components/mainpage-layout";
import Blog from "./blog/index";
import { getSortedPostsData, PostData } from "../lib/posts";
import Link from "next/link";

const Home = () => {
  return (
    <MainPageLayout>
      <Head>
        <title>Welcome</title>
        <meta name="description" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png"/>
        <link rel="manifest" href="/images/favicon_io/site.webmanifest"/>
      </Head>
      <main className={styles.main}>
        <Image
          src="/images/ogre.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Link href="/blog">Blog</Link>
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


