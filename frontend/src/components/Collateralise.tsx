import { ethers } from 'ethers'
import { abi } from '../nftTransfer.json'

export const Collateralise = async (nftAddress: string, nftId: string) => {
  const testKey = import.meta.env.VITE_MM_PRIVATE_KEY
  const lineaSepoliaContractAddress = import.meta.env.VITE_LINEA_SEPOLIA_CONTRACT_ADDRESS
  const infuraApiKey = import.meta.env.VITE_INFURA_API_KEY
  const infuraProvider = new ethers.JsonRpcProvider(`https://linea-sepolia.infura.io/v3/${infuraApiKey}`);
  const testSigner = new ethers.Wallet(testKey, infuraProvider)

  {/* Calls on the contract */}
  const nftContract = new ethers.Contract(lineaSepoliaContractAddress, abi, testSigner)
  
  try {
    const tx = await nftContract.transferNFT(nftAddress, nftId)
    const receipt = await tx.wait(1);

    console.log('receipt:', receipt);

  } catch (error) {
    console.error('error: ', error)
    throw error
  }
  
}
