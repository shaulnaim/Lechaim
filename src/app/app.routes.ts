import { LoginComponent } from './login/login.component';
import { CandidatesComponent } from './candidates/candidates.component';
import {RepresentorsSignupComponent} from './representors-signup/representors-signup.component';
import { CandidateDetailComponent } from './candidateDetail/candidateDetail.component';
import { Routes } from '@angular/router';

export const ROUTES : Routes = [
    { path:'representorsSignup',component: RepresentorsSignupComponent},
    { path: 'Candidates', component: CandidatesComponent },
    { path: 'Candidates/:id', component: CandidateDetailComponent },
    { path: 'Login', component: LoginComponent },
    { path: '', redirectTo: '/Login', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
    
];
