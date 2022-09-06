import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
  useContractData,
  useContractCall,
} from "@thirdweb-dev/react";
import Loading from "../components/Loading";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  return (
    <>
      <Head>
        <title>JAK Crypto Lottery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {address ? (
            <div className="bg-[#091B18] min-h-screen flex flex-col">
              <Header />
            </div>
          ) : (
            <Login />
          )}
        </>
      )}
    </>
  );
};

export default Home;
