import { Injectable, OnModuleInit } from "@nestjs/common";


// here we have tried to init to init our module in the servics -  this will work perfect
@Injectable()
export class JobsService implements OnModuleInit {
  onModuleInit() {
    console.log("JobsService onModuleInit");
  }
}
