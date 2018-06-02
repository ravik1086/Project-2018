import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cc-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss']
})
export class UtilsComponent implements OnInit {
  subjectList = [];
  replaySubjectList = [];
  behaviorSubjectList = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Using subject 
   */
  subject(){
    //create an object of Subject
    const mySubject:Subject<any> = new Subject<any>();

    // my 1 object
    mySubject.next(1);

    // my First subscription
    const subObj_1 = mySubject.subscribe(x =>{
      this.subjectList.push('my 1 sub method ::'+x);
    });

    mySubject.next(2);  // my 2 object
    mySubject.next(3);  // my 3 object
    mySubject.next(4);  // my 4 object

    // my Second subscription
    const subObj_2 = mySubject.subscribe(x =>{
      this.subjectList.push('my 2 sub method ::'+x);
    });

    // killing the first subscriber
    subObj_1.unsubscribe();

    mySubject.next(5);  // my 5 object
    mySubject.next(6);  // my 6 object
  }

  /**
   * Using Behavior Subject
   */
  behaviorSubject(){
    //create an object of Subject
    const behaviorSubject:BehaviorSubject<any> = new BehaviorSubject<any>(false);

    // my 1 object
    behaviorSubject.next(1);

    // my First subscription
    const subObj_1 = behaviorSubject.subscribe(x =>{
      this.behaviorSubjectList.push('my 1 sub method ::'+x);
    });

    behaviorSubject.next(2);  // my 2 object
    behaviorSubject.next(3);  // my 3 object
    behaviorSubject.next(4);  // my 4 object

    // my Second subscription
    const subObj_2 = behaviorSubject.subscribe(x =>{
      this.behaviorSubjectList.push('my 2 sub method ::'+x);
    });

    // killing the first subscriber
    subObj_1.unsubscribe();

    behaviorSubject.next(5);  // my 5 object
    behaviorSubject.next(6);  // my 6 object
  }

  /**
   * Using Replay subject 
   */
  replaySubject(){
    //create an object of Subject
    const replaySubject:ReplaySubject<any> = new ReplaySubject<any>(2);

    // my 1 object
    replaySubject.next(1);

    // my First subscription
    const subObj_1 = replaySubject.subscribe(x =>{
      this.replaySubjectList.push('my 1 sub method ::'+x);
    });

    replaySubject.next(2);  // my 2 object
    replaySubject.next(3);  // my 3 object
    replaySubject.next(4);  // my 4 object

    // my Second subscription
    const subObj_2 = replaySubject.subscribe(x =>{
      this.replaySubjectList.push('my 2 sub method ::'+x);
    });

    // killing the first subscriber
    subObj_1.unsubscribe();

    replaySubject.next(5);  // my 5 object
    replaySubject.next(6);  // my 6 object
  }


}
