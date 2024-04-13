require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");

require("dotenv").config();
const { VITE_MM_PRIVATE_KEY, VITE_INFURA_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    linea_sepolia: {
      url: `https://linea-sepolia.infura.io/v3/${VITE_INFURA_API_KEY}`,
      accounts: [VITE_MM_PRIVATE_KEY],
    }
  },
};