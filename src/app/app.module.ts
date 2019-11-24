import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';

import { SignupComponent } from './signup/signup.component';
import { TutoService } from './tuto.service';


import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashcontactComponent } from './dashcontact/dashcontact.component';
import { DashsignupComponent } from './dashsignup/dashsignup.component';
import { DashcourseComponent } from './dashcourse/dashcourse.component';


import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { SafePipe } from './safe.pipe';
import { CoursedetalisComponent } from './coursedetalis/coursedetalis.component';
import { DasheditComponent } from './dashedit/dashedit.component';
import { DashteacherComponent } from './dashteacher/dashteacher.component';
import { DashheaderComponent } from './dashheader/dashheader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

    CoursesComponent,
    ContactComponent,

    SignupComponent,

    DashboardComponent,

    DashcontactComponent,

    DashsignupComponent,

    AdminloginComponent,

    DashcourseComponent,



    SafePipe,

    CoursedetalisComponent,

    DasheditComponent,

    DashteacherComponent,

    DashheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        // timeOut: 500,
        positionClass: 'toast-top-right',
      }
    ),



  ],
  providers: [TutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
