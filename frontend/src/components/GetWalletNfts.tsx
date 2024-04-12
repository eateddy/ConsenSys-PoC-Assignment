import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../store";

export const GetWalletNfts = () => {
  const snap = useSnapshot(state)

  // To use Infura API to get NFT data of the connected wallet
  const getWalletNfts = async () => {
    try {
      const address = snap.userAccount
      const chainId = snap.chainId
      const params = { address, chainId }
      // Infura API call in the backend
      const response = await axios.get("http://localhost:5001/getwalletnfts", { params });
      
      console.log("params:", params )
      
      const data = response.data;
      if (data.result.length === 0) {
        return
      } else {
        state.isNftData = true
      }

      console.log("data.result check:", data.result)
      state.nftData = data.result;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <button
      onClick={() => getWalletNfts()}
    >
      Display NFTs in Wallet
    </button>
  )
}