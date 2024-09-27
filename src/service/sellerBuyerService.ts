import { SellerBuyer } from "../entity/SellerBuyer";
import { SellerBuyerDTO } from "../dto/SellerBuyerDTO";
import { SellerBuyerRepository } from "../repository/sellerBuyerRepository";

export class SellerBuyerService {
    static async createSellerBuyer(
        sellerBuyerDto: SellerBuyerDTO,
    ): Promise<SellerBuyer> {
        const sellerBuyerRepository = SellerBuyerRepository.getRepository();
        const newSellerBuyer = sellerBuyerRepository.create(sellerBuyerDto);
        return await sellerBuyerRepository.save(newSellerBuyer);
    }
}
