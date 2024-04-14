import { useSnapshot } from "valtio";
import state from "../store";
import { Card } from "@web3uikit/core"
import { useEffect } from "react";
import { Collateralise } from "./Collateralise";

export const DisplayNftData = () => {

  const snap = useSnapshot(state)

  useEffect(() => {
    console.log(snap.nftData)
  })

  return (
    // Map across array of objects to display specific NFT information
    snap.nftData.map((nft: object, i: number) => (
      <div className="h-fit w-52 rounded-lg" key={i}>
        <Card>
          {/* Display NFT collection name */}
          <span
            className='text-gray-800 font-extrabold text-lg'
          >
            {nft.name}
          </span>
          {/* Display NFT image */}
          <img
            src={nft.media?.media_collection?.medium.url}
            className="w-full h-40"
          />
          {/* Display specific NFT token name */}
          <span
            className='text-gray-800 font-semibold text-sm'
          >
            {nft.normalized_metadata.name}
          </span>
          <button
            className="flex justify-center font-bold text-white bg-gray-500"
            // Apply collateralise NFT function to button
            onClick={() => Collateralise(nft.token_address, nft.token_id)}
          >
              Collaterialise NFT?
          </button>
        </Card>
      </div>
    ))
  )
}