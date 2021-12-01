import Head from "next/head";
import { attributes, react as HomeContent } from "../posts/zedzedze.md";
const Home = () => {
  const URL = "https://ayour.netlify.app/";
  let { title, date_time, thumbnail } = attributes;
  console.log(attributes);
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <div>
          <button>d</button>
        </div>
        <h1>{date_time}</h1>
        <img src={`/${thumbnail}`} width="300" height="300" alt="" />
        <div>
          gaga is love
        </div>
      </article>
    </>
  );
};
export default Home;
