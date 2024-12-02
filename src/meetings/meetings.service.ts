import { Injectable, OnModuleInit } from "@nestjs/common";
import { BehaviorSubject } from "rxjs";


// meetings service me hum ek scenarion create krre hai 
// ki jab bhi hmara module initialize hoga, to video server se connection establish krlo, or jab ye module destroy hoga to hum connection destroy krdenge   - this is just an example for better understanding
class VideoServer {
  private readonly pool = new BehaviorSubject<any>(null);

  establishConnection() {
    return this.pool.asObservable();
  }

  closeConnection() {
    this.pool.unsubscribe();
  }
}

@Injectable()
export class MeetingsService implements OnModuleInit {
  videoServer: VideoServer;

  constructor() {
    this.videoServer = new VideoServer();
  }

  onModuleInit() {
    this.videoServer.establishConnection();
    console.log("on module(Meetings) init video server conn established");
  }

  // to make this run, we can setup a setTimeup function inside our mail.ts file and then we can call app.close() mehtod to terminate our application, then only we can see this method running 
  onModuleDestroy() {
    console.log("on module(Meetings) destroy video server conn closed");
    this.videoServer.closeConnection();
  }
}
