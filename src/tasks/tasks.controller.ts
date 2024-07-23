import { Controller, Get, Req } from "@nestjs/common";



@Controller('tasks')
export class TasksController {
    @Get("/")
    findAll(@Req() request: Request): string { 
        return "test"
    }
}