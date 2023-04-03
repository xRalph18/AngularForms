import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  ngOnInit() {
    
  }

  onClickSubmit(result: any) {
    console.log("You ahve entered: " + result.username);
  }
}
