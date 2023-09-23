import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {DepartmentModel } from './department-model.model';

const baseURl = "http://localhost:8080/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {



  constructor(
    private http: HttpClient
  ) { }


  createNewDeptment(dept: DepartmentModel){
    return this.http.post(baseURl+"/addNewDepartment", dept);
  }

  getALlDept(): Observable<DepartmentModel[]>{
    return this.http.get<DepartmentModel[]>(baseURl+"/getAllDepartment");
  }
}