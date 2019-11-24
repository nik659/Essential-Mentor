import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';

import { SignupComponent } from './signup/signup.component';
import {  DashheaderComponent} from './dashheader/dashheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashcontactComponent } from './dashcontact/dashcontact.component';
import { DashsignupComponent } from './dashsignup/dashsignup.component';
import { DashcourseComponent } from './dashcourse/dashcourse.component';
import { DasheditComponent } from './dashedit/dashedit.component';
import { DashteacherComponent } from './dashteacher/dashteacher.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { CoursedetalisComponent } from './coursedetalis/coursedetalis.component';
const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashcontact', component: DashcontactComponent },
  { path: 'dashsignup', component: DashsignupComponent },
  { path: 'dashcourse', component: DashcourseComponent },
  { path: 'dashedit', component: DasheditComponent },
  { path: 'dashteacher', component: DashteacherComponent },
  { path: 'coursedetails/:id', component: CoursedetalisComponent },
  { path: 'dashheader', component: DashheaderComponent },  
  { path: 'admin', component: AdminloginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
