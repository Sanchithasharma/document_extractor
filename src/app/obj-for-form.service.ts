import { Injectable } from '@angular/core';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class ObjForFormService {
  
  myFormObj: any;
  myStr: any;

  // public formUserr = {
  //   name: "this.myFormObj.name",
  //   fatherName: " ",
  //   motherName: "this.myFormObj.name",
  //   dob: '21',
  //   gender: 'female',
  //   category: 'E',
  //   cgpa: '',
  //   email: 'pragnyakc06@gmail.com',
  //   phno: '7760522327',
  //   nationality: ' Indian',
  //   address: 'no 403A DS Max Samrat apt HMR layout Bangalore 560054 '
  // };



  


  constructor() { }
}
