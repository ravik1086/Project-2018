import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseCubeService {
  
  constructor(public http:HttpClient) { }

  getCourseCubeList(){
    return this.http.get('assets/resource/courseCube.json');
  }
}
