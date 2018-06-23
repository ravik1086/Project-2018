import { Component, OnInit } from '@angular/core';

import { CourseCube } from './courseCube';
import { CourseCubeService } from '../../service/course-cube.service';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'cc-course-cube',
  templateUrl: './course-cube.component.html',
  styleUrls: ['./course-cube.component.scss']
})
export class CourseCubeComponent implements OnInit {
  courseCubeList;
  studentList;
  heroInput:any = "";
  searchText = '';
  constructor(public courseCubeService:CourseCubeService, public studentService:StudentService) { }

  ngOnInit() {
    this.getStudentListFromObs();
  }

  getCourseListFromObs(){
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse) => {
      
      if (courseCubeResponse.length === 0) {
        this.getCourseCube();
      }else{
        this.processCourseCubeRes(courseCubeResponse);
      }

      
    });
  }

  processCourseCubeRes(courseCubeResponse){
    if(courseCubeResponse.length !== 0){
      let courseList = [];
      for(let course of courseCubeResponse){

        let filteredStudent = this.studentList.filter(
          student => student.courseName === course.courseName 
        );

        course.noOfStudents = filteredStudent;
        courseList.push(course);
      }
      
      this.courseCubeList = courseList;
    }
  }
  getStudentListFromObs(){
    this.studentService.getStudentList().subscribe((studentResponse) => {
      this.studentList = studentResponse ? studentResponse : [];
      if (studentResponse && studentResponse.length === 0) {
        this.getStudent();
      }

      this.getCourseListFromObs();
    });
  }

  getCourseCube(){
    this.courseCubeService.getCourseCube().subscribe(
      //Success
      (courseCubeResponse) => {
        this.processCourseCubeRes(courseCubeResponse);
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

  addCourse(){
    
    let courseCube = new CourseCube();
    courseCube.id = 10;

    this.courseCubeList.push(courseCube);
    
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse: Array<CourseCube>) => {
      console.log(courseCubeResponse);
    });
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

  
}
