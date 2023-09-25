import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../model/department.model';
import { DepartmentService } from 'src/app/service/department-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiRespons } from '../model/api-respons';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
  @ViewChild("departmentFrom") departmentFrom: NgForm;
  department: Department = new Department();
  departmentList: Department[] = [];
  dept: Department;
  apiR: ApiRespons = new ApiRespons();
  submited = false;
  status = false;
 
  id: number = 0;


  constructor(
    private service: DepartmentService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }



  ngOnInit(): void {
    this.department.deptId = this.route.snapshot.params['deptId'];
    console.log(this.id)
    if (this.id > 0) {
      this.service.findDepartmentById(this.id).subscribe(
        result => {
          this.departmentList = result
          this.dept = this.departmentList[0];
          console.log(this.dept)

          this.departmentFrom.setValue(this.department)

        }
      )

    }
  }



  updateDepartment(): void {
    this.dept = this.departmentFrom.value;
    this.service.createNewDeptment(this.dept).subscribe(
      result => {
        this.submited = true
        this.departmentFrom.reset();
      }
    )


  }


}
