import fs from "node:fs/promises";
import path from "node:path";

const dbPath = path.resolve("src/database/db.json");

export const fsService = {
    async readFile() {
        const data = await fs.readFile(dbPath, "utf-8");
        return JSON.parse(data);
    },

    async writeFile(data: unknown) {
        await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    },
};
