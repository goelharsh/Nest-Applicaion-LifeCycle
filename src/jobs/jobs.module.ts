import { Module, OnModuleInit } from "@nestjs/common";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";

@Module({
  controllers: [JobsController],
  providers: [JobsService],
})

// here we are have init our module, we can also init any module in any service or controller or any service
 
export class JobsModule implements OnModuleInit {
  onModuleInit() {
    console.log("Jobs module init");
  }
}
