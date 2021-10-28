import { Component, VERSION } from '@angular/core';
import { EmailCacheService } from './services/email.cache.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string

  constructor( private emailCacheService: EmailCacheService){
    this.name = 'Angular ' + VERSION.major;
  }
}
