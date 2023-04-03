import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  userName: any;
  formdata: any;

  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl("Tutorialspoint")
    });
  }

  onClickSubmit(data: any) { 
    this.userName = data.userName;
  }
}
