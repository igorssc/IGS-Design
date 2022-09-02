import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../Components/Header";
import { OurServices } from "../Components/OurServices";
import { Portfolio } from "../Components/Portfolio";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design</title>
      </Head>
      <Header />
      <OurServices />
      <Portfolio />
    </>
  );
};

export default Home;
