import { AdditionalInformation } from "@/Components/AdditionalInformation";
import { ButtonScrollTop } from "@/Components/ButtonScrollTop";
import { ButtonWhatsApp } from "@/Components/ButtonWhatsApp";
import { Footer } from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { BackdropProvider } from "@/hooks/useBackdrop";
import "@/styles/globals.scss";
import PageNProgress from "next-styled-nprogress";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { Analytics } from "react-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Analytics id="G-D4MB103KR2">
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
    </Analytics>
  );
}
