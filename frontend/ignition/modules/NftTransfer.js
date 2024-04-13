import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("nftTransfer", (m) => {
  const nftTransfer = m.contract("nftTransferContract", []);


  return { nftTransfer };
});
