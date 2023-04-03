import { Component } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  title = 'Template driven forms';

  countryList: country[] = [
    new country(1, "India"),
    new country(2, "USA"),
    new country(3, "England"),
  ];

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}

export class country {
  id: number;
  name: string;

  constructor(id: number, name: string) { 
    this.id = id;
    this.name = name;
  }
}
