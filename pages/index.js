import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Image from 'next/image'
export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
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
            <button>
              d
            </button>
          </div>
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
                <Image src="/vercel.svg" width="200" height="200" alt="" />
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}