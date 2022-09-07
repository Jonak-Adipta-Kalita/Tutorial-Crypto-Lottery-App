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
import { useState } from "react";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const [quantity, setQuantity] = useState<number>(1);

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
              <div className="flex-1">
                <Header />
                <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
                  <div className="stats-container">
                    <h1 className="text-5xl text-white font-semibold text-center">
                      The Next Draw
                    </h1>
                    <div className="flex justify-between p-2 space-x-2">
                      <div className="stats">
                        <h2 className="text-sm">Total Pool</h2>
                        <p className="text-xl">0.1 MATIC</p>
                      </div>
                      <div className="stats">
                        <h2 className="text-sm">Tickets Remaining</h2>
                        <p className="text-xl">100</p>
                      </div>
                    </div>
                    {/* Countdown Timer */}
                  </div>
                  <div className="stats-container space-y-2">
                    <div className="stats-container">
                      <div className="flex justify-between items-center text-white pb-2">
                        <h2 className="">Price per Ticket</h2>
                        <p className="">0.01 MATIC</p>
                      </div>
                      <div className="flex text-white items-center space-x-2 bg-[#091818] border-[#004337] border p-4">
                        <p className="">TICKETS</p>
                        <input
                          type="number"
                          className="flex w-full bg-transparent text-right outline-none"
                          min={1}
                          max={10}
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                      </div>
                      <div className="space-y-2 mt-5">
                        <div className="stats-container-2-content font-extrabold text-sm">
                          <p className="">Total cost of Tickets</p>
                          <p className="">0.999</p>
                        </div>
                        <div className="stats-container-2-content">
                          <p className="">Service Fees</p>
                          <p className="">0.001 MATIC</p>
                        </div>
                        <div className="stats-container-2-content">
                          <p className="">+ Network Fees</p>
                          <p className="">TBC</p>
                        </div>
                      </div>
                      <button className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md text-white shadow-xl disabled:from-gray-600 disabled:to-gray-600 disabled:text-gray-100 disabled:cursor-not-allowed">
                        Buy Tickets
                      </button>
                    </div>
                  </div>
                </div>
                <div className=""></div>
              </div>
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
