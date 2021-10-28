import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AppEmail } from "../models/appemail";

@Injectable()
export class EmailService{
  appEmails: Subject<Array<AppEmail>>;

}