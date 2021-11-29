import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
export default class Home extends Component {
  render() {
    let { title, date } = attributes;
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
        </article>
      </>
    );
  }
}
