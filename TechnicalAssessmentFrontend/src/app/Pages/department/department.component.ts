import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../department-create/department-model.model';
import { DepartmentService } from '../../service/department-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
 deparmentList!:DepartmentModel[];
 
 status = false;
 constructor(private service:DepartmentService,
            private router:Router,
            private http:HttpClient){}
 
 
  ngOnInit(): void {
    this.getAlldepartment();
  }

  getAlldepartment(){
    this.service.getALlDept().subscribe(
      result=> this.deparmentList=result
    )
  }

  updateDepartment(deptId:any,dept:any){
    this.service.updateDepartment(deptId,dept).subscribe(
      () => {
        this.router.navigate(['/department/edit']);
      },
      (error) => {
        console.error('Error updating item:', error);
      }
    );
  }

 
  deleteByID(deptId: any) {
    this.service.deleteDepartment(deptId).subscribe(
      result => {
        this.status = true;

      }
    )
    console.log(this.status)
  }
}
