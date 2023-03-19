/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="scroll-smooth">
      <Component {...pageProps} />
    </main>
  );
}
