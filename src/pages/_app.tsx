import { AdditionalInformation } from "@/Components/AdditionalInformation";
import { ButtonScrollTop } from "@/Components/ButtonScrollTop";
import { ButtonWhatsApp } from "@/Components/ButtonWhatsApp";
import { Footer } from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { BackdropProvider } from "@/hooks/useBackdrop";
import "@/styles/globals.scss";
import { PageTransition } from "next-page-transitions";
import PageNProgress from "next-styled-nprogress";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BackdropProvider>
        <PageNProgress color="#fff" showSpinner={false} height="2px" />
        <Navbar />
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <AdditionalInformation />
        <ButtonWhatsApp />
        <ButtonScrollTop />
        <Footer />
        <style jsx global>{`
          .page-transition {
            height: 100px;
            width: 100%;
            background: black;
          }

          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </BackdropProvider>
    </SnackbarProvider>
  );
}
