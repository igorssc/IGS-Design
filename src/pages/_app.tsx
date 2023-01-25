import { AdditionalInformation } from "@/components/AdditionalInformation";
import { ButtonScrollTop } from "@/components/ButtonScrollTop";
import { ButtonWhatsApp } from "@/components/ButtonWhatsApp";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackdropProvider } from "@/hooks/useBackdrop";
import "@/styles/globals.scss";
import PageNProgress from "next-styled-nprogress";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BackdropProvider>
        <PageNProgress
          color="#fff"
          showSpinner={false}
          height="4px"
          delay={200}
        />
        <Navbar />
        <Component {...pageProps} />
        <AdditionalInformation />
        <ButtonWhatsApp />
        <ButtonScrollTop />
        <Footer />
      </BackdropProvider>
    </SnackbarProvider>
  );
}
