import type { AppProps } from "next/app";
import { AdditionalInformation } from "../Components/AdditionalInformation";
import { ButtonScrollTop } from "../Components/ButtonScrollTop";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <AdditionalInformation />
      <Footer />
      <ButtonScrollTop />
    </>
  );
}

export default MyApp;
