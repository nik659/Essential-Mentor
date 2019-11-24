import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashedit',
  templateUrl: './dashedit.component.html',
  styles: []
})
export class DasheditComponent implements OnInit {
  courses: any = [];
  id:string;
  constructor(private q: TutoService, private route: Router) { }

  ngOnInit() {
    this.q.readCourse().subscribe(k => {
      this.courses = k['data'];
    })
  }
  todelete(_id){
    this.id=_id;
  }
  delete(){
    this.q.deleteCourse(this.id).subscribe(k=>{
      this.ngOnInit();
    });
  }
}
