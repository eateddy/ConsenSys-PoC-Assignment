import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../store";

export const GetWalletNfts = () => {
  const snap = useSnapshot(state)

  // To use Infura API to get NFT data of the connected wallet
  const getWalletNfts = async () => {
    try {
      // Getting information of user from current login session 
      const address = snap.userAccount
      const chainId = snap.chainId
      const params = { address, chainId }
      // Infura API call to the backend - passing the user login details as parameters
      const response = await axios.get("http://localhost:5001/getwalletnfts", { params });
      
      console.log("params:", params )
      
      // Backend Infura API response to frontend
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