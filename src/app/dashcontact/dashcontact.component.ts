import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
@Component({
  selector: 'app-dashcontact',
  templateUrl: './dashcontact.component.html',
  styles: []
})
export class DashcontactComponent implements OnInit {
  dcdata: any = [];
  idd: string;
  constructor(private q: TutoService) { }

  ngOnInit() {
    this.q.getContact().subscribe(k => {
      this.dcdata = k['data']
    });
  }
  todelete(_id) {
    this.idd = _id;
  }
  delete() {
    this.q.deleteRecord(this.idd).subscribe(k => {
      this.ngOnInit();
    });
  }

}
