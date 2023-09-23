import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../department-create/department-model.model';
import { DepartmentService } from '../department-create/department-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
 deparmentList!:DepartmentModel[];
 

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

}
