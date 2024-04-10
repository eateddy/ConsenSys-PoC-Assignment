import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 5001;

app.get("/", (req: Request , res: Response) => {

})

app.listen(port, () => {
  console.log(`Listening for API Calls on port ${port}`);
});