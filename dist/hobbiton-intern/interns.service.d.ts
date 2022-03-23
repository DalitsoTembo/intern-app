export interface Intern {
    name: string;
    email: string;
    age: number;
    salary: number;
}
export declare class InternService {
    interns: Intern[];
    addIntern(intern: Intern): Intern;
    getInterns(): Intern[];
    getIntern(email: string): Intern;
    updateIntern(internEmail: string, intern: Intern): void;
    removeIntern(email: string): void;
    private findIntern;
}
