import { AdditionalInformation } from "@/Components/AdditionalInformation";
import { ButtonScrollTop } from "@/Components/ButtonScrollTop";
import { Footer } from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { BackdropProvider } from "@/hooks/useBackdrop";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BackdropProvider>
        <Navbar />
        <Component {...pageProps} />
        <AdditionalInformation />
        <ButtonScrollTop />
        <Footer />
      </BackdropProvider>
    </SnackbarProvider>
  );
}
