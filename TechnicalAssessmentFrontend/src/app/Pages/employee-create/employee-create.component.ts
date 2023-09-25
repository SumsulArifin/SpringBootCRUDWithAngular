
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../../service/department-service.service';
import { DepartmentModel } from '../department-create/department-model.model';
import { EmployeeService } from '../../service/employee-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DeptModel } from './dept-model.model';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  @ViewChild("employeeForm") employeeForm: NgForm;

  constructor(private deptService: DepartmentService,
    private empService: EmployeeService,
    private router: Router,
    private http: HttpClient,) { }



  empSave: any;
  emps: any;

  // employee: Employee = {
  //   empId: 0,
  //   code: 0,
  //   name: '',
  //   dob: '',
  //   gender: '',
  //   mobile: 0,
  //   department: {
  //     deptId: 0,
  //     deptName: '',
  //     active: false,
  //   },
  // };

  employeeM = {

    "department": {
      "deptId": ""
    }
  }



  submited: boolean = false;
  dept: DeptModel[] = [];



  ngOnInit(): void {
    this.getAllDept();

  }
  // addNewEmp() {
  //   this.empService.createNewEmployee(this.employee).subscribe((response) => {
  //     // Handle the response from the server (success or error)
  //     console.log(response);
  //   });
  // }
  addNewEmp(){
    this.employeeM.department.deptId = this.employeeForm.value.deptId;

    this.emps = this.employeeForm.value;
    this.empSave = Object.assign(this.emps, this.employeeM)
    console.log(this.empSave)
    this.empService.createNewEmployee(this.empSave).subscribe(
      data => {
              this.submited = true;
              this.employeeForm.reset()
      }
    )
    this.gotoEmployeeList();

  }


  getAllDept() {
    this.deptService.getALlDept().subscribe(
      depts => this.dept = depts
    )
  }

  gotoEmployeeList() {
    this.router.navigate(['employee']);
  }

}
