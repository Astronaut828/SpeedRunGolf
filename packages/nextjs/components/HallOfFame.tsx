import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const HallOfFame = () => {
  const { address } = useAccount();
  
  // Using useScaffoldContractRead hook to fetch hall of fame names
  const { data: hallOfFameNames, isError, isLoading } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: 'getAllNames',
  });

  // Optional error handling
  useEffect(() => {
    if (isError) {
      // Handle error case
      console.error('Error fetching hall of fame names');
    }
  }, [isError]);

  // Function to render hall of fame names
  const renderHallOfFameNames = () => {
    if (isLoading) {
      // Optionally render loading state
      return <div>Loading...</div>;
    }

    if (hallOfFameNames && hallOfFameNames.length > 0) {
      return hallOfFameNames.map((name, index) => (
        <div key={index} className="text-l px-2 py-2">
          {name}
        </div>
      ));
    } else {
      return <div className="text-l px-2 py-2">No Hall of Fame Entries</div>;
    }
  };

  // JSX for the component
  return (
    <div className="halloffame flex flex-col mx-auto w-3/4 justify-center items-center rounded-xl border-2 border-primary bg-base-content bg-opacity-50">
        <h1 className="text-neutral-content text-center text-4xl mt-5 p-2"><strong>🏆 HALL OF FAME - "HOLE IN ONE" PLAYERS 🏆</strong></h1>
        <div className="text-neutral-content text-center text-3xl mt-5 mb-5">
            {renderHallOfFameNames()}
        </div>
    </div>
  );
};
