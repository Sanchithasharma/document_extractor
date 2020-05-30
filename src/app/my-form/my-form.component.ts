import { Component, OnInit } from '@angular/core';
import { ObjForFormService } from '../obj-for-form.service';
import { Student } from '../student';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor(public prmyFormObj: ObjForFormService) {

   }

  formObject;
  showMyData : boolean = true;



  public formUser = {
    name: "",
    fatherName: '',
    motherName: '',
    dob: '',
    gender: '',
    category: '',
    cgpa: '',
    email: '',
    phno: '',
    nationality: ' ',
    address: ' '
  };



  ngOnInit(): void {

  }

  getMyFormDetails(){
    this.showMyData = false;
    debugger;
    this.formObject = this.prmyFormObj.myFormObj;
    console.log(this.prmyFormObj.myFormObj);
    this.formUser.name = this.formObject.name;
    this.formUser.fatherName = this.formObject.fatherName;
    this.formUser.motherName = this.formObject.motherName;
    this.formUser.dob = this.formObject.dob;
    this.formUser.gender = this.formObject.gender;
    this.formUser.category = this.formObject.category;
    this.formUser.cgpa = this.formObject.cgpa;
    this.formUser.email = this.formObject.email;
    this.formUser.phno = this.formObject.phno;
    this.formUser.nationality = this.formObject.nationality;
    this.formUser.address = this.formObject.address;
  }

  onSubmit(form) {
    console.log('form values ', form);
    this.getMyFormDetails();


  }

}
