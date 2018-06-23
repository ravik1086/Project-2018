import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { StudentComponent } from './student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentCardComponent } from './student-card/student-card.component';

const studentRoute :Routes=[
  {
    path:'add',component:StudentFormComponent
  },
  {
    path:'',component:StudentComponent
  },
  {
    path:'**', component:StudentComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(studentRoute),
    FormsModule,HttpClientModule
  ],
  declarations: [StudentComponent, StudentFormComponent, StudentCardComponent]
})
export class StudentModule { }
