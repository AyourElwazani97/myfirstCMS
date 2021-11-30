import Head from "next/head";
import { attributes, react as HomeContent } from "../posts/hello.md";
import Image from "next/image";
const Home = () => {
  const URL = "https://ayour.netlify.app/";
  let { title, date, thumbnail } = attributes;
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
        <h1>{date}</h1>
        <Image src={`/${thumbnail}`} width="300" height="300" alt="" />
      </article>
    </>
  );
};
export default Home;
