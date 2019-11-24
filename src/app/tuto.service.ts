import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TutoService {
  private baseurl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  // Contact
  addContact(ac) {
    return this.http.post(this.baseurl + "/addcontact", ac);
  }
  getContact() {
    return this.http.get(this.baseurl + "/viewcontact");
  }
  deleteRecord(id) {
    return this.http.delete(this.baseurl + "/deleterecord/" + id);
  }
  loginUser(ld){
    return this.http.post(this.baseurl + "/signin" , ld);
  }

  // Signup
  addDetail(cc) {
    return this.http.post(this.baseurl + "/adddetail", cc);
  }
  getDetail() {
    return this.http.get(this.baseurl + "/viewdetail");
  }
  deleteDetail(id) {
    return this.http.delete(this.baseurl + "/deletedetail/" + id);
  }

  
  // Teacher
  addTeacher(sf) {
    return this.http.post(this.baseurl + "/addteacher", sf);
  }
  getTeacher() {
    return this.http.get(this.baseurl + "/viewteacher");
  }
  deleteTeacher(id) {
    return this.http.delete(this.baseurl + "/deleteteacher/" + id);
  }
  

  // Course
  addCourse(cd) {
    return this.http.post(this.baseurl + "/addcourse", cd);
  }
  readCourse() {
    return this.http.get(this.baseurl + "/viewcourse");
  }
  readCoursebyid(id) {
    return this.http.get(this.baseurl + "/viewcoursebyid/" + id);
  }
  deleteCourse(id) {
    return this.http.delete(this.baseurl + "/deletecourse/" + id);
  }
}
