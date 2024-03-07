//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/**
 * @title SpeedRunGolf Contract
 * @dev Implements payment and scoring logic for a SpeedRunGolf game
 * @author Astronaut828
 */
contract YourContract {
	// State variables
	/// @notice Owner of the contract, set to the deployer.
	address private _owner;

	/// @notice Counter for the number of games played.
	uint256 public gamesPlayed;

	/// @notice The standard number of shots considered par for the game.
	uint8 immutable PAR_SHOTS = 9;

	/// @notice List of addresses inducted into the Hall of Fame.
	address[] private inductedAddresses;

	// Events
	/**
	* @notice Emitted when a game is reset.
    * @param player The address of the player whose game is reset.
	*/
	event GameReset(address indexed player);

	/**
	* @notice Emitted when a player is inducted into the Hall of Fame.
    * @param player The address of the inducted player.
    * @param name The name of the inducted player.
	*/
	event PlayerInductedToHallOfFame(address indexed player, string name);

	// Modifiers
	/// @notice Ensures that the function is called by the owner of the contract.
	modifier onlyOwner() {
		require(msg.sender == _owner, "Not the owner");
		_;
	}

	/// @notice Ensures that a player's score has been committed before allowing access to certain functions.
	modifier commitedScore(address playerAddress) {
		require(
			players[playerAddress].scoreCommitted,
			"Score not committed, please commit score to see results"
		);
		_;
	}

	// Structs / Mappings for player data and Hall of Fame entries
	/// @notice Represents a player in the game, tracking payment status, score commitment, balance, and shots made.
	struct Player {
		bool hasPaidGreenFee;
		bool scoreCommitted;
		uint256 balance;
		uint256 shots;
	}

	/// @notice Represents an entry in the Hall of Fame, including the player's name and induction status.
	struct HallOfFameEntry {
		string name;
		bool inducted;
	}

	/// @dev Mapping of player addresses to their respective player data.
	mapping(address => Player) private players;

	/// @notice Mapping of player addresses to their Hall of Fame entries.
	mapping(address => HallOfFameEntry) public hallOfFameEntries;

	/// @notice Tracks whether a player address has been inducted into the Hall of Fame.
	mapping(address => bool) public isInducted;

	/// @notice Sets the contract deployer as the owner upon contract creation.
	constructor() {
		_owner = msg.sender;
	}

	/**
     * @notice Allows a player to pay the green fee and start playing.
     * @dev The green fee is set to 0.02 ETH. Throws an error if the fee is already paid or the sent value is incorrect.
     */
	function payGreensFee() public payable {
		require(
			!players[msg.sender].hasPaidGreenFee,
			"Greens fee already paid"
		);
		require(msg.value == 0.02 ether, "Greens fee is 0.02 ETH");
		players[msg.sender].hasPaidGreenFee = true;
	}

    /**
     * @notice Records a shot made by the player and requires a payment of 0.01 ETH per shot.
     * @dev Updates the player's balance and shot count. Throws an error if the greens fee hasn't been paid, the score is already committed, or the sent value is to low.
     */
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

    /**
     * @notice Checks if a player has paid the green fee.
     * @param _player The address of the player whose payment status is being checked.
     * @return bool Returns true if the green fee has been paid, otherwise false.
     */
	function greensFeePayed(address _player) public view returns (bool) {
		return players[_player].hasPaidGreenFee;
	}

    /**
     * @notice Returns the current balance of a player. This balance accumulates from making shots.
     * @param playerAddress The address of the player whose balance is being queried.
     * @return uint256 The current balance of the player in wei.
     */
	function playedBalance(
		address playerAddress
	) public view returns (uint256) {
		return players[playerAddress].balance;
	}

    /**
     * @notice Returns the total number of shots made by a player.
     * @param playerAddress The address of the player whose shot count is being queried.
     * @return uint256 The total number of shots made by the player.
     */
	function shotsMade(address playerAddress) public view returns (uint256) {
		return players[playerAddress].shots;
	}

    /**
     * @notice Commits a player's score, preventing further shots from being made. This action finalizes the player's participation in the current game.
     * @dev Requires that the player has paid the green fee and made at least one shot. Throws an error if these conditions are not met.
     */
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

    /**
     * @notice Calculates and returns the player's score based on the number of shots made and the player's current balance.
     * @param playerAddress The address of the player whose score is being calculated.
     * @return string A message indicating the player's score or encouraging them to try again.
     */
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

    /**
     * @notice Inducts a player into the Hall of Fame if they meet the criteria for a "hole-in-one" performance.
     * @param playerName The name of the player being inducted.
     * @dev Requires the player to have made exactly PAR_SHOTS and to have a balance indicating a "hole-in-one". Throws an error if the player does not meet these criteria or is already inducted.
     */
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

    /**
     * @notice Retrieves the names of all players inducted into the Hall of Fame.
     * @return string[] An array of names of all inducted players.
     */
	function getAllNames() public view returns (string[] memory) {
		string[] memory names = new string[](inductedAddresses.length);
		for (uint i = 0; i < inductedAddresses.length; i++) {
			names[i] = hallOfFameEntries[inductedAddresses[i]].name;
		}
		return names;
	}

    /**
     * @notice Allows a player to withdraw their accumulated balance. This resets the player's status for future games.
     * @dev Ensures the player has a balance to withdraw. The player's data is reset and balance is transferred to the player's address.
     */
	function withdrawPlayerBalance() public {
		uint amount = players[msg.sender].balance;
		require(amount > 0, "No amount to withdraw");
		// Reset player's status
		delete players[msg.sender];

		// Then transfer Ether to the player
		payable(msg.sender).transfer(amount);

		// Game played counter
		gamesPlayed += 1;

		emit GameReset(msg.sender);
	}

    /**
     * @notice Allows the owner of the contract to withdraw all Ether collected from green fees. 
     * @dev Can only be called by the owner of the contract. Transfers the contract's entire Ether balance to the owner.
     */
	function ownerWithdraw() external onlyOwner {
		payable(_owner).transfer(address(this).balance);
	}
}
