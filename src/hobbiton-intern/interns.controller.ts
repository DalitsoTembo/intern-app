import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

import { InternService } from "./interns.service";
import { Intern } from "./interns.service";

@Controller('interns')
export class InternController {
    constructor (private readonly internService: InternService){}
    
    @Post()
    addIntern(@Body() newIntern: {name: string, email:string, age: number, salary: number}){
        this.internService.addIntern(newIntern)
        return newIntern
    }


    @Get()
    getAllInterns(): Intern[]{ 
        return [...this.internService.getInterns()]
    }

    @Get(':email')
    getIntern(@Param('email') email: string){
        return this.internService.getIntern(email)
    }


    @Patch(':email')
    updateIntern(@Param('email') emailId: string, @Body() intern:Intern){
        return this.internService.updateIntern(emailId, intern)
    }

    @Delete(':email')
    removeIntern(@Param('email') email: string){
        return this.internService.removeIntern(email)
    }
}