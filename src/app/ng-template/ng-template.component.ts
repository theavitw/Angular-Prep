import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../Services/student-services.service';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
})
export class NgTemplateComponent implements OnInit {
  public myVar = 50 < 10;
  public studentList: any = [];
  constructor(private stu: StudentServicesService) {}

  ngOnInit(): void {
    this.studentList = this.stu.getStudentList();
    console.log(this.studentList);
  }
}
