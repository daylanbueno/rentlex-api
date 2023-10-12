import { v4 as uuidv4 } from "uuid";

interface ISpecificationDto {
    name: string;
    description: string;
}

class Specification {
    id: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification, ISpecificationDto };
