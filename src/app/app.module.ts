import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmailService } from './services/email.service';
import { EmailCacheService } from './services/email.cache.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [ EmailService, EmailCacheService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
