import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Quiz1Component } from './quiz1/quiz1.component';
import { HostComponent } from './host/host.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Quiz3Component } from './quiz3/quiz3.component';
import { Quiz5Component } from './quiz5/quiz5.component';
import { Quiz4Component } from './quiz4/quiz4.component';

@NgModule({
  declarations: [
    AppComponent,
    Quiz1Component,
    HostComponent,
    Quiz2Component,
    Quiz3Component,
    Quiz5Component,
    Quiz4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
