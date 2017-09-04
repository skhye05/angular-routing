import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from './shared/services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AboutUserComponent,
    ContactComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
