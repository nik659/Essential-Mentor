import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: []
})
export class CoursesComponent implements OnInit {
  courses: any = [];
  constructor(private q: TutoService, private route: Router) { }

  ngOnInit() {
    this.q.readCourse().subscribe(k => {
      this.courses = k['data'];
    })
  }
  courseDetails(_id) {
    this.route.navigate(['/coursedetails', _id])
  }
}
