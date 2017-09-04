import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent },
    { path: 'about/:username', component: AboutUserComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
