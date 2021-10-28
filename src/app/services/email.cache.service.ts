import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AppEmail } from "../models/appemail";
import { IEmail } from "../models/email";
import { EmailService } from "./email.service";

@Injectable()
export class EmailCacheService{
  appEmails = new Subject<Array<AppEmail>>();
  $emails = new Subject<IEmail>();
  constructor(private emailService: EmailService){
    
  }
  
  getEmails() : void {
    let data = this.emailService.getAllEmails();
    console.log(data);
  }
}