// Import ethers from Hardhat package
const { ethers } = require("hardhat");

// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const JJVCoin = await ethers.getContractFactory("JJVCoin");
  const jjvCoin = await JJVCoin.deploy(); // Deploy the contract

  await jjvCoin.deployed(); // Wait for the contract to be deployed

  console.log("JJVCoin deployed to:", jjvCoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
