require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); // Add this line
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    // ... other network configs
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY // Your Etherscan API key
  },
};