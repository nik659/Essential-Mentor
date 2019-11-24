import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TutoService } from '../tuto.service';
@Component({
  selector: 'app-dashcourse',
  templateUrl: './dashcourse.component.html',
  styles: []
})
export class DashcourseComponent implements OnInit {
  id: string;
  course: any = [];


  constructor( private q: TutoService, private toastr: ToastrService) {

   }

  ngOnInit() {
   }
   AddCourse(ad) {
    console.log(ad.value);
    this.q.addCourse(ad.value).subscribe(k => {
      this.toastr.success('course successfully add', 'Success');
    });
  }

}
