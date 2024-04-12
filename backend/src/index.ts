import express, { Express, Request, Response } from "express";
import Moralis from "moralis";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = 5001;
const app: Express = express();
app.use(cors());
app.use(express.json());

const INFURA_API_KEY: string = process.env.INFURA_API_KEY;

{/* Infura NFT API is no longer supported (Nov 2023) 
- make assumption this is the Infura NFT API because the 
new NFT API has not been released yet*/}
app.get('/getwalletnfts', async (req: Request, res: Response) => {
  // Parameters received from frontend
  const { address, chainId } = req.query; 
  console.log("check", req.query)
  
  try {
    // API call with user information passed in
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: `${chainId}`,
      format: 'decimal',
      normalizeMetadata: true,
      mediaItems: true,
      address: `${address}`
    });

    // API call response passed back into the frontend
    res.json(response.raw);
    console.log(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

Moralis.start({
  apiKey: INFURA_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls on port ${port}`);
  });
});