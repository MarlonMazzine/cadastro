import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PersonType } from "./enum/PersonType";

@Entity("seller_buyer")
export class SellerBuyer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: PersonType, default: PersonType.PF })
    personType: PersonType;

    @Column({ type: "varchar", length: 14, nullable: false, unique: true })
    cpfCnpj: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 15, nullable: false })
    mobilePhone: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    landline: string;

    @Column({ type: "varchar", length: 255, nullable: false, unique: true })
    email: string;

    confirmEmail: string;

    @Column({ type: "varchar", length: 9, nullable: false })
    zipCode: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    street: string;

    @Column({ type: "varchar", length: 10, nullable: false })
    number: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    complement: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    city: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    district: string;

    @Column({ type: "varchar", length: 2, nullable: false })
    state: string;

    @Column({ type: "boolean", default: false })
    acceptedTerms: boolean;
}
