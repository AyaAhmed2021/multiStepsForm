import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {
  route = 'plan';
  form: FormGroup;
  control: FormControl

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      name : new FormControl('', {
          validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+[ ]+[a-zA-Z]*$'),
          Validators.minLength(11),
          Validators.maxLength(40),
        ],
      }),

      phone: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$'),
        ],
    }),

    email :new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ],
    })
    });

  }
}
