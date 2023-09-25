import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {DepartmentModel } from '../Pages/department-create/department-model.model';
import { ApiRespons } from '../model/api-respons';

const baseURl = "http://localhost:8080/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {



  constructor(
    private http: HttpClient
  ) { }

  // create New Deptment Department 
  createNewDeptment(dept: DepartmentModel){
    return this.http.post(baseURl+"/addNewDepartment", dept);
  }
  // get ALl Department 
  getALlDept(): Observable<DepartmentModel[]>{
    return this.http.get<DepartmentModel[]>(baseURl+"/getAllDepartment");
  }

  
  // Delete Department by ID
 deleteDepartment(deptId: any): Observable<ApiRespons>{
  return this.http.delete<ApiRespons>(baseURl+"/deleteDepartment/"+deptId);
}


 // change Department Status Department  by ID
 changeDepartmentStatus(deptId: any): Observable<any>{
   return this.http.get(baseURl+'/statusChange/'+deptId)
 }

 // update Department  by ID
 updateDepartment(deptId: any, dept: any): Observable<any> {
  return this.http.put<any>(baseURl+'/getDepartmentById/'+deptId, dept);
}

findDepartmentById(deptId: any): Observable<any>{
  return this.http.get(baseURl+'/getDepartmentById/'+deptId)
}
}