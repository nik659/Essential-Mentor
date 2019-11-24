import { Component, OnInit } from '@angular/core';
import { TutoService } from '../tuto.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(private q: TutoService, private toast: ToastrService) { }

  ngOnInit() {
  }
  Send(ac) {
    this.q.addContact(ac.value).subscribe(k => {
      this.toast.success("Thanks For Contact", "Success", {
        closeButton: true
      });
    });
   
   
  }
}
