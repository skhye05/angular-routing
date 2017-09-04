import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRouting } from './about.routing';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { UserService } from '../shared/services/user.service';
import { AboutSectionComponent } from './about-section/about-section.component';


@NgModule({
  imports: [
    CommonModule,
    AboutRouting
  ],
  declarations: [
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent
  ],
  providers: [
    UserService
  ]
})
export class AboutModule { }
