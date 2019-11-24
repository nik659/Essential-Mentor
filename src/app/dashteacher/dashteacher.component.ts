import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';

@Component({
  selector: 'app-dashteacher',
  templateUrl: './dashteacher.component.html',
  styles: []
})
export class DashteacherComponent implements OnInit {
  dtdata: any = [];
  idd: string;
  constructor(private q: TutoService) { }

  ngOnInit() {
    this.q.getTeacher().subscribe(k => {
      this.dtdata = k['data']
    });
  }
  todelete(_id) {
    this.idd = _id;
  }
  delete() {
    this.q.deleteTeacher(this.idd).subscribe(k => {
      this.ngOnInit();
    });
  }
}
