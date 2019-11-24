import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styles: []
})
export class AdminloginComponent implements OnInit {
  msg: string;
  constructor(private q: TutoService, private toast: ToastrService, private route: Router) { }

  ngOnInit() {
  }
  Login(ld) {
    if (ld.value.Name == "admin" && ld.value.Password == "admin") {
      this.route.navigate(['/dashboard']);
    }
    else{
      this.toast.error("Login Failed", "Failed")
    }
  }
}