import PageNProgress from "next-styled-nprogress";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { AdditionalInformation } from "../Components/AdditionalInformation";
import { ButtonScrollTop } from "../Components/ButtonScrollTop";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BackdropProvider } from "../hooks/useBackdrop";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <BackdropProvider>
          <PageNProgress
            color="#fff"
            showSpinner={false}
            height="5px"
            delay={200}
          />
          <Navbar />
          <Component {...pageProps} />
          <AdditionalInformation />
          <Footer />
          <ButtonScrollTop />
        </BackdropProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
