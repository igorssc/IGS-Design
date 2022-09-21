import PageNProgress from "next-styled-nprogress";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { AdditionalInformation } from "../Components/AdditionalInformation";
import { ButtonScrollTop } from "../Components/ButtonScrollTop";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BackdropProvider } from "../hooks/useBackdrop";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const TRACKING_ID = "G-D4MB103KR2";
  ReactGA.initialize(TRACKING_ID);

  const { pathname } = useRouter();

  useEffect(() => {
    ReactGA.pageview(pathname);
  }, [pathname]);

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
