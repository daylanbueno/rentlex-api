import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;
    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    driverLicense: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    createAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
