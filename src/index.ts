import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/db";
import { SellerBuyerController } from "./controller/sellerBuyerController";

dotenv.config();

export const app = express();
app.use(express.json());

const port = process.env.PORT || 4568;

AppDataSource.initialize()
    .then(() => {
        app.post("/seller-buyer", SellerBuyerController.createSellerBuyer);
        
        app.listen(port, () => {
            console.log(`Escutando na porta ${port}`);
        });
    })
    .catch((error) => console.log("Error: ", error));
