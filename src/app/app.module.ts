import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CandidatesComponent } from './candidatesComponent/candidates.component';
import { LoginComponent } from './loginComponent/login.component';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.component';
import { AppComponent } from './app.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { CandidateDetailComponent } from './candidateDetailComponent/candidateDetailComponent.component';
import { RepresentorsSignupComponent } from './representors-signup/representors-signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    CandidatesComponent,
    AppComponent,
    CandidateDetailComponent,
    RepresentorsSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule,
    Ng2AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
