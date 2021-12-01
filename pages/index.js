import Head from "next/head";
import Image from "next/image";
import GAGA from "../posts.json";
import styles from "../styles/Home.module.scss";
const Home = () => {
  const URL = "https://ayour.netlify.app/";
  return (
    <>
      <style jsx global>
        {`
          body {
            width: 100%;
            height: 100%;
            margin: 0%;
            padding: 0%;
          }
        `}
      </style>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div className={styles.hero}>
        <div className={styles.hero_child}>
          {GAGA.map((art, i) => {
            return (
              <div key={i} className={styles.each_post}>
                <div>
                  <div>
                    <Image
                      loading="lazy"
                      src={`/${art.thumbnail}`}
                      width="360"
                      height="300"
                      alt=""
                    />
                  </div>
                  <h2>{art.title}</h2>
                  <div>
                    <p>{art.content.slice(0, 200) + "..."}</p>
                  </div>
                  <div>
                    <button>read more...</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
