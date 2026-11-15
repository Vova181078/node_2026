import { IUser } from "../interfaces/user.interface.js";
import { userRepository } from "../repositories/user.repositories.js";

export const userService = {
    async getAll(): Promise<IUser[]> {
        return await userRepository.getAll();
    },

    async getById(id: number): Promise<IUser> {
        const users = await userRepository.getAll();
        const user = users.find((user) => user.id === id);

        if (!user) {
            throw new Error("User Not Found");
        }

        return user;
    },

    async create(data: IUser): Promise<IUser> {
        if (typeof data.name !== "string" || data.name.length < 3) {
            throw new Error("Name must be at least 3 symbols long");
        }

        if (
            typeof data.age !== "number" ||
            !Number.isFinite(data.age) ||
            data.age < 0
        ) {
            throw new Error("Age must be a positive number");
        }

        const users = await userRepository.getAll();

        const id =
            users.length > 0
                ? Math.max(...users.map((user) => user.id)) + 1
                : 1;

        const newUser: IUser = {
            id,
            name: data.name,
            age: data.age,
            status: data.status ?? false,
        };

        users.push(newUser);
        await userRepository.save(users);

        return newUser;
    },

    async update(id: number, data: Partial<IUser>): Promise<IUser> {
        const users = await userRepository.getAll();
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            throw new Error("User Not Found");
        }

        if (
            data.name !== undefined &&
            (typeof data.name !== "string" || data.name.length < 3)
        ) {
            throw new Error("Name must be at least 3 symbols long");
        }

        if (
            data.age !== undefined &&
            (typeof data.age !== "number" ||
                !Number.isFinite(data.age) ||
                data.age < 0)
        ) {
            throw new Error("Age must be a positive number");
        }

        if (data.status !== undefined && typeof data.status !== "boolean") {
            throw new Error("Status must be boolean");
        }

        users[userIndex] = { ...users[userIndex], ...data };

        await userRepository.save(users);

        return users[userIndex];
    },

    async delete(id: number): Promise<boolean> {
        const users = await userRepository.getAll();
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            throw new Error("User Not Found");
        }

        users.splice(userIndex, 1);
        await userRepository.save(users);

        return true;
    },
};
