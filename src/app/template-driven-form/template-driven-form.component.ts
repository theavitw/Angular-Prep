import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  hobbies: string[] = [];
  id: number = 0;
  passwordFieldType: string = 'password'; // Default to 'password'
  checked: boolean = false;

  user = new User();

  constructor() {
    this.user.gender = '';
  }

  ngOnInit(): void { }

  resetForm(data: NgForm) {
    data.resetForm();

    this.checked = false;
    this.hobbies = [];
    this.user = new User();
    this.user.gender = '';
    this.id = 0;
  }

  onSubmit(data: NgForm) {
    if (data.valid && this.checked) {
      this.id = this.id + 1;
      this.user = new User(
        this.id,
        data.value.name,
        data.value.email,
        data.value.password,
        data.value.gender,
        data.value.dob
      );
      this.user.hobbies = [...this.hobbies]; // Add hobbies to the user object
      console.log(this.user);

      this.resetForm(data); // Reset the form after submission
    }
  }

  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onHobbiesChange(event: any) {
    if (event.target.checked) {
      this.hobbies.push(event.target.value);
    } else {
      const index = this.hobbies.indexOf(event.target.value);
      if (index > -1) {
        this.hobbies.splice(index, 1);
      }
    }
  }
}
