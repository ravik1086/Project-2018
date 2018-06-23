import { Component, OnInit, KeyValueDiffers } from '@angular/core';

import { StudentService } from '../../../service/student.service';

import { CourseCubeService } from '../../../service/course-cube.service';
import { Student } from '../student';
@Component({
  selector: 'cc-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  student = new Student();
  studentList;
  courseCubeList;
  errorMessage = [];
  submitted = false;
  differ;

  constructor(public studentService: StudentService,public courseCubeService: CourseCubeService,
    differs: KeyValueDiffers) {
      this.differ = differs.find({}).create();
     }


  ngOnInit() {

    this.studentService.getStudentList().subscribe((studentResponse) => {
      this.studentList = studentResponse ? studentResponse : [];
      if (studentResponse && studentResponse.length === 0) {
        this.getStudent();
      }
    });

    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse) => {
      this.courseCubeList = courseCubeResponse ? courseCubeResponse : [];
      if (courseCubeResponse.length === 0) {
        this.getCourseCube();
      }
    });
    
  }

  getCourseCube(){
    this.courseCubeService.getCourseCube().subscribe(
      //Success
      (courseCubeResponse) => {
        this.courseCubeList = courseCubeResponse ? courseCubeResponse :[];
      },
      // error
      (error) => {
        console.log(error);
      },
      // finally
      ()=>{
        console.log('finally');
      });
  }

  ngDoCheck(){
    let student = this.differ.diff(this.student);

    if(this.submitted){
      this.validate();
    }
  }

  getStudent() {
    this.studentService.getStudent().subscribe(
      //Success
      (studentResponse) => {
        this.studentList = studentResponse ? studentResponse : [];
        this.studentService.setStudentList(this.studentList);
      },
      // error
      (error) => {
        console.log(error);
      },
      // finally
      () => {
        console.log('finally');
      });
  }

  save() {
    this.submitted = true;
    let isValidated = this.validate();

    if(isValidated){
      this.studentService.saveStudent(this.student).subscribe(
        //Success
        (studentResponse) => {
          this.studentList.push(this.student);
          this.studentService.setStudentList(this.studentList);
          this.student = new Student();
        },
        // error
        (error) => {
          console.log(error);
        },
        // finally
        ()=>{
          console.log('finally');
        });
      
    }

  }

  validate(){
    this.errorMessage = [];

    if (this.student.id === undefined) {
      let largest = this.getLargeNumber(this.studentList);
      this.student.id = largest+1;
    }

    if (this.student.courseName === undefined) {
      this.errorMessage.push('Please select atleat one course');
    }

    if (this.student.name === undefined) {
      this.errorMessage.push('Please add name');
    }

    if (this.student.age === undefined) {
      this.errorMessage.push('Please add age');
    }

    if(this.errorMessage.length == 0){
      this.submitted = false;
      return true;
    }else{
      return false;
    }
    
  }

  getLargeNumber(array) {
    let largeNum = Math.max.apply(Math, array.map(function (o) {
      return o.id;
    }
    ));
    return largeNum;
  }

}
