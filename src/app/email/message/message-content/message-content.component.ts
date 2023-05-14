import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss'],
  standalone : true,
  imports: [
    IonicModule, 
    CommonModule,
    ReactiveFormsModule
  ],
})
export class MessageContentComponent  implements OnInit {

  defaultDate = "1987-06-30";
  isSubmitted = false;
  ionicForm: FormGroup | undefined;

  @Input() from?: string;
  @Input() to?: string;
  @Input() subject?: string;
  @Input() text?: string;
  form?: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  getDate(e: any) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm?.get('dob')?.setValue(date, {
      onlyself: true
    })
  }
  get errorControl() {
    return this.ionicForm?.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm?.valid) {
      console.log('Please provide all the required values!')
      confirm('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      
      confirm(Object.values(this.ionicForm.value).toString());
    }
    return false;
  }

}
