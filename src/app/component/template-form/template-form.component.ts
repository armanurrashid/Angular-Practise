
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
studentObj: any = {
  firstName: "",
  lastName: "",
  userName: "",
  city: "",
  state: "",
  zipCode: "",

}
formValue: any;
onSubmit(form: any){
 if (form.valid) {
    this.formValue = this.studentObj;
  } else {
    this.formValue = null; 
  }
}
}
