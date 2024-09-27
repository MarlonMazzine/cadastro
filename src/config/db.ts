import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQLDB_HOST || "localhost",
    port: parseInt(process.env.MYSQLDB_PORT || "3306"),
    username: process.env.MYSQLDB_USER || "root",
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    entities: ["src/entity/**/*.ts"],
    synchronize: true,
    logging: true,
});
