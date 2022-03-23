import { InternService } from "./interns.service";
import { Intern } from "./interns.service";
export declare class InternController {
    private readonly internService;
    constructor(internService: InternService);
    addIntern(newIntern: {
        name: string;
        email: string;
        age: number;
        salary: number;
    }): {
        name: string;
        email: string;
        age: number;
        salary: number;
    };
    getAllInterns(): Intern[];
    getIntern(email: string): Intern;
    updateIntern(emailId: string, intern: Intern): void;
    removeIntern(email: string): void;
}
