//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
// import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl / Astronaut828
 */
contract YourContract {
	// State variables
	address private _owner;
	uint public gamesPlayed;
	uint immutable PAR_SHOTS = 9;
	address[] private inductedAddresses;

	// Events
	event GameReset(address indexed player);
	event PlayerInductedToHallOfFame(address indexed player, string name);

	// Modifiers
	modifier onlyOwner() {
		require(msg.sender == _owner, "Not the owner");
		_;
	}

	modifier commitedScore(address playerAddress) {
		require(
			players[playerAddress].scoreCommitted,
			"Score not committed, please commit score to see results"
		);
		_;
	}

	// Structs / Mappings
	struct Player {
		bool hasPaidGreenFee;
		bool scoreCommitted;
		uint256 balance;
		uint256 shots;
	}

	struct HallOfFameEntry {
		string name;
		bool inducted;
	}

	mapping(address => Player) private players;
	mapping(address => HallOfFameEntry) public hallOfFameEntries;
	mapping(address => bool) public isInducted;

	constructor() {
		_owner = msg.sender;
	}

	function payGreensFee() public payable {
		require(
			!players[msg.sender].hasPaidGreenFee,
			"Greens fee already paid"
		);
		require(msg.value == 0.02 ether, "Greens fee is 0.02 ETH");
		players[msg.sender].hasPaidGreenFee = true;
	}

	function makeShot() public payable {
		require(players[msg.sender].hasPaidGreenFee, "Greens fee not paid");
		require(msg.value >= 0.01 ether, "SEND SOME ETH!");
		require(
			players[msg.sender].scoreCommitted == false,
			"Score has already been committed"
		);

		// Update player's data
		players[msg.sender].balance += msg.value;
		players[msg.sender].shots += 1;
	}

	function greensFeePayed(address _player) public view returns (bool) {
		return players[_player].hasPaidGreenFee;
	}

	function playedBalance(
		address playerAddress
	) public view returns (uint256) {
		return players[playerAddress].balance;
	}

	function shotsMade(address playerAddress) public view returns (uint256) {
		return players[playerAddress].shots;
	}

	function commitScore() public {
		require(
			players[msg.sender].hasPaidGreenFee,
			"Not the registered player or greens fee not paid"
		);
		require(players[msg.sender].shots > 0, "No shots made");
		require(
			players[msg.sender].scoreCommitted == false,
			"Score has already been committed"
		);
		players[msg.sender].scoreCommitted = true;
	}

	function score(
		address playerAddress
	) public view commitedScore(playerAddress) returns (string memory) {
		require(
			players[playerAddress].hasPaidGreenFee,
			"Not the registered player or greens fee not paid"
		);

		if (players[playerAddress].shots == PAR_SHOTS) {
			if (players[playerAddress].balance == 94e16) {
				return "Hole-in-One";
			} else if (players[playerAddress].balance == 93e16) {
				return "Birdie";
			} else if (players[playerAddress].balance == 92e16) {
				return "Eagle";
			} else if (players[playerAddress].balance == 95e16) {
				return "Bogey";
			} else if (players[playerAddress].balance == 96e16) {
				return "Double Bogey";
			}
		}

		return "TRY AGAIN!";
	}

	function enterHallOfFame(string memory playerName) public {
		uint256 playerShots = players[msg.sender].shots;
		bool isHoleInOne = (playerShots == PAR_SHOTS &&
			players[msg.sender].balance == 94e16);

		require(
			isHoleInOne,
			"You must score a hole-in-one to enter the Hall of Fame"
		);
		require(!isInducted[msg.sender], "Already in the Hall of Fame");

		isInducted[msg.sender] = true;
		hallOfFameEntries[msg.sender] = HallOfFameEntry(playerName, true);
		inductedAddresses.push(msg.sender);

		emit PlayerInductedToHallOfFame(msg.sender, playerName);
	}

	function getAllNames() public view returns (string[] memory) {
		string[] memory names = new string[](inductedAddresses.length);
		for (uint i = 0; i < inductedAddresses.length; i++) {
			names[i] = hallOfFameEntries[inductedAddresses[i]].name;
		}
		return names;
	}

	function withdrawPlayerBalance() public {
		uint amount = players[msg.sender].balance;
		require(amount > 0, "No amount to withdraw");
		payable(msg.sender).transfer(amount);

		// Reset player's status
		delete players[msg.sender];

		// Game played counter
		gamesPlayed += 1;

		emit GameReset(msg.sender);
	}

	// Owner withdraw function / for green fees
	function ownerWithdraw() external onlyOwner {
		payable(_owner).transfer(address(this).balance);
	}
}
