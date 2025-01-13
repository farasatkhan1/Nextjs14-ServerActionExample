'use server';

import AppDataSource from "@/db/ormconfig";
import { User } from "@/db/models/User.model";

export const deleteUserAccount = async (email: string): Promise<void> => {
  try {
    // Initialize the database if not already initialized
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("✅ Database initialized in deleteUserAccount.");
    }

    const userRepository = AppDataSource.getRepository(User);

    // Find the user by ID
    const user = await userRepository.findOneBy({ email: email });

    if (!user) {
      throw new Error('User not found');
    }

    // Remove the user
    await userRepository.remove(user);
    console.log(`User with ID ${email} has been deleted.`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user');
  }
};
