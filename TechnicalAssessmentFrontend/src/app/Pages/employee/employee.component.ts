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
  status = false;
  employeeList!: Employee[];
  constructor(private empService: EmployeeService, private router: Router,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.getAllemp();
  }

  getAllemp() {
    this.empService.getALlEmployee().subscribe(
      result => this.employeeList = result
    )
  }


  deleteByID(empId: any) {
    this.empService.deleteEmployee(empId).subscribe(
      result => {
        this.status = true;

      }
    )
    console.log(this.status)
  }

  updateEmployee(empId:any){
    return this.router.navigate(['employeeEdit', empId]);
    console.log(empId);
    
}

}
