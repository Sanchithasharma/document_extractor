import { Component, OnInit } from '@angular/core';
import { ObjForFormService } from '../obj-for-form.service';
import { Student } from '../student';



@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  categoryFlag: boolean = true;
  formObject;
  showMyData : boolean = true;
  addFlag: boolean = true;
  nationalityFlag: boolean = true;
  genderFlag: boolean  = true;
  motherNameFlag: boolean  = true;
  fatherNameFlag: boolean  = true;

  constructor(public prmyFormObj: ObjForFormService) {

   }




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
    this.formObject = this.prmyFormObj.myFormObj; // gettung the data from servce
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

    this.objectValueValidation(this.formUser);
  }

  onSubmit(form) {
    console.log('form values ', form);
    // this.getMyFormDetails();

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('session', (JSON.stringify(this.formObject)));
      
    } else {
      console.log("Sorry, your browser does not support Web Storage...");
    }
    console.log(localStorage.getItem("session"));

  }

  
  objectValueValidation(obj){
    
    if(this.formUser.address.trim() === ""){
      this.addFlag = false;
    }

    else if(this.formUser.category.trim() === ""){
      this.categoryFlag = false;
    }

    // else if(this.formUser.dob.trim() === ""){
    //   this.nameFlag = false;
    // }

    else if(this.formUser.fatherName.trim() === ""){
      this.fatherNameFlag = false;
    }

    else if(this.formUser.gender.trim() === ""){
      this.genderFlag = false;
    }

    else if(this.formUser.motherName.trim()=== ""){
      this.motherNameFlag = false;
    }

    else if(this.formUser.nationality.trim()=== ""){
      this.nationalityFlag = false;
    }
    
    
  }

}
