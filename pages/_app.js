import { useEffect, useRef } from "react";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from '../store'
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
    <Provider store={store}>
      <div ref={curs} className="curs"></div>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
