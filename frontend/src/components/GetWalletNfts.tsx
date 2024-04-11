import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../store";

export const GetWalletNfts = () => {
  const snap = useSnapshot(state)

  const getWalletNfts = async () => {
    try {
      const address = snap.userAccount
      const chainId = snap.chainId
      const params = { address, chainId }
      const response = await axios.get("http://localhost:5001/getwalletnfts", { params });
      
      console.log("params:", params )

      console.log(response)
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