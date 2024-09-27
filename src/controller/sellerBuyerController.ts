import { Request, Response } from "express";
import { validate } from "class-validator";
import { SellerBuyerDTO } from "../dto/SellerBuyerDTO";
import { SellerBuyerService } from "../service/sellerBuyerService";

export class SellerBuyerController {
    static async createSellerBuyer(req: Request, res: Response) {
        try {
            const sellerBuyerDto = new SellerBuyerDTO();
            Object.assign(sellerBuyerDto, req.body);

            const errors = await validate(sellerBuyerDto);
            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }

            try {
                sellerBuyerDto.validateEmailConfirmation();
            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }

            const newSellerBuyer = await SellerBuyerService.createSellerBuyer(
                sellerBuyerDto,
            );
            return res.status(201).json(newSellerBuyer);
        } catch (error: any) {
            if (error.code === "ER_DUP_ENTRY") {
                return res
                    .status(400)
                    .json({ message: "CPF/CNPJ ou email já cadastrados." });
            }

            return res.status(500).json({ message: error.message });
        }
    }
}
