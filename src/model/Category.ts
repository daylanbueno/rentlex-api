import { v4 as uuidV4 } from "uuid";

interface ICreateCategoryDto {
    name: string;
    description: string;
}

class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category, ICreateCategoryDto };
