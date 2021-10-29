import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppEmail } from "../models/appemail";
import { IEmail } from "../models/email";
import { BehaviorSubject, map, Observable, pipe, Subject } from "rxjs";

@Injectable()
export class EmailService{
  appEmails: Array<AppEmail>;
  url: '/mockdata/emails.json';
  $emails = new Subject<IEmail[]>(); 
  emails: IEmail[];
  constructor(private httpClient: HttpClient){
    this.emails = [
      {
        id: 1,
        folder: 0,
        body: "email 1",
        responseAction: 0,
        offSet: 0
      },
      {
        id: 2,
        folder: 0,
        body: "email 2",
        responseAction: 0,
        offSet: 1
      },
      {
        id: 3,
        folder: 0,
        body: "email 3",
        responseAction: 0,
        offSet: 2
      },
      {
        id: 4,
        folder: 0,
        body: "email 4",
        responseAction: 0,
        offSet: 3
      },
      {
        id: 5,
        folder: 0,
        body: "email 5",
        responseAction: 0,
        offSet: 4
      }
    ];

    this.$emails.next(this.emails);
  }

  getAllEmails() : Observable<IEmail[]> {
    //all emails from server
    return this.$emails as Observable<IEmail[]>;

  }
}