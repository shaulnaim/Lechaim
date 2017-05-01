import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AuthenticationService } from './services/authentication.service';
import { PeopleService } from './services/people.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { dummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    LoginComponent,
    CandidatesComponent,
    AppComponent,
    CandidateDetailsComponent,
    SearchFilterPipe,
    dummyComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserModule,
    SharedModule
  ],
  exports: [],
  providers: [AuthenticationService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

