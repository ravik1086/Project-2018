import { Component, OnInit, SimpleChanges } from '@angular/core';

import { CourseCubeService } from '../../../service/course-cube.service';
import { CourseCube } from '../courseCube';

@Component({
  selector: 'cc-course-cube-form',
  templateUrl: './course-cube-form.component.html',
  styleUrls: ['./course-cube-form.component.scss']
})
export class CourseCubeFormComponent implements OnInit {
  courseCube = new CourseCube();
  courseCubeList = [];
  errorMessage = [];
  submitted = false;
  constructor(public courseCubeService: CourseCubeService) { }


  ngOnInit() {
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse) => {
      this.courseCubeList = courseCubeResponse ? courseCubeResponse : [];
      if (courseCubeResponse.length === 0) {
        this.getCourseCube();
      }

    });

    
  }

  ngOnChange(changes: SimpleChanges){
    console.log(changes);
    if(this.submitted){
      this.validate();
    }
  }

  getCourseCube() {
    this.courseCubeService.getCourseCube().subscribe(
      //Success
      (courseCubeResponse) => {
        this.courseCubeList = courseCubeResponse ? courseCubeResponse["courseCube"] : [];
        this.courseCubeService.setCourseCubeList(this.courseCubeList);
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
      this.courseCubeList.push(this.courseCube);
      this.courseCubeService.setCourseCubeList(this.courseCubeList);
      this.courseCube = new CourseCube();
    }

  }

  validate(){
    this.errorMessage = [];

    if (this.courseCube.id === undefined) {
      let largest = this.getLargeNumber(this.courseCubeList);
      this.courseCube.id = largest+1;
    }

    if (this.courseCube.courseName === undefined) {
      this.errorMessage.push('Please add Course Name');
    }

    if (this.courseCube.duration === undefined) {
      this.errorMessage.push('Please add duration');
    }

    if (this.courseCube.fee === undefined) {
      this.errorMessage.push('Please add fee');
    }

    if(this.errorMessage.length == 0){
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
