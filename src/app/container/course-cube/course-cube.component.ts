import { Component, OnInit } from '@angular/core';

import { CourseCube } from './courseCube';
import { CourseCubeService } from '../../service/course-cube.service';

@Component({
  selector: 'cc-course-cube',
  templateUrl: './course-cube.component.html',
  styleUrls: ['./course-cube.component.scss']
})
export class CourseCubeComponent implements OnInit {
  courseCubeList;
  heroInput:any = "";
  searchText = '';
  constructor(public courseCubeService:CourseCubeService) { }

  ngOnInit() {
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

  addCourse(){
    
    let courseCube = new CourseCube();
    courseCube.id = 10;

    this.courseCubeList.push(courseCube);
    
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse: Array<CourseCube>) => {
      console.log(courseCubeResponse);
    });
  }

  
}
