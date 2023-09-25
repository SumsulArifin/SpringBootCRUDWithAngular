import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department-service.service';
import { EmployeeService } from 'src/app/service/employee-service.service';
import { Department } from '../../model/employee';
import { NgForm } from '@angular/forms';
import { Employee } from '../../model/employee.model';
import { ApiRespons } from '../../model/api-respons';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  @ViewChild("employeeForm") employeeForm: NgForm;
  emp: Employee = new Employee();
  empList: Employee[] = [];
  apiR: ApiRespons = new ApiRespons();
  submited = false;
  status = false;
 
  id: number = 0;


  constructor(private deptService: DepartmentService,
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private http: HttpClient,) { }

    dept: Department[] = [];

    ngOnInit(): void {
      this.getAllDept();

      this.emp.empId = this.route.snapshot.params['empId'];
    console.log(this.id)
    if (this.id > 0) {
      this.empService.findEmployeeById(this.id).subscribe(
        result => {
          this.empList = result
          this.emp = this.empList[0];
          console.log(this.emp)

          this.employeeForm.setValue(this.emp)

        }
      )

    }
  
    }


  updateEmp(){
  }



  getAllDept() {
    this.deptService.getALlDept().subscribe(
      depts => this.dept = depts
    )
  }

}
