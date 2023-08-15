import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

onFormSubmit(Formdata:any){
  console.log("form submitted successfully")
}  
}
