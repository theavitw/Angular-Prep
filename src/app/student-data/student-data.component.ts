import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../Services/student-services.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
  // providers: [StudentServicesService]
})
export class StudentDataComponent implements OnInit {
  studentList: any = [];
  constructor(private std: StudentServicesService) {
    this.studentList = std.getStudentList();
  }

  ngOnInit(): void {
  }

}
