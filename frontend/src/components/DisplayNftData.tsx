import { useSnapshot } from "valtio";
import state from "../store";
import { Card } from "@web3uikit/core"
import { useEffect } from "react";

export const DisplayNftData = () => {

  const snap = useSnapshot(state)

  useEffect(() => {
    console.log(snap.nftData)
  })

  return (
    snap.nftData.map((nft: object, i: number) => (
      <div className="h-fit w-52 rounded-lg" key={i}>
        <Card>
          <span
            className='text-gray-800 font-extrabold text-lg'
          >
            {nft.name}
          </span>
          <img
            src={nft.media?.media_collection?.medium.url}
            className="w-full h-40"
          />
          <span
            className='text-gray-800 font-semibold text-sm'
          >
            {nft.normalized_metadata.name}
          </span>
        </Card>
      </div>
    ))
  )
}