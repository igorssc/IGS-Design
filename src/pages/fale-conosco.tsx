import { NextPage } from "next";
import Head from "next/head";
import { FormContact } from "../Components/FormContact";

const FaleConosco: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Fale conosco</title>
      </Head>
      <FormContact />
    </>
  );
};

export default FaleConosco;
