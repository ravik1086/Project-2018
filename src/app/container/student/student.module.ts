import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student.component';

const studentRoute :Routes=[
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
    RouterModule.forChild(studentRoute),
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
