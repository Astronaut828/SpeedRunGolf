import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { formatEther } from 'viem';
import { Address } from "~~/components/scaffold-eth";
import {
  useAnimationConfig,
  useScaffoldContract,
  useScaffoldContractRead,
  useScaffoldContractWrite,
} from "~~/hooks/scaffold-eth";

export const ContractData = () => {
  const { address } = useAccount();
  const [scoreVisible, setScoreVisible] = useState(false);
  const [hasHoleInOne, setHasHoleInOne] = useState(false);
  
  const { data: yourContract } = useScaffoldContract({ contractName: "YourContract" });
  console.log("yourContract: ", yourContract);

  const { data: greensFeePayed } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: 'greensFeePayed',
    args: [address],
  }); 

  const { data: playedBalance } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: 'playedBalance',
    args: [address],
  }); 

  const { data: playedShots } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: 'shotsMade',
    args: [address],
  }); 

  const { data: score, error } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: 'score',
    args: [address],
  }); 

  const { showAnimation: showGreensFeeAnimation } = useAnimationConfig(greensFeePayed);
  const { showAnimation: showPlayedShotssAnimation } = useAnimationConfig(playedShots);

  
  const [playerName, setPlayerName] = useState("");
  const [isSubmittingName, setIsSubmittingName] = useState(false);

  const { writeAsync: writeHallOfFameAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "enterHallOfFame",
    args: [playerName],
    onBlockConfirmation: txnReceipt => {
      console.log("🎉 Name entered into Hall of Fame", txnReceipt.blockHash);
      setIsSubmittingName(false);
    },
  });
  
  const submitNameToHallOfFame = async () => {
    if (playerName.length === 0 || playerName.length > 15) {
      alert('Name must be between 1 and 15 characters.');
      return;
    }
    setIsSubmittingName(true);
    try {
      await writeHallOfFameAsync();
    } catch (error) {
      console.error('Error submitting to Hall of Fame:', error);
      alert('Failed to enter the Hall of Fame. Make sure you have a hole-in-one!');
    } finally {
      setIsSubmittingName(false);
    }
  };

  useEffect(() => {
    if (error) {
      console.error('Error fetching score:', error);
      setHasHoleInOne(false);
    } else if (score === "Hole-in-One") {
      setHasHoleInOne(true);
    } else {
      setHasHoleInOne(false);
    }
  }, [score, error]);


  return (
    <div className="flex flex-col justify-center items-center pt-5 mt-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
      <div className="flex flex-col max-w-md bg-stone-300 bg-opacity-70 rounded-2xl shadow-lg px-5 py-5 w-full">

        <div className="flex flex-col max-w-md bg-base-200 bg-opacity-70 rounded-2xl shadow-lg px-5 py-4 w-full mb-3 mt-2">
          <div className="bg-base-300 border border-primary rounded-xl mt-1 flex items-end justify-between">
              <div className="text-l text-right min-w-[3rem] px-2 py-2.5 flex justify-end font-bai-jamjuree">Player:</div>
              <div className="text-2xl text-right min-w-[3rem] px-2 py-2.5 flex justify-end font-bai-jamjuree">
                <Address address={address} />
              </div>
          </div>
          <div className={`${showGreensFeeAnimation ? "animate-zoom" : ""}`}>
            <div className="bg-base-300 border border-primary rounded-xl mt-5 mb-1  flex items-end justify-between">
              <div className="text-l text-right min-w-[3rem] px-2 py-2.5 flex justify-end font-bai-jamjuree">Greens Fee Payed</div>
              <div className="text-2xl text-right min-w-[3rem] px-3 py-1.5 flex justify-end font-bai-jamjuree">
                {greensFeePayed ? '✅' : '❌'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-md bg-base-200 bg-opacity-70 rounded-2xl shadow-lg px-5 py-4 w-full mb-3 mt-2">
          <div className={`${showPlayedShotssAnimation ? "animate-zoom" : ""}`}>
          <div className="bg-base-300 border border-primary rounded-xl mt-1 flex items-end justify-between">
              <div className="text-l text-right min-w-[3rem] px-2 py-2.5 flex justify-end font-bai-jamjuree">Shots Played</div>
              <div className="text-2xl text-right min-w-[3rem] px-3 py-1.5 flex justify-end font-bai-jamjuree">
                {`${playedShots?.toString()} 🏌️`|| "0"}
              </div>
            </div>
          </div>
          <div className="bg-base-300 border border-primary rounded-xl mt-5 mb-1  flex items-end justify-between">
            <div className="text-l text-right min-w-[3rem] px-2 py-2.5 flex justify-end font-bai-jamjuree">Played Balance</div>
            <div className="text-2xl text-right min-w-[3rem] px-3 py-1.5 flex justify-end font-bai-jamjuree">
              {playedBalance ? `${formatEther(playedBalance)} ♢` : "0 ♢"}
            </div>
          </div>
        </div>

        <div className="relative flex flex-row items-center justify-between max-w-md bg-base-200 bg-opacity-70 rounded-2xl shadow-lg pl-5 pr-2 py-2 w-full mt-1 mb-1">
          {scoreVisible && (
            <div
              className="bg-base-300 border border-primary px-3 rounded-xl"
              onClick={() => setScoreVisible(false)}
            >
              {error ? (
                <p className="text-center text-l mt-4"><strong>Score not committed</strong></p>
              ) : (
                score !== undefined ? (
                  <p className="text-center text-xl mt-4"><strong>{score.toString()}</strong></p>
                ) : (
                  <p className="text-center text-l mt-4"><strong>Score not committed</strong></p>
                )
              )}
            </div>
          )}
          {!scoreVisible && (
            <button
              className="bg-base-300 border border-primary px-3 rounded-xl"
              onClick={() => setScoreVisible(true)}
            >
              <p className="text-center text-l mt-4"><strong>Check Score</strong></p>
            </button>
          )}
          <div className="flex rounded-full items-center justify-center border border-primary p-2 mr-3 flex-shrink-0">
            <button
              className="btn btn-primary rounded-full bg-base-300 text-3xl capitalize font-normal text-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
              onClick={() => {
                setScoreVisible(prev => !prev);
                setTimeout(() => {
                  setScoreVisible(false);
                }, 5000); // Auto-hide after 5 seconds
              }}
            >
              🎰
            </button>
          </div>
        </div>


        {hasHoleInOne && (
            <div className="flex flex-col items-center justify-between max-w-md bg-stone-300 bg-opacity-70 rounded-2xl shadow-lg px-2 py-3 w-full mt-2 mb-1">

            <div className="w-full text-center py-2">
              <span className="text-lg sm:text-2xl font-bold text-black">🎉"Hole-in-One"🎉<br />  Enter the Hall of Fame<br /> Record Your Name in History</span>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 sm:gap-5 w-full">
              <input
                type="text"
                placeholder="Enter Name"
                maxLength={15}
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                className="input font-bai-jamjuree w-full mx-3 px-6 border border-primary text-lg sm:text-2xl bg-base-200 bg-opacity-70 placeholder-grey uppercase"
              />
              <div className="flex rounded-full border border-primary p-2 mr-3 flex-shrink-0">
                <button
                  className={`btn btn-primary rounded-full bg-base-300 text-3xl capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${isSubmittingName ? 'loading' : ''}`}
                  onClick={submitNameToHallOfFame}
                  disabled={isSubmittingName}
                >
                  {isSubmittingName ? 'Submitting...' : '🏆'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
