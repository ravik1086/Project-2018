import { Component, OnInit } from '@angular/core';
import { CourseCubeService } from '../service/course-cube.service';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseCubeList = [];
  constructor(public courseCubeService:CourseCubeService) { }

  ngOnInit() {
    this.getCourseCube();
    
  }

  getCourseCube(){
    this.courseCubeService.getCourseCube().subscribe(
      //Success
      (courseCubeResponse) => {
        this.courseCubeList = courseCubeResponse ? courseCubeResponse["courseCube"] :[];
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

}
