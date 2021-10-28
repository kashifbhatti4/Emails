import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppEmail } from "../models/appemail";
import { IEmail } from "../models/email";
import { map, Observable, pipe } from "rxjs";

@Injectable()
export class EmailService{
  appEmails: Array<AppEmail>;
  url: '/mockdata/emails.json';
  constructor(private httpClient: HttpClient){

  }

  getAllEmails() : Observable<IEmail[]> {
    //all emails from server
    return this.httpClient
    .get<IEmail[]>(this.url)
  }
}