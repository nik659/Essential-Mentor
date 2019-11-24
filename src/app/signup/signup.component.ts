import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  msg: string;
  constructor(private q: TutoService, private toast: ToastrService, private route: Router) { }

  ngOnInit() {
  }
  Send(cc) {
    this.q.addDetail(cc.value).subscribe(k => {
      this.toast.success("Registration Successfull", "Success");
    });
  }
    Login(ld) {
      console.log(ld.value);
      this.q.loginUser(ld.value).subscribe(k => {
        this.msg = k['data']
        if (this.msg == "") {
          this.toast.error("Login Failed", "Failed")
        }
        else {
          this.route.navigate(['/home']);
        }
      });
    }
  }
