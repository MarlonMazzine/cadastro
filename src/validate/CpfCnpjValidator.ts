import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from "class-validator";
import { PersonType } from "../entity/enum/PersonType";

@ValidatorConstraint({ name: "cpfCnpjValidator", async: false })
export class CpfCnpjValidator implements ValidatorConstraintInterface {
    validate(cpfCnpj: string, args: ValidationArguments) {
        const object = args.object as any;
        const personType = object.personType;

        if (personType === PersonType.PF) {
            return /^\d{11}$/.test(cpfCnpj);
        } else if (personType === PersonType.PJ) {
            return /^\d{14}$/.test(cpfCnpj);
        }

        return false;
    }

    defaultMessage(args: ValidationArguments) {
        const object = args.object as any;

        if (object.personType === PersonType.PF) {
            return "CPF deve ter exatamente 11 dígitos numéricos.";
        } else if (object.personType === PersonType.PJ) {
            return "CNPJ deve ter exatamente 14 dígitos numéricos.";
        }

        return "Tipo de pessoa inválido.";
    }
}
