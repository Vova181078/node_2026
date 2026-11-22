import { IUser } from "../interfaces/user.interface.js";
import { userRepository } from "../repositories/user.repositories.js";
import { ApiError } from "../errors/api.errors.js";

class UserService {
    public async getAll(): Promise<IUser[]> {
        return await userRepository.getAll();
    }
    public async getById(userId: string): Promise<IUser> {
        const user = await userRepository.getById(userId);

        if (!user) {
            throw new ApiError("User not found", 404);
        }

        return user;
    }
    public async getByEmail(email: string): Promise<IUser | null> {
        return await userRepository.getByEmail(email);
    }
    public async create(dto: Partial<IUser>): Promise<IUser> {
        if (!dto.email) {
            throw new ApiError("Email is required", 400);
        }

        const existingUser = await userRepository.getByEmail(dto.email);

        if (existingUser) {
            throw new ApiError("Email already exists", 409);
        }

        return await userRepository.create(dto);
    }
    public async updateById(
        userId: string,
        dto: Partial<IUser>,
    ): Promise<IUser> {
        const user = await userRepository.getById(userId);

        if (!user) {
            throw new ApiError("User not found", 404);
        }

        const updatedUser = await userRepository.updateById(userId, dto);

        if (!updatedUser) {
            throw new ApiError("User not found", 404);
        }

        return updatedUser;
    }
    public async deleteById(userId: string): Promise<IUser> {
        const user = await userRepository.deleteById(userId);

        if (!user) {
            throw new ApiError("User not found", 404);
        }

        return user;
    }
}

export const userService = new UserService();
