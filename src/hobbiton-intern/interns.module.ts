import { Module } from "@nestjs/common";

import { InternController } from "./interns.controller";
import { InternService } from "./interns.service";

@Module({
    imports: [],
    controllers: [InternController],
    providers: [InternService],
})
export class internModule {}