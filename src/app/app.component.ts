import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmail } from './models/email';
import { EmailCacheService } from './services/email.cache.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name: string
  $emails = this.emailCacheService.$emails as Observable<IEmail[]>;
  constructor( private emailCacheService: EmailCacheService){
    this.name = 'Angular ' + VERSION.major;
    
  }

  ngOnInit() {
    this.emailCacheService.getEmails();
    this.emailCacheService.$emails.subscribe( data => 
      console.log(data)
    )

    console.log(this.$emails);
  }
}
