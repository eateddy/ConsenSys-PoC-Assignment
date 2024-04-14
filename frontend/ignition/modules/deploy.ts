import hre from "hardhat";

async function main() {
  const NftTransfer = await hre.ethers.getContractFactory("nftTransferContract");
  const nftTransfer = await NftTransfer.deploy();
  // await nftTransfer.deployed();
  console.log("nftTransfer deployed to:", nftTransfer);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });