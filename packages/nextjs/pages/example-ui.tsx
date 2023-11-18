import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";
import { Instructions } from "~~/components/Instructions";


const ExampleUI: NextPage = () => {

  return (
    <>
      <MetaHeader
        title="Play Golf | Scaffold-ETH 2"
        description="Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="screen-warning">
        <div className="flex-cover-viewport">
          <h1 className="text-lg p-5">
            Optimized for Full-Screen Experience: For the best gameplay,
            please enjoy this game on a full-sized screen such as a laptop or desktop monitor.
            Mobile devices may not provide the optimal experience due to their smaller screen sizes. 🙏</h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 flex-grow ">
        <div className="instructions">
          <Instructions />
        </div>
        <div className="contract-data-fixed bg-[url('/assets/golf-hero.png')] bg-[length:100%_100%]">
          <div className="game-margin">
            <ContractData />
            <ContractInteraction />
          </div>
        </div>
      </div>

    </>
  );
};

export default ExampleUI;
