import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { YourContract } from "../typechain-types";

describe("YourContract", function () {
  let owner: Signer;
  let player: Signer;
  let player2: Signer;
  let contract: YourContract;
  const PAR_SHOTS = 9;
  const greensFee = ethers.utils.parseEther("0.02");
  

  beforeEach(async () => {
    [owner, player, player2] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("YourContract");
    contract = (await yourContractFactory.deploy()) as YourContract;
    await contract.deployed();
  });

    // Player registration (greensfee)
    it("should allow paying greens fee", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      const greensFeePaid = await contract.greensFeePayed(await player.getAddress());
      expect(greensFeePaid).to.equal(true);
    });

    it("should not allow paying greens fee multiple times", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await expect(contract.connect(player).payGreensFee({ value: greensFee })).to.be.revertedWith("Greens fee already paid");
    });

    it("should not allow playing a shot without paying greens fee", async () => {
      const freshContract = (await (await ethers.getContractFactory("YourContract")).deploy()) as YourContract;
      await freshContract.deployed();
      await expect(freshContract.connect(player).makeShot({ value: ethers.utils.parseEther("0.02") })).to.be.revertedWith(
        "Greens fee not paid"
      );
    });

    // Player shots & score
    it("should not allow playing a shot with less than 0.01 Ether", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await expect(contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.009") })).to.be.revertedWith(
        "SEND SOME ETH!"
      );
    });

    it("should return correct score for a player", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      await contract.connect(player).commitScore()
      const score = await contract.score(await player.getAddress());
      expect(score).to.equal("TRY AGAIN!");
    });

    // Player balance withdrawal
    it("should allow player to withdraw their balance", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });

      const initialContractBalance = await ethers.provider.getBalance(contract.address);
      const initialPlayerBalance = await ethers.provider.getBalance(await player.getAddress());

      await contract.connect(player).withdrawPlayerBalance();

      const finalContractBalance = await ethers.provider.getBalance(contract.address);
      const finalPlayerBalance = await ethers.provider.getBalance(await player.getAddress());

      expect(finalContractBalance).to.be.lt(initialContractBalance);
      expect(finalPlayerBalance).to.be.gt(initialPlayerBalance);
    });

    it("should reset player's balance after withdrawal", async () => {
      const balance = await contract.playedBalance(await player.getAddress());
      expect(balance).to.equal(0);
    });

    it("should not allow player to withdraw without balance", async () => {
      await expect(contract.connect(player).withdrawPlayerBalance()).to.be.revertedWith("No amount to withdraw");
    });

    //Contract balance withdrawal
    it("should not allow non-owners to withdraw the contract's balance", async () => {
      await expect(contract.connect(player).ownerWithdraw()).to.be.revertedWith("Not the owner");
    });

    it("should allow the owner to withdraw the contract's balance", async () => {
      const initialOwnerBalance = await ethers.provider.getBalance(await owner.getAddress());
      const contractBalanceBeforeWithdraw = await ethers.provider.getBalance(contract.address);

      const tx = await contract.connect(owner).ownerWithdraw();
      const receipt = await tx.wait();
      // Calculate the gas cost: gasUsed * effectiveGasPrice
      const gasCost = receipt.gasUsed.mul(receipt.effectiveGasPrice);

      const finalOwnerBalance = await ethers.provider.getBalance(await owner.getAddress());
      const contractBalanceAfterWithdraw = await ethers.provider.getBalance(contract.address);

      if (contractBalanceBeforeWithdraw.isZero()) {
          // If contract had no balance, then after adding back the gas cost, the owner's balance should be equal to the initial balance.
          expect(finalOwnerBalance.add(gasCost)).to.be.eq(initialOwnerBalance);
      } else {
          // If contract had balance, then after accounting for gas, the owner should have more than they started with.
          expect(finalOwnerBalance.add(gasCost)).to.be.gt(initialOwnerBalance);
      }
      
      expect(contractBalanceAfterWithdraw).to.equal(0);
    });

    // Edge cases (shots)
    it("should return 'Hole-in-One' for exact PAR_SHOTS with the correct value", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      for (let i = 0; i < 8; i++) {
          await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.1") });
      }
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.14") });
      await contract.connect(player).commitScore()
      const score = await contract.score(await player.getAddress());
      expect(score).to.equal("Hole-in-One");
    });

    it("should return 'TRY AGAIN!' for extremely high shot value", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      for (let i = 0; i < 1000; i++) {
        await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      }
      await contract.connect(player).commitScore()
      const score = await contract.score(await player.getAddress());
      expect(score).to.equal("TRY AGAIN!");
    });

    it("should return 'TRY AGAIN!' for not making minimum amount of shots", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      await contract.connect(player).commitScore()
      const score = await contract.score(await player.getAddress());
      expect(score).to.equal("TRY AGAIN!");
    });

    // Multiple player interactions
    it("should allow multiple players to pay the greens fee without affecting each other", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player2).payGreensFee({ value: greensFee });

      const greensFeePaidForPlayer = await contract.greensFeePayed(await player.getAddress());
      const greensFeePaidForPlayer2 = await contract.greensFeePayed(await player2.getAddress());

      expect(greensFeePaidForPlayer).to.equal(true);
      expect(greensFeePaidForPlayer2).to.equal(true);
    });

    it("should allow multiple players to play 9 shots without affecting each other's score", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player2).payGreensFee({ value: greensFee });

      for (let i = 0; i < 8; i++) {
          await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.1") });
          await contract.connect(player2).makeShot({ value: ethers.utils.parseEther("0.1") });
      }
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.12") });
      await contract.connect(player2).makeShot({ value: ethers.utils.parseEther("0.12") });

      await contract.connect(player).commitScore()
      await contract.connect(player2).commitScore()

      const scoreForPlayer = await contract.score(await player.getAddress());
      const scoreForPlayer2 = await contract.score(await player2.getAddress());

      expect(scoreForPlayer).to.equal("Eagle"); 
      expect(scoreForPlayer2).to.equal("Eagle");  
    });

    it("should allow multiple players to withdraw their balances without affecting each other", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player2).payGreensFee({ value: greensFee });

      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      await contract.connect(player2).makeShot({ value: ethers.utils.parseEther("0.02") });

      const initialBalancePlayer = await contract.playedBalance(await player.getAddress());
      const initialBalancePlayer2 = await contract.playedBalance(await player2.getAddress());

      await contract.connect(player).withdrawPlayerBalance();
      await contract.connect(player2).withdrawPlayerBalance();

      const finalBalancePlayer = await contract.playedBalance(await player.getAddress());
      const finalBalancePlayer2 = await contract.playedBalance(await player2.getAddress());

      expect(finalBalancePlayer).to.equal(0);
      expect(finalBalancePlayer2).to.equal(0);
      expect(initialBalancePlayer).to.not.equal(initialBalancePlayer2);
    });

    // Contract should not accept plain Ether transfers
    it("should reject plain Ether transfers", async () => {
      await expect(player.sendTransaction({ to: contract.address, value: ethers.utils.parseEther("1") }))
      .to.be.reverted;
    });
    
    // Game reset
    it("should reset everything after withdrawal", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      const tx = await contract.connect(player).withdrawPlayerBalance();

      // Expect the "GameReset" event to be emitted
      await expect(tx)
          .to.emit(contract, "GameReset")
    });

    it("should delete the player after withdrawal", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });

      await contract.connect(player).withdrawPlayerBalance();

      // Verify player's data has been removed/reset
      const playerBalance = await contract.playedBalance(await player.getAddress());
      expect(playerBalance).to.equal(0);
    });

    // Testing commit score
    it("should not allow committing score if greens fee is not paid", async () => {
      await expect(contract.connect(player).commitScore()).to.be.revertedWith(
        "Not the registered player or greens fee not paid"
      );
    });

    it("should not allow committing score if no shots have been made", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await expect(contract.connect(player).commitScore()).to.be.revertedWith(
        "No shots made"
      );
    });

    it("should not allow committing score if score has already been committed", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      await contract.connect(player).commitScore();
      await expect(contract.connect(player).commitScore()).to.be.revertedWith(
        "Score has already been committed"
      );
    });

    it("should allow a player to commit their score after paying greens fee and making a shot", async () => {
      await contract.connect(player).payGreensFee({ value: greensFee });
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.01") });
      await expect(contract.connect(player).commitScore()).to.not.be.reverted;
    });

    it("should allow a player with a hole-in-one to enter the Hall of Fame", async function () {
      await contract.connect(player).payGreensFee({ value: greensFee });
      for (let i = 0; i < 8; i++) {
        await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.1") });
      }
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.14") });
      await contract.connect(player).commitScore()
      await expect(contract.connect(player).enterHallOfFame("Player1"))
      .to.emit(contract, "PlayerInductedToHallOfFame")
      .withArgs(await player.getAddress(), "Player1");

      expect(await contract.isInducted(await player.getAddress())).to.be.true;
    });

    it("should fail if the player has not scored a hole-in-one", async function () {
      await contract.connect(player).payGreensFee({ value: greensFee });
      for (let i = 0; i < 4; i++) {
        await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.2") });
      }
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.14") });
      await contract.connect(player).commitScore()
      await expect(contract.connect(player).enterHallOfFame("Player"))
        .to.be.revertedWith("You must score a hole-in-one to enter the Hall of Fame");
    });

    it("should not allow a player to be inducted twice", async function () {
      await contract.connect(player).payGreensFee({ value: greensFee });
      for (let i = 0; i < 8; i++) {
        await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.1") });
      }
      await contract.connect(player).makeShot({ value: ethers.utils.parseEther("0.14") });
      await contract.connect(player).commitScore()
      await contract.connect(player).enterHallOfFame("Player1");
      // Attempt to induct again
      await expect(contract.connect(player).enterHallOfFame("Player1"))
        .to.be.revertedWith("Already in the Hall of Fame");
    });
});