import { Component, OnInit } from '@angular/core';
import { CourseCubeService } from '../service/course-cube.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseCubeList;
  studentList;
  constructor(public studentService:StudentService,public courseCubeService:CourseCubeService) { }

  ngOnInit() {
   
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse) => {
      this.courseCubeList = courseCubeResponse ? courseCubeResponse : [];
      if (courseCubeResponse.length === 0) {
        this.getCourseCube();
      }
    });

    this.studentService.getStudentList().subscribe((studentResponse) => {
      this.studentList = studentResponse ? studentResponse : [];
      if (studentResponse.length === 0) {
        this.getStudent();
      }
    });
  }

  getCourseCube(){
    this.courseCubeService.getCourseCube().subscribe(
      //Success
      (courseCubeResponse) => {
        this.courseCubeList = courseCubeResponse ? courseCubeResponse :[];
        this.courseCubeService.setCourseCubeList(this.courseCubeList);
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

  getStudent(){
    this.studentService.getStudent().subscribe(
      //Success
      (studentResponse) => {
        this.studentList = studentResponse ? studentResponse :[];
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
