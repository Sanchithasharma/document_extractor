import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MyFormComponent } from './my-form/my-form.component';


const routes: Routes = [
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'myForm', component: MyFormComponent },
  { path: '',   redirectTo: 'fileupload', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
