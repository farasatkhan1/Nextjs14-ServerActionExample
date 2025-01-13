// D:\personal-projects\next14-test\libs\typeorm.ts
import AppDataSource from "@/db/ormconfig";

export async function initDatabase() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("✅ Database connected");
  }
}