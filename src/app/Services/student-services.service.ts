import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  constructor() { }

  getStudentList() {
    return [
      { id: 1, name: 'Sachin', age: 22 },
      { id: 2, name: 'Rahul', age: 23 },
      { id: 3, name: 'Sourav', age: 24 },
      { id: 4, name: 'Virat', age: 25 },
      { id: 5, name: 'Rohit', age: 26 },
    ];
  }
}
