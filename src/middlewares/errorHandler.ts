import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (err.code === "ER_DUP_ENTRY") {
        return res
            .status(400)
            .json({ message: "CPF/CNPJ ou email já cadastrados." });
    }
    return res.status(500).json({ message: "Erro interno do servidor." });
}
