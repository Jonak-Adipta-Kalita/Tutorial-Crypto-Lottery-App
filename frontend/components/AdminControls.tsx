import {
  useContract,
  useContractCall,
  useContractData,
} from "@thirdweb-dev/react";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import { ethers } from "ethers";
import toast from "react-hot-toast";

const AdminControls = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: totalCommission } = useContractData(
    contract,
    "operatorTotalCommission"
  );
  const { mutateAsync: drawWinnerTicket } = useContractCall(
    contract,
    "DrawWinnerTicket"
  );
  const { mutateAsync: refundAll } = useContractCall(contract, "RefundAll");
  const { mutateAsync: restartDraw } = useContractCall(contract, "restartDraw");
  const { mutateAsync: withdrawCommission } = useContractCall(
    contract,
    "WithdrawCommission"
  );

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
      <h2 className="">Admin Controls</h2>
      <p className="mb-5">
        Total commission to be withdrawn:{" "}
        {totalCommission &&
          ethers.utils.formatEther(totalCommission?.toString())}{" "}
        MATIC
      </p>

      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button
          className="admin-buttons"
          onClick={async () => {
            const notification = toast.loading("Drawing a Lucky Winner...");

            try {
              const data = await drawWinnerTicket([{}]);
              toast.success("Winner selected!!", {
                id: notification,
              });
            } catch (err) {
              toast.error("Whoops... something went wrong...", {
                id: notification,
              });
            }
          }}
        >
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw Winner
        </button>
        <button
          className="admin-buttons"
          onClick={async () => {
            const notification = toast.loading("Withdrawing commision...");

            try {
              const data = await withdrawCommission([{}]);
              toast.success("Money Transfered!!", {
                id: notification,
              });
            } catch (err) {
              toast.error("Whoops... something went wrong...", {
                id: notification,
              });
            }
          }}
        >
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" /> Withdraw
          Commission
        </button>
        <button
          className="admin-buttons"
          onClick={async () => {
            const notification = toast.loading("Restarting Draw...");

            try {
              const data = await restartDraw([{}]);
              toast.success("Restarted Draw!!", {
                id: notification,
              });
            } catch (err) {
              toast.error("Whoops... something went wrong...", {
                id: notification,
              });
            }
          }}
        >
          <ArrowPathIcon className="h-6 mx-auto mb-2" /> Restart Draw
        </button>
        <button
          className="admin-buttons"
          onClick={async () => {
            const notification = toast.loading("Refunding all...");

            try {
              const data = await refundAll([{}]);
              toast.success("Refunded all!!", {
                id: notification,
              });
            } catch (err) {
              toast.error("Whoops... something went wrong...", {
                id: notification,
              });
            }
          }}
        >
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2" /> Refund All
        </button>
      </div>
    </div>
  );
};

export default AdminControls;
