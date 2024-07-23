import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


const configModule = ConfigModule.forRoot({isGlobal: true})

const rootTypeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',

})
@Module({
  imports: [configModule],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
