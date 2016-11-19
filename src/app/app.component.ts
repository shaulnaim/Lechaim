
import { Injectable } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Component } from '@angular/core';
import { LoginComponent } from './loginComponent/login.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: '', component: LoginComponent }
];

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',

})
export class AppComponent {
}

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);