import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    Validate,
} from "class-validator";
import { PersonType } from "../entity/enum/PersonType";
import { CpfCnpjValidator } from "../validate/CpfCnpjValidator";
import { IsTrue } from "../validate/Istrue";

export class SellerBuyerDTO {
    @IsEnum(PersonType, { message: "O tipo de pessoa deve ser PF ou PJ." })
    personType: PersonType;

    @IsNotEmpty()
    @Validate(CpfCnpjValidator)
    cpfCnpj: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @Matches(/^\(\d{2}\) \d{5}-\d{4}$/, {
        message: "Formato do celular inválido.",
    })
    mobilePhone: string;

    @IsOptional()
    @Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
        message: "Formato do telefone fixo inválido.",
    })
    landline?: string;

    @IsNotEmpty()
    @IsEmail({}, { message: "Email inválido." })
    email: string;

    @IsNotEmpty()
    confirmEmail: string;

    @IsNotEmpty()
    @IsString()
    zipCode: string;

    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsString()
    number: string;

    @IsOptional()
    @IsString()
    complement?: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    district: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsTrue({ message: "Você deve aceitar os termos para prosseguir com o cadastro." })
    acceptedTerms: boolean;

    validateEmailConfirmation() {
        if (this.email !== this.confirmEmail) {
            throw new Error("Email e Confirmar Email devem ser iguais.");
        }
    }
}
