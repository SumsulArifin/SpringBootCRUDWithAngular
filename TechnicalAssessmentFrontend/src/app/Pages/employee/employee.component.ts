import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeList!:Employee[];
  constructor(private empService:EmployeeService ,private router:Router,
    private http:HttpClient){}


  ngOnInit(): void {
    this.getAllemp();
  }

  getAllemp(){
    this.empService.getALlEmployee().subscribe(
      result=> this.employeeList=result
    )
  }

}
