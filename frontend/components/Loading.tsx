import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img src="/favicon.ico" alt="" className="rounded-full h-20 w-20" />
        <h1 className="text-lg text-white font-bold">
          Loading the BeastNight TV Draw
        </h1>
      </div>
      <PropagateLoader size={30} color="white" />
    </div>
  );
};

export default Loading;
