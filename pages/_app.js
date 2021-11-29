import { useEffect, useRef } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const curs = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      curs.current.style.left = x + "px";
      curs.current.style.top = y + "px";
    });
  }, []);
  return (
    <>
      <div ref={curs} className="curs"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
