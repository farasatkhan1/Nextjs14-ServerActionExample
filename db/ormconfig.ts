// D:\personal-projects\next14-test\db\ormconfig.ts

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User.model";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "next14db",
  synchronize: true, // Don't use in production. Use migrations instead!
  logging: false, // Don't use it in production, it will mess-up your logs
  entities: [User], // Add your model(s) here
});

export default AppDataSource;