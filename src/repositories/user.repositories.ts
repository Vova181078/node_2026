import { IUser } from "../interfaces/user.interface.js";

export const users: IUser[] = [
    { id: 1, name: "vasya", age: 31, status: false },
    { id: 2, name: "petya", age: 30, status: true },
    { id: 3, name: "kolya", age: 29, status: true },
    { id: 4, name: "olya", age: 28, status: false },
    { id: 5, name: "max", age: 30, status: true },
    { id: 6, name: "anya", age: 31, status: false },
    { id: 7, name: "oleg", age: 28, status: false },
    { id: 8, name: "andrey", age: 29, status: true },
    { id: 9, name: "masha", age: 30, status: true },
    { id: 10, name: "olya", age: 31, status: false },
    { id: 11, name: "max", age: 31, status: true },
];

export const userRouter = {
    async getAll() {
        return users;
    },

    async getById(id: number) {
        const user = users.find((user) => user.id === id);
        if (!user) {
            throw new Error("User Not Found"); // Викидаємо помилку, яку Express зловить у catch
        }
        return user;
    },

    async create(data: IUser) {
        // Валідація імені та віку
        if (!data.name || data.name.length < 3) {
            throw new Error("Name must be at least 3 symbols long");
        }
        if (data.age === undefined || data.age < 0) {
            throw new Error("Age must be a positive number");
        }

        const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        const newUser: IUser = {
            id,
            name: data.name,
            age: data.age,
            status: data.status ?? false,
        };

        users.push(newUser);
        return newUser;
    },

    async update(id: number, data: Partial<IUser>) {
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            throw new Error("User Not Found");
        }

        if (data.name !== undefined && data.name.length < 3) {
            throw new Error("Name must be at least 3 symbols long");
        }
        if (data.age !== undefined && data.age < 0) {
            throw new Error("Age must be a positive number");
        }

        users[userIndex] = { ...users[userIndex], ...data };
        return users[userIndex];
    },

    async delete(id: number) {
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            throw new Error("User Not Found");
        }

        users.splice(userIndex, 1);
        return true;
    },
};
