import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule , FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe, CommonModule ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
studentForm: FormGroup = new FormGroup({
firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
userName: new FormControl('',),
city: new FormControl(''),
state: new FormControl(''),
zipCode: new FormControl(''),
isAcceptTerms: new FormControl(false),
})

formValue:any;

onSave(){
  this.formValue = this.studentForm.value;
}
}
