import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashsignup',
  templateUrl: './dashsignup.component.html',
  styles: []
})
export class DashsignupComponent implements OnInit {
  dsdata: any = [];
  idd: string;
  constructor(private q: TutoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.q.getDetail().subscribe(k => {
      this.dsdata = k['data']
    });
  }
  todelete(_id) {
    this.idd = _id;
  }
  delete() {
    this.q.deleteDetail(this.idd).subscribe(k => {
      this.ngOnInit();
      this.toastr.success('Delete', 'Delete Successfully');

    });
  }
}
