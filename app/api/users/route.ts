// app/api/protocols/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initDatabase } from "@/libs/typeorm";
import AppDataSource from "@/db/ormconfig";
import { User } from "@/db/models/User.model";

export async function GET() {
  try {
    await initDatabase();
    const userRepo = AppDataSource.getRepository(User);
    const users = await userRepo.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await initDatabase();
    const userRepo = AppDataSource.getRepository(User);
    const body = await req.json();

    const { email, password } = body;

    if (!email && !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newUser = userRepo.create({ email, password});
    const savedUser = await userRepo.save(newUser);

    return NextResponse.json(savedUser, { status: 201 });
  } catch (error) {
    console.error("Error creating users:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}