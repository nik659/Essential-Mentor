import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutoService } from '../tuto.service';

@Component({
  selector: 'app-coursedetalis',
  templateUrl: './coursedetalis.component.html',
  styles: []
})
export class CoursedetalisComponent implements OnInit {
  id: string;
  course: any = [];
  constructor(private route: ActivatedRoute, private q: TutoService) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  ngOnInit() {
    this.q.readCoursebyid(this.id).subscribe(k => {
      this.course = k['data'];
      console.log(this.course)
    })
  }

}
