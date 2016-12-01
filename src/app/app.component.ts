
import { Injectable } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Component } from '@angular/core';
import { LoginComponent } from './loginComponent/login.component';
import { CandidatesComponent } from './candidatesComponent/candidates.component';
import { CandidateDetailComponent } from './candidateDetailComponent/candidateDetailComponent.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Candidates', component: CandidatesComponent },
    { path: 'Candidates/:id', component: CandidateDetailComponent },
    { path: 'Login', component: LoginComponent },
    { path: '', redirectTo: '/Login', pathMatch: 'full' }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
}

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);