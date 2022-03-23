import { Body, Injectable, NotFoundException } from "@nestjs/common";


export interface Intern {
    name: string,
    email: string,
    age: number,
    salary: number,
}

@Injectable()
export class InternService{

    interns: Intern[] = [];

    addIntern(intern: Intern): Intern {
        this.interns.push(intern)
        return intern;
    }


    getInterns(): Intern[]{
        return this.interns;
    }


    getIntern(email: string){
        const index = this.findIntern(email)
        return this.interns[index]
    }


    updateIntern(internEmail: string, intern: Intern){
        const index = this.findIntern(internEmail);
        if(index >= 0){
            const updatedIntern = {...this.interns[index], ...intern}
            this.interns[index] = updatedIntern
        }
    }


    removeIntern(email: string){
        const index = this.findIntern(email)
        this.interns.splice(index, 1)
    }

    private findIntern(email: string ): number{
        const index = this.interns.findIndex(intern => intern.email === email)
        return index
    }



}