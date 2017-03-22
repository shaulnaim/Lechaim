import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { LoginComponent } from './login/login.component';
//import { MaterializeModule } from 'angular2-materialize';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { CandidateDetailComponent } from './candidateDetail/candidateDetail.component';
import { RepresentorsSignupComponent } from './representors-signup/representors-signup.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './services/authentication.service';
import { PeopleService } from './services/people.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    CandidatesComponent,
    AppComponent,
    CandidateDetailComponent,
    RepresentorsSignupComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
   // MaterializeModule,
    Ng2AutoCompleteModule,
    Angular2FontawesomeModule
  ],
  providers: [AuthenticationService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

