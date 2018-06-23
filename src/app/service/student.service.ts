import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
//create an object of Subject
private studentList: BehaviorSubject<any> = new BehaviorSubject<any>([]);
constructor(public http: HttpClient) { }

getStudentList() {
  return this.studentList.asObservable();
}

setStudentList(studentList) {
  this.studentList.next(studentList);
}

getStudent() {
  return this.http.get(environment.API+'student');
}

saveStudent(student) {
  return this.http.post(environment.API+'student',student);
}
}
