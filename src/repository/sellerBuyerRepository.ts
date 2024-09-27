import { AppDataSource } from "../config/db";
import { SellerBuyer } from "../entity/SellerBuyer";

export class SellerBuyerRepository {
    static getRepository() {
        return AppDataSource.getRepository(SellerBuyer);
    }
}
