import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'cc-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentList;
  searchText = '';
  constructor(public studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getStudentList().subscribe((studentResponse) => {
      this.studentList = studentResponse ? studentResponse : [];
      if (studentResponse.length === 0) {
        this.getStudent();
      }
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
