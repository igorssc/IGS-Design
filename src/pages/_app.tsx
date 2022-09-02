import type { AppProps } from "next/app";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
