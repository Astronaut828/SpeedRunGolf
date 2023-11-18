import { useState } from "react";
import { parseEther } from "viem";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const [visible, setVisible] = useState(true);
  const [etherAmount, setEtherAmount] = useState("");
  const [inputKey, setInputKey] = useState(0);

  const parsedEtherAmount = parseFloat(etherAmount);
  const etherEquivalent = isNaN(parsedEtherAmount) ? 0 : parsedEtherAmount / 100;

  const { writeAsync: writeShotAsync, isLoading: isShotLoading } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "makeShot",
    value: parseEther(etherEquivalent.toString()), 
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
      setTimeout(() => {
        setEtherAmount(""); 
        setInputKey(prevKey => prevKey + 1);
      }, 2000);
    }
  });


  const { writeAsync: writePayGreensFeeAsync, isLoading: isPayGreensFeeLoading } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "payGreensFee",
    value: parseEther("0.02"), 
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { writeAsync:commitScore, isLoading: iscommitScoreLoading } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "commitScore",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  })

  const { writeAsync:withdrawPlayerBalance, isLoading: iswithdrawPlayerBalanceLoading } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "withdrawPlayerBalance",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  })


  return (
    <div className="flex relative pb-10">
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20 py-5 px-5 justify-center items-center">

      <div className="flex flex-row items-center justify-between max-w-md bg-stone-300 bg-opacity-70 rounded-2xl shadow-lg px-2 py-3 w-full mt-2 mb-1">
          <div key={inputKey} className="flex flex-row items-center justify-center gap-2 sm:gap-5 w-full">
            <input
              type="text"
              placeholder="SHOT VALUE"
              className="input font-bai-jamjuree w-full mx-3 px-6 border border-primary text-lg sm:text-2xl bg-base-200 bg-opacity-70 placeholder-grey uppercase"
              onChange={e => setEtherAmount(e.target.value)}
            />

            <div className="flex rounded-full border border-primary p-2 mr-3 flex-shrink-0">
                <button
                  className="btn btn-primary rounded-full bg-base-300 text-3xl capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                  onClick={() => writeShotAsync()}
                  disabled={isShotLoading}
                >
                  {isShotLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      🏌️
                    </>
                  )}
                </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between max-w-md bg-stone-300 bg-opacity-70 rounded-2xl shadow-lg px-2 py-2 w-full mt-1 mb-1">
          <p className="mx-10 text-blue-950"><strong>Pay Greens Fee</strong></p>
          <div className="flex rounded-full items-center justify-center border border-primary p-2 mr-3 flex-shrink-0">
            <button
              className="btn btn-primary rounded-full bg-base-300 text-3xl capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
              onClick={() => writePayGreensFeeAsync()}
              disabled={isPayGreensFeeLoading}
            >
              {isPayGreensFeeLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  ⛳️
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between max-w-md bg-stone-300 bg-opacity-70 rounded-2xl shadow-lg px-2 py-2 w-full mt-1 mb-1">
          <p className="mx-10 text-blue-950"><strong>Commit Score</strong></p>
          <div className="flex rounded-full items-center justify-center border border-primary p-2 mr-3 flex-shrink-0">
              <button
                className="btn btn-primary rounded-full bg-base-300 text-3xl capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                onClick={() => commitScore()}
                disabled={iscommitScoreLoading}
              >
                {iscommitScoreLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    🏁
                  </>
                )}
              </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between max-w-md bg-stone-300 bg-opacity-70 rounded-2xl shadow-lg px-2 py-2 w-full mt-1 mb-1">
          <p className="mx-10 text-blue-950"><strong>Withdraw played balance</strong></p>
          <div className="flex rounded-full items-center justify-center border border-primary p-2 mr-3 flex-shrink-0">
              <button
                className="btn btn-primary rounded-full bg-base-300 text-3xl capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                onClick={() => withdrawPlayerBalance()}
                disabled={iswithdrawPlayerBalanceLoading}
              >
                {iswithdrawPlayerBalanceLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    💰
                  </>
                )}
              </button>
          </div>
        </div>
      
        <div className={`mt-10 flex gap-2 ${visible ? "" : "invisible"} max-w-xl`}>
          <div className="flex gap-5 bg-stone-300 bg-opacity-80 z-0 p-7 rounded-2xl shadow-lg">
            <span className="text-3xl ">👋</span>
            <div>
              <div className="text-blue-950">
                
              </div>
              <div className="mt-2 text-blue-950">
                Reminder: Please remember that the Green Fee and Gas costs are non-refundable when your played balance is withdrawn. Have fun 🥳 and good luck!
                <br />Greens Fee cost:{" "}
                <code className="italic font-bold [word-spacing:-0.5rem]">
                   0.02 ETH
                </code>{" "}
              </div>
            </div>
          </div>
          <button
            className="btn btn-circle btn-ghost h-6 w-6 bg-opacity-80 border border-primary z-0 min-h-0 drop-shadow-md"
            onClick={() => setVisible(false)}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
