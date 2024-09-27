import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsTrue(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isTrue',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return value === true;
                },
                defaultMessage(args: ValidationArguments) {
                    return 'O valor do campo \'' + args.property + '\' deve ser verdadeiro.';
                }
            }
        });
    };
}
