import Image from "next/image";

export const Instructions = () => {
    return (
        <div className="instructions pl-10 mt-10">
            <div className="flex items-center flex-col flex-grow text-center text-lg rounded-xl border-2 border-primary bg-white bg-opacity-10 p-4">
                <h1 className="text-4xl font-bold mb-5 underline">Game Instructions</h1>
                <div className="break-words w-3/4 mb-7">
                    Welcome to SpeedRun Golf, where each level is a unique challenge blending Ethereum concepts with gameplay.
                    Uncover values hidden in smart contract security, testing protocols, and Solidity across different web pages.
                    Combine these values to perfect your virtual golf shots. Navigate through exciting levels where each swing brings you closer to mastering Ethereum concepts.
                    Dive into a playful adventure that weaves in the exciting elements of blockchain — it's not just about golf, it's about making complex concepts simple and enjoyable!<br />
                </div>
                <ol className="list-decimal list-inside space-y-2 mb-5">
                    <p className="underline">How to get started:</p>
                    <li>Entry Fee: Begin by paying the Greens Fee. Look for the ⛳️ icon to proceed.</li>
                    <li>Follow Hole Instructions: Adhere to the specific guidelines for each hole. 🏌️</li>
                    <li>Commit & Check Score: Once you've played all your shots, finalize your game by committing your scores. 🏁 🎰</li>
                    <li>Aim for Hall of Fame: Each accurate shot brings you closer to the Hall of Fame. 🥳</li>
                    <li>Withdraw Balance: Retrieve any remaining balance from your play. 💰</li>
                </ol>
                <p>
                    <Image
                        src="/grass-border.png"
                        width="530"
                        height="230"
                        alt="Level devider"
                    />
                </p>
            </div>

            {/* Checkpoint 1 */}
            <div className="break-words mt-10 mb-10">
                <h2 className="text-2xl">🏌️ Hole 1: Valuable Video content 🍿</h2>
                <p>
                    <strong>Welcome Swing:</strong> Step onto the first green of SpeedRun Golf, where your journey begins with ease and enjoyment.
                    The challenges ahead will level up your knowledge and precision but fear not—we're here to guide you through.
                    <br />
                    <br />
                    <strong>The Content Drive:</strong> Immerse yourself in the realm of Ethereum content.
                    Each video and playlist is a part of the puzzle, revealing clues that will craft your strategy and inform your virtual swing.
                </p>
                <br />
                <p>
                    For your opening shot, add together the numbers from these four clues to calculate the total ETH value that will serve as your first shot's value.
                </p>
                <p>
                    Visit the <a href="https://www.youtube.com/playlist?list=PLJz1HruEnenD77QAsqnk7KG8rSOMk0B99" target="_blank" rel="noopener noreferrer" className="text-xl">BG Labs Playlist</a>:
                </p>
                <p>
                    Watch the <b>"Burner Wallets"</b> video, and pause around the 1:50 timestamp. 📽️ <br />
                    - Take note of the <code>last digit</code> of the YourContract address shown in the video.
                </p>
                <p className="mb-8 px-2">
                    <Image
                        src="/burner_wallet.png"
                        width="830"
                        height="230"
                        alt="Burner Wallets Video"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    In the same playlist, find the <b>"EVM Fundamentals"</b> video. (1:40 timestamp 📽️)<br />
                    - Count how many <code>Nodes</code> Austin draws.
                </p>
                <p className="mb-8 px-2">
                    <Image
                        src="/note_bg.png"
                        width="830"
                        height="230"
                        alt="Buidl Guidl EVM Fundamentals Video"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>

                <p> Now, let's cruise to the <a href="https://www.youtube.com/playlist?list=PLJz1HruEnenAf80uOfDwBPqaliJkjKg69" target="_blank" rel="noopener noreferrer" className="text-xl">Web2 - Web3</a> playlist.</p>
                <p> 🕵️ New to Web3? Dive into the first week's videos in this playlist for a friendly introduction to the basics, paving your way to becoming a poweruser!</p>
                <p className="mb-8 px-2">
                    <Image
                        src="/w2_w3.png"
                        width="830"
                        height="230"
                        alt="Web2 - Web3 playlist"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>- Observe how many fingers Carlos is holding up at the start of the video <code>Day 1</code>.</p>
                <p>- Find the count of NFTs owned by sanfordstout.eth on OpenSea in the <code>Week 1 Day 4</code> video.</p>
                <br />
                <p>
                    ℹ️ Once you've tallied the figures and calculated your shot, take a moment to reflect on the insights gained.
                    This hole is not just about the numbers; it's about understanding the intricacies of Ethereum through practical examples.
                    With each value you've uncovered, you're building a foundation not just for this game, but for a deeper comprehension of blockchain technology.
                </p>
                <div className="mt-10">
                    ⛳️ Sum up the four values to determine the ETH amount for your first shot.<br />
                    Remember, each transaction counts as one shot, and the goal is to have the correct amount of <code>Played Balance</code> with the minimum number of <code>Shots Played</code>.
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>

            {/* Checkpoint 2 */}
            <div className="break-words mt-10 mb-10">
                <h1 className="text-2xl">🏌️ Hole 2: Valuable Links 🔗</h1>
                <p>
                    Now that you're warmed up, let's elevate the challenge in Hole 2!<br />
                    This round is all about finding valuable data and information in a set of valuable links.<br />
                    Your task is to pinpoint numerical values within these links and sum them up to determine the shot value for your second shot.
                </p>
                <p className="mt-10">
                    First Stop: <a href="https://ethereum.org/en/" target="_blank" rel="noopener noreferrer" className="text-xl">Ethereum.org</a>'s <code>Learn hub</code>.
                </p>
                <p>
                    - Examine the <code>Community hub</code>'s thumbnail. How many <code>individuals</code> do you see? <br />
                    Record that number.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/eth-org.png"
                        width="830"
                        height="230"
                        alt="Ethereum.org Image"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    Repository Recon: Move to the <a href="https://github.com/scaffold-eth/scaffold-eth-2" target="_blank" rel="noopener noreferrer" className="text-xl">Scaffold-ETH2</a> repository,
                    the backbone of our game.<br />
                </p>
                <p>
                    - In the <code>README.md</code>, find the account balance and note the amount displayed. <br />
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/se2-repo.png"
                        width="830"
                        height="230"
                        alt="Scalfold-ETH2 Repository Image"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    Builds Breakdown: For your final venture, head over to the <a href="https://buidlguidl.com" target="_blank" rel="noopener noreferrer" className="text-xl">🏰Buidlguidl</a> homepage.
                    Dive into the Featured Builds section and keep an eye out for the project named <strong>'Multi Sig Wallet'</strong>. <br />
                    -How many <code>keys</code> can you count in its image?
                </p>
                <p className="px-2">
                    <Image
                        src="/buidlguidl.png"
                        width="830"
                        height="230"
                        alt="Buidlguidl.com Image"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <br />
                <div className="mt-10 mb-10">
                    ⛳️ Sum up these numbers to calculate the total ETH for your shot value on Hole 2.<br />
                    Remember, the accuracy of your sum determines the success of your shot.
                </div>
                <p>
                    ℹ️ With the numbers in hand, take a moment to appreciate the knowledge these links have imparted.
                    Each one is carefully chosen to enhance your understanding of Ethereum's fundamentals and ongoing learning opportunities.
                    They are not just paths to your in-game success, but also gateways to deeper blockchain comprehension and resources for applying this newfound wisdom.
                    As you conclude Hole 2, reflect on the insights gained and how they can be applied beyond the game.
                    Your journey through SpeedRun Golf is not only about perfecting your score but also about enriching your blockchain expertise for the real world.
                </p>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>

            {/* Checkpoint 3 */}
            <div className="break-words mt-10">
                <h2 className="text-2xl mb-5">🏌️ Hole 3: Block Explorer 🧭</h2>
                <p>
                    Digital Safari Initiation: Gear up for an expedition into the dense forest of the Ethereum blockchain. <br />
                    With <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer" className="text-xl">Etherscan</a> as your compass,
                    venture through the intricate pathways of the network. Trace the trails of some infamous contracts 🫣.
                    It’s a journey into the heart of the cryptosphere, uncovering lessons from the past to secure the future.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/etherscan.png"
                        width="830"
                        height="230"
                        alt="Web2 - Web3 playlist"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    <strong>Explore Etherscan for Clues 🕵️</strong><br />
                    Copy and paste the following addresses into the Etherscan search bar:
                </p>
                <br />
                <li><code>0x098B716B8Aaf21512996dC57EB0615e2383E2f96</code></li>
                <p>
                    - What is the last digit of the <code>Ronin Bridge Exploiter address</code> ?
                </p>
                <br />
                <li><code>0x250e76987d838a75310c34bf422ea9f1AC4Cc906</code></li>
                <p>
                    - Navigate to the <code>Contract</code> tab and find out in which month of 2021 the contract was&nbsp;
                    <code>Submitted for verification at Etherscan.io</code>, <br />a timestamp of its blockchain existence.
                </p>
                <br />
                <li><code>0x489A8756C18C0b8B24EC2a2b9FF3D4d447F79BEc</code></li>
                <p>
                    - At the final address, dive into the <code>Analytics</code> section. Identify <code>the first digit</code> of the 🔵 ETH Highest Balance?
                </p>
                <br />
                <h2 className="text-xl font-bold mt-5 mb-5">These contracts are notorious for a reason.</h2>
                <p>
                    While searching for values, you may have noticed some clues about their stories. For a more comprehensive understanding, visit the <a href="https://rekt.news/de/leaderboard/" target="_blank" rel="noopener noreferrer">Rekt leaderboard</a>.<br />
                    These contracts rank in the top 3, underscoring the critical importance of ensuring that your contracts are well-crafted and secure.
                </p>
                <p>
                    ⚔️ <strong>Side Quest:</strong> Explore <a href="https://ethernaut.openzeppelin.com" target="_blank" rel="noopener noreferrer">The Ethernaut</a>&nbsp;
                    for insights into contract vulnerabilities and how they can be exploited. Learning from past mistakes is key to avoiding them in your own projects.
                </p>
                <br />
                <p>
                    ℹ️ You've traversed the blockchain's terrain, unearthing numbers and narratives.
                    These contracts, with their stories of vulnerability serve as beacons guiding you towards more secure blockchain development.
                    As you tally your ETH sum for hole 3's shot value, you're not only aiming for a low score in the game but also equipping yourself with the foresight
                    to prevent future pitfalls in the real-world blockchain ecosystem.
                </p>
                <div className="mt-10">
                    ⛳️ Combine the numbers you've retrieved to set the ETH value for your shot on Hole 3. This puzzle is not just about numbers;
                    it's a hands-on lesson in blockchain security and the weight of each digit in the grand scheme of the network.<br />
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/cart.png"
                    width="330"
                    height="230"
                    alt="cart"
                />
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                    className="negative-margin-top"
                />
            </p>

            {/* Checkpoint 4 */}
            <div className="break-words mt-10 mb-10">
                <h1 className="text-2xl" >🏌️ Hole 4: Solidity by Example</h1>
                <p>
                    Developer’s Tee-Off: As you dive deeper into the world of Ethereum development, Hole 4 takes you on a journey through &nbsp;
                    <a href="https://solidity-by-example.org" target="_blank" rel="noopener noreferrer" className="text-xl">SoliditybyExample</a>.
                    This isn't just a tutorial; it's a comprehensive guide to understanding and mastering smart contracts with practical, hands-on examples.
                    Your mission is to navigate through practical examples and pinpoint key values for your shot.
                </p>
                <p>
                    <strong>Navigate Through Examples to Find Values:</strong>
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/solidityByExample.png"
                        width="830"
                        height="230"
                        alt="Web2 - Web3 playlist"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    - Type Hunting: Visit the <code>Primitive Data Types</code> page. Look for the value assigned to the uint8 public variable <code>u8</code>.
                </p>
                <p>
                    - Gas Gauge: In the <code>Gas and Gas Price</code> section, find the missing value in the expression while (true) i += <code>?</code>.
                </p>
                <p>
                    - Event Logging: Check the <code>Events</code> section. Identify the maximum number of  <code>parameters</code> that can be indexed within an event.
                </p>
                <p>
                    - Ether Transaction Tracking: Go to <code>Sending Ether</code> section. Count the number of <code>arguments</code> in the <strong>sendViaCall(???)</strong> function.
                </p>
                <br />
                <p>
                    ℹ️ As you collect each number, think of it as building a puzzle.
                    Each piece helps you understand how Solidity, the language of Ethereum, works.
                    This challenge is about more than just finding numbers; it's about learning to think like a programmer.
                    When you add up your ETH total, you're using what you've learned to get better at creating smart contracts, which are the building blocks of Ethereum apps.
                    It's like putting together a neat and tidy piece of code that can do amazing things in the world of Ethereum.
                </p>
                <div className="mt-10">
                    ⛳️ Add the figures you've discovered to calculate the schot value for your play. These values are more than just numbers;
                    they're a code compiling into your strategic shot for Hole 4.<br />
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>

            {/* Checkpoint 5 */}
            <div className="break-words mt-10 mb-10">
                <h2 className="text-2xl mb-5">🏌️ Hole 5: Gas ⛽️</h2>
                <p>
                    Embark on a journey through the energy currents of Ethereum - the world of Gas - the essential fuel that powers transactions and smart contracts. Understanding Gas is crucial.
                    It determines how transactions are processed on the Ethereum network.<br />
                    Your mission is to explore how Gas works in Ethereum, learn about its pricing, and understand the vital role it plays in the network's functionality.
                </p>
                <br />
                <p>
                    Let's navigate to the documentation section titled <a href="https://ethereum.org/en/developers/docs/gas/" target="_blank" rel="noopener noreferrer" className="text-xl">Ethereum GAS AND FEES</a> and explore the following values:
                </p>
                <p>
                    - Scroll to the section titled <code>"How are Gas fees calculated?"</code> and determine into <strong>how many components</strong> the Gas you pay is divided.
                </p>
                <p>
                    - In the same resource, find out how much <code>tip</code> in gwei, Jordan includes to pay Taylor 1 ETH.<br />

                    <br />
                    Note those numbers.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/gas.png"
                        width="830"
                        height="230"
                        alt="EVM-Gas"
                        className="rounded-xl border-4 border-primary bg-white p-4"
                    />
                </p>
                <p>
                    For the next value, visit <a href="https://milkroad.com/ethereum/gas/ " target="_blank" rel="noopener noreferrer" className="text-xl">Milkroad's Ethereum Gas Guide</a>. <br />
                    - Under the <code>"What Is Ethereum Gas?"</code> section, look up how many billionths of an ETH one Gwei represents.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/Milkroad-gas.png"
                        width="830"
                        height="230"
                        alt="Milkroad Ethereum Gas Guidem"
                        className="rounded-xl border-4 border-primary bg-white p-4"
                    />
                </p>
                <br />
                <p>
                    ℹ️ Completing this level will enhance your understanding of Ethereum's Gas dynamics, a crucial aspect of blockchain technology.<br />
                    It will equip you with the knowledge to make informed decisions regarding transaction fees and better understand the network's operation during different times.
                    As you add up the values, reflect on the importance of Gas in the Ethereum network.
                    It's more than just a transaction fee; it's the fuel that powers the blockchain, ensuring its security and functionality.
                    By understanding Gas, you're not only improving your game but also equipping yourself with the knowledge to make informed decisions in the real-world blockchain ecosystem.
                </p>
                <div className="mt-10">
                    ⛳️ Gather these values to calculate the ETH needed for your shot.
                    Each correct number is a step towards deeper blockchain proficiency.
                    Remember, it's not just about hitting the target; it's about grasping the energy that drives the network.
                </div>
                <p>📈📉 To stay updated with the latest Gas prices, you can allways swing over to <a href="https://etherscan.io/gastracker" target="_blank" rel="noopener noreferrer" className="text-xl">Ethereum Gas Tracker ⛽</a></p>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>

            {/* Checkpoint 6 */}
            <div className="break-words mt-10 mb-10">
                <h2 className="text-2xl mb-5">🏌️ Hole 6: Smart Contract Testing and Testnets 🧪</h2>
                <p>
                    Step into the pivotal stage of smart contract creation: testing and testnets. <br />
                    This level takes you through the intricacies of unit testing and the utilization of testnets,
                    ensuring your contract's resilience and precision in the unyielding blockchain environment.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/testing.png"
                        width="830"
                        height="230"
                        alt="Testing Smart Contracts"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    Visit <a href="https://ethereum.org/en/developers/docs/smart-contracts/testing/" target="_blank" rel="noopener noreferrer" className="text-xl">TESTING SMART CONTRACTS</a><br />
                    - Looking at the <code>METHODS FOR TESTING SMART CONTRACTS</code>, how many <code>broad categories</code> of testing for Ethereum smart contracts are there?
                </p>
                <p>
                    Now let's look at the <a href="https://docs.openzeppelin.com/learn/writing-automated-tests" target="_blank" rel="noopener noreferrer" className="text-xl">OpenZeppelin Docs</a><br />
                    - In the section <code>Writing unit tests</code>, find out how many tests are run and passing on the Box contract?<br />
                    ❓ Can you decode the logic behind the test?
                </p>
                <p>
                    And finally, lets do some testnet exploration at <a href="https://chainlist.org" target="_blank" rel="noopener noreferrer" className="text-xl">chainlist.org</a>.<br />
                    - Locate the <code>chain ID</code> for the Rinkeby testnet!
                </p>
                <br />
                <p>
                    🧑‍🏫 Testing smart contracts both locally and on testnets is crucial, as it allows developers to identify and fix errors safely and efficiently before deploying to the mainnet,
                    where changes are irreversible and potentially costly as seen in Level 4.
                </p>
                <p>
                    ℹ️ As you finish Hole 6, consider how each number adds to your knowledge bank, just like each test adds to the robustness of a smart contract.
                    You're not only refining your gameplay strategy but also internalizing the discipline required for blockchain development.
                    Add up the values with care, and take your shot with the confidence of a seasoned developer.
                </p>
                <div className="mt-10">
                    ⛳️ Combine the figures you've uncovered to set the ETH value for your shot.
                    This process mirrors the precision and attention to detail needed in smart contract testing.<br />
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>

            {/* Checkpoint 7 */}
            <div className="break-words mt-10">
                <h2 className="text-2xl mb-5">🏌️ Hole 7: EVM </h2>
                <p>
                    This level unveils the Ethereum Virtual Machine (EVM) – the core of Ethereum's technology.<br />
                    As the powerful engine behind decentralized applications and smart contracts, the EVM is more than a network component; it's its soul.
                    Here, you'll dive deep into how the EVM executes smart contracts and sustains the network's state, enhancing your understanding of Ethereum's backbone.
                </p>
                <p>
                    Grab your popcorn 🍿 and cruise on over to <a href="https://www.youtube.com/watch?v=sTOcqS4msoU" target="_blank" rel="noopener noreferrer" className="text-xl">What is the EVM?</a> 🎬
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/EVM.png"
                        width="830"
                        height="230"
                        alt="What is the EVM?"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>Watch the "What is the EVM?" video with an eye on the Bytecode section.<br />
                    - Add up the <code>1’s</code> in the Bytecode explanation around 2:27 📽️
                </p>
                <br />
                <p>
                    ℹ️ As you tally up each '1' from the Bytecode, you're unraveling the fabric of Ethereum's engine.
                    These binary digits are the silent yet swift messengers carrying out the blockchain's commands.
                    Your count reflects a deepening understanding of the EVM—the diligent executor of smart contracts that upholds the network's vibrant ecosystem.
                    This insight does more than advance your game; it connects you to the core of Ethereum's transformative technology.
                </p>
                <div className="mt-10">
                    ⛳️ The '1's you count are more than digits; they represent the binary language that powers the EVM.
                    Your task is to add them up accurately, as they will define the ETH value for your shot in this level.
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/cart.png"
                    width="330"
                    height="230"
                    alt="cart"
                    className="flip-horizontal"
                />
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                    className="negative-margin-top z-10"
                />
            </p>

            {/* Checkpoint 8 */}
            <div className="break-words mt-10 mb-10">
                <h2 className="text-2xl mb-5">🏌️ Hole 8: Opcode Challenge 🥷</h2>
                <p>
                    Intro to Opcodes: Dive into the foundational aspect of the Ethereum Virtual Machine (EVM) - Opcodes. <br />
                    For smart contract developers, understanding opcodes is crucial, especially when it comes to calculating gas costs associated with executing EVM instructions.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/opcode.png"
                        width="350"
                        height="230"
                        alt="Opcodes for the EVM"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    Here, we have an unverified contract where you can see the opcodes and gain an understanding of how they work. <br />
                    You are given sequences of opcodes. Your task is to decode the gas cost for each instruction in the given sequences.
                </p>
                <p className="mb-10 px-2">
                    <Image
                        src="/contract.png"
                        width="990"
                        height="450"
                        alt="Contract"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    Visit <a href="https://ethereum.org/en/developers/docs/evm/opcodes/" target="_blank" rel="noopener noreferrer" className="text-xl">OPCODES FOR THE EVM</a>,
                    this page will be your reference to calculate the gas cost for each opcode.
                </p>
                <p>
                    After <code>0x</code> the first sequence is as follows: 6080 6040 52
                </p>
                <ul className="list-disc pl-5">
                    <li><code>PUSH1</code> 0x80</li>
                    <li><code>PUSH1</code> 0x40</li>
                    <li><code>MSTORE</code></li>
                </ul>
                <p>
                    - Calculate the total gas for this sequence.<br />
                    🕵️ Find Opcode PUSH1 (Stack #60) and see how much gas it will use,
                    then find MSTORE and calculate the gas consumed by this sequence.
                </p>
                <p className="mt-10">
                    Second Sequence: 6004 36 10
                </p>
                <ul className="list-disc pl-5">
                    <li><code>PUSH1</code> 0x04</li>
                    <li><code>CALLDATASIZE</code> 0x40</li>
                    <li><code>LT</code></li>
                </ul>
                <p>
                    - Calculate the total gas for this sequence.
                </p>
                <p className="mt-10">
                    And the third sequence is: 61002d 57 6000
                </p>
                <ul className="list-disc pl-5">
                    <li><code>PUSH2</code> 0x002d</li>
                    <li><code>JUMPI</code></li>
                    <li><code>PUSH1</code> 0x00</li>
                </ul>
                <p>
                    - Calculate the total gas cost for this opcode sequence. <br />
                    Your skill in calculating these costs truly reflects your deepening understanding of the energy that powers the blockchain.
                </p>
                <br />
                <p>
                    ℹ️ Finishing this challenge sharpens your technical skills, offering a peek into the detailed work needed for effective smart contract operations.
                    In figuring out the gas costs, you're also fitting together parts of a larger puzzle, revealing the inner workings of Ethereum—where every opcode is a vital instruction that powers the blockchain's heartbeat.
                    Understanding the gas cost of each opcode is essential for optimizing contract performance and managing transaction fees.
                </p>
                <div className="mt-10">
                    ⛳️ This hole challenges your understanding of opcode gas calculations, an essential skill for Ethereum development.<br />
                    - Add up the gas consumed by each sequence and take your shot.
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>

            {/* Checkpoint 9 */}
            <div className="break-words mt-10 mb-10">
                <h2 className="text-2xl mb-5">🏌️ Hole 9: Continue your journey</h2>
                <p>
                    This level is all about learning and exploring the vast resources available to Ethereum developers.
                    It's a chance to reflect on your journey and discover new opportunities for growth.
                </p>
                <p className="mb-8 px-2">
                    <Image
                        src="/community.png"
                        width="830"
                        height="230"
                        alt="Burner Wallets Video"
                        className="rounded-xl border-4 border-primary"
                    />
                </p>
                <p>
                    Let's begin by visiting <a href="https://ethereum.org/en/developers/docs/" target="_blank" rel="noopener noreferrer" className="text-xl">Ethereum.org's Developer Documentation</a>.<br />
                    - Explore the <code>WEB2 VS WEB3</code> section and find number of benefits <code>WEB3</code> has to offer.
                </p>
                <p>
                    Now, let's visit <a href="https://ethglobal.com/events" target="_blank" rel="noopener noreferrer" className="text-xl">ETHGlobal</a>.<br />
                    - On what day in september did <code>ETHOnline 2022</code> start?
                </p>
                <p>
                    And to finish this game off, let's visit the<a href="https://ethereum.org/en/community/" target="_blank" rel="noopener noreferrer" className="text-xl"> Ethereum community hub</a>. <br />
                    - How many reasons are there to <code>get involved</code>?
                </p>
                <br />
                <p>
                    ℹ️ As you reach the culmination of this remarkable journey through the world of Ethereum, remember that every end is just a new beginning.
                    This final level, "Continue Your Journey," is not just a challenge – it's a celebration of your curiosity and a gateway to further exploration.
                    Here, you've delved into the core of Ethereum, from its foundational technology to its vibrant community. Now, it's time to reflect on what you've learned and look forward to the endless possibilities that lie ahead.
                </p>
                <div className="mt-10">
                    ⛳️ You know the drill, each number you find is more than just a digit; it's a piece of the puzzle that is Ethereum.<br />
                    Tally up the values to determine the ETH value for your last shot.
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>


            {/* SCORING */}
            <p className="flex items-center flex-col flex-grow text-xl">
                Now that you have taken all your shots, it's time to commit your score 🏁 and see how you did 🎰!
            </p>
            <div className=" mt-20">
                <h2 className="text-2xl mb-5"><code>🏆 Hall of Fame 🏆</code></h2>
                If you managed to take the correct number of shots with the right amount of ETH, <br />
                you'll get the chance to immortalize your name in the SpeedRun Golf Hall of Fame, your moment to shine among the best players!
            </div>
            <div className="flex-container mb-10">
                <div className="break-words mt-10">
                    <h2 className="text-2xl mb-5"><code>🎯 SCORING 🎯</code></h2>
                    <ul className="list-disc pl-5 mt-4 mb-8">
                        <li>-✌️ Eagle: Congratulations! You scored two under par.</li>
                        <li>-☝️ Birdie: Well done! You scored one under par.</li>
                        <li>&nbsp;🥳 &nbsp;Par: Winner, Winner Chicken Dinner 🎉 You've matched par perfectly!</li>
                        <li>+☝️ Bogey: Just one over par. Keep practicing!</li>
                        <li>+✌️ Double Bogey: Scoring two over par. Keep your chin up!</li>
                    </ul>
                </div>
                <Image
                    src="/winner.png"
                    width="230"
                    height="230"
                    alt="Winner"
                    className="winner-image"
                />
            </div>
            <div className="text-lg mb-5" >
                Once you've committed your score and finished playing, click on the <code>💰</code> button to withdraw your balance. <br />
                This action will reset your game, allowing you to play again, especially if you didn't achieve a 'Hole in One 🏆' on your first try.
            </div>


            <p>Thanks for playing! We hope your journey was both enlightening and enjoyable. ✌️</p>
        </div>
    );
};
