import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ObjForFormService } from '../obj-for-form.service'
import { Student } from '../student';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
  public beObj;
  title = 'fileUpload';
  images;
  public a: any;
  

  constructor(private http: HttpClient, public fileObj: ObjForFormService){}


  ngOnInit(): void {
    
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => {
        // console.log(res);
        this.beObj = res;
        this.processResult(res)
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

  processResult(myRes){
    debugger;
    this.a = myRes;
    console.log(this.a);
    this.fileObj.myFormObj = this.a;
    this.fileObj.myStr = "Hey";
  }
}
