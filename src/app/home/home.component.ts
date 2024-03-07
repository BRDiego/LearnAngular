import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imgAlt_mainBackground = "some musical instruments"

  member: Member
  activeness: boolean = false;

  constructor() {
    this.member = new Member('Diego', new Date(2001, 4, 24), ['music','neuroscience','sports'], true)
  }

  onActivenessClick() {
    this.member.physicallyActive = !this.member.physicallyActive;
    this.activeness = !this.activeness;
  }
}

interface Person {
  name : string 
  birthDate: Date
  hobbies: string[]
  physicallyActive: boolean

  getAge(): number
}


class Member implements Person {
  name :string = '';
  birthDate :Date = new Date();
  hobbies :string[] = [];
  physicallyActive :boolean = false;

  getAge() {
    var today = new Date();

    let age = today.getFullYear() - this.birthDate.getFullYear();

    var birthDayThisYear = new Date(today.getFullYear(), this.birthDate.getMonth(), this.birthDate.getDay());

    if (today < birthDayThisYear) {
      age--;
    }

    return age;
  }

  constructor(
    name :string,
    birthDate :Date,
    hobbies :string[],
    physicallyActive: boolean) {
      this.name = name,
      this.birthDate  = birthDate,
      this.hobbies = hobbies,
      this.physicallyActive = physicallyActive
  }
}