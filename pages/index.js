import Head from "next/head";
import Image from "next/image";
import GAGA from "../posts.json";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import React from "react";
import NavBar from "../components/navbar";
const Home = () => {
  return (
    <>
      <style jsx global>
        {`
          body {
            width: 100%;
            height: 100%;
            margin: 0%;
            padding: 0%;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <NavBar />
      <div className={styles.hero}>
        <div className={styles.hero_child}>
          {GAGA.map((art, i) => {
            return (
              <React.Fragment key={i}>
                <Link href={`/post/n/${art.id}`}>
                  <a>
                    <div className={styles.each_post}>
                      <div>
                        <Image
                          loading="lazy"
                          src={`/${art.thumbnail}`}
                          width="360"
                          height="200"
                          alt=""
                        />
                      </div>
                      <div className={styles.post_Title}>
                        <p>{art.title}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
