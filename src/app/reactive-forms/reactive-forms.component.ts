import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean = false; // Track submission status
  terms: boolean = false;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      gender: new FormControl('', Validators.required),
      hoobies: new FormArray([], Validators.required),
      // terms: new FormControl(false, Validators.requiredTrue) if you want to use a custom validator
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.submitted = true;

    if (!this.terms) {
      return
    }

    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
      
      this.userForm.reset();
      this.submitted = false;
      this.terms = false;
    }
  }

  getUserFormControls() {
    return this.userForm.controls;
  }

  onCheckboxChange(e: any) {
    const hobbies: FormArray = this.userForm.get('hoobies') as FormArray;

    if (e.target.checked) {
      hobbies.push(new FormControl(e.target.value));
    } else {
      const index = hobbies.controls.findIndex(x => x.value === e.target.value);
      hobbies.removeAt(index);


    }

  }

  onTermsChange(e: any) {
    this.terms = e.target.checked;
  }
}
