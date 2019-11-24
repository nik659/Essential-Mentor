import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private q: TutoService, private toast: ToastrService) { }

  ngOnInit() {
  }
  Send(sf) {
    this.q.addTeacher(sf.value).subscribe(k => {
      this.toast.success("Thanks For Registering", "Success", {
        closeButton: true
      });
    });
  }
}