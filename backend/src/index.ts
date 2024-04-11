import express, { Express, Request, Response } from "express";
import Moralis from "moralis";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = 5001;
const app: Express = express();
app.use(cors());
app.use(express.json());

const APIKEY: string = process.env.API_KEY;

// Infura NFT API is no longer supported - make assumption this is the Infura NFT API and code will reflect that when the new NFT API is released
app.get('/getwalletnfts', async (req: Request, res: Response) => {
  // Getting the address and chain from the query parameters
  const { address, chainId } = req.query; 
  console.log("check", req.query)
  
  try {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: `${chainId}`,
      format: 'decimal',
      normalizeMetadata: true,
      mediaItems: true,
      address: `${address}`
    });

    res.json(response.raw);
    console.log(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

Moralis.start({
  apiKey: APIKEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls on port ${port}`);
  });
});