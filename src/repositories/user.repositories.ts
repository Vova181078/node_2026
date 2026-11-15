import { IUser } from "../interfaces/user.interface.js";
import { fsService } from "../services/fs.service.js";

export const userRepository = {
    async getAll(): Promise<IUser[]> {
        return (await fsService.readFile()) as IUser[];
    },

    async save(users: IUser[]): Promise<void> {
        await fsService.writeFile(users);
    },
};
