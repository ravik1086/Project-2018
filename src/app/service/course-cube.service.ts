import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseCubeService {
  //create an object of Subject
  private courseCubeList: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(public http: HttpClient) { }

  setCourseCubeList(courseCubeList) {
    this.courseCubeList.next(courseCubeList);
  }

  getCourseCubeList() {
    return this.courseCubeList.asObservable();
  }

  getCourseCube() {
    return this.http.get(environment.API+'coursecube');
  }

  saveCourseCube(courseCube) {
    return this.http.post(environment.API+'coursecube',courseCube);
  }
}
