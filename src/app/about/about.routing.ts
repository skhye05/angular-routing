import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSectionComponent } from './about-section/about-section.component';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';

const routes: Routes = [
  {
    path: '',
    component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: ':username',
        component: AboutUserComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRouting { }
