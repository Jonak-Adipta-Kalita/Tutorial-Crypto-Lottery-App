import { useMetamask } from "@thirdweb-dev/react";

const Login = () => {
  const connectWithMetamask = useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col text-center items-center justify-center">
      <div className="flex flex-col items-center mb-10">
        <img
          src="/favicon.ico"
          alt=""
          className="rounded-full h-56 w-56 mb-10"
        />
        <h1 className="text-6xl text-white font-bold">
          THE BEASTNIGHT TV DRAW
        </h1>
        <h2 className="text-white">
          Get Started by Logging in with your MetaMask
        </h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
