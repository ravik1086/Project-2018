import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../../service/student.service';
import { CourseCubeService } from '../../../service/course-cube.service';

@Component({
  selector: 'cc-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @Input('student') student:any;
  courseCubeList;
  isEditable = false;

  constructor(public courseCubeService: CourseCubeService, 
    public studentService:StudentService) { }

  ngOnInit() {
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse) => {
      this.courseCubeList = courseCubeResponse ? courseCubeResponse : [];
      if (courseCubeResponse.length === 0) {
        this.getCourseCube();
      }
    });
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.student).subscribe((studentResponse) => {
      this.updateStudentObs();
    });
  }

  updateStudentObs(){

    this.studentService.getStudentList().subscribe((studentResponse) => {
      let studentList = studentResponse;

      let filteredStudent = studentList.filter(
          studentObs => studentObs.id !== this.student.id
        );
      this.studentService.setStudentList(filteredStudent);

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

  edit(){
    this.isEditable = true;
  }

  save(){
    this.isEditable = false;

    this.studentService.updateStudent(this.student).subscribe(
      //Success
      (studentResponse) => {
        console.log(studentResponse);
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
