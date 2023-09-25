import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../../service/department-service.service';
import { Router } from '@angular/router';
import { DepartmentModel } from './department-model.model';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent {
  @ViewChild("departmentFrom")
  departmentFrom!: NgForm;

constructor(private departmentService:DepartmentService,private router:Router){}

errors:any=[];

  deptartmentM!: DepartmentModel;
submited:boolean=false;
ngOnInit():void{

}

addNewDepartment(){
  this.deptartmentM=this.departmentFrom.value;
  console.log(this.deptartmentM)
  this.departmentService.createNewDeptment(this.deptartmentM).subscribe(
    result =>{
      this.submited=true;
      this.departmentFrom.reset();
      this.gotodepartmentList();
    }
  ),
  (err:any)=>
  {
    this.errors=err.error.errors;
  }
  
}

gotodepartmentList() {
  this.router.navigate(['department']);
}




}
