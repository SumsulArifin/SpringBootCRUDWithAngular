import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiRespons } from '../Pages/model/api-respons';
import { Employee } from '../Pages/model/employee';



const baseURl = "http://localhost:8080/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(
    private http: HttpClient
  ) { }
  // Create new Employee 

  createNewEmployee(emp: Employee) {
    return this.http.post(baseURl + "/addNewEmployee", emp);
  }

  // Get All Employee 
  getALlEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseURl + "/getAllEmployee");
  }

  // Delete Employee by ID
  deleteEmployee(empId: any): Observable<ApiRespons> {
    return this.http.delete<ApiRespons>(baseURl + "/deleteEmployee/" + empId);
  }


  // update Employee  by ID
  updateEmployee(empId: any, emp: any): Observable<any> {
    return this.http.put<any>(baseURl + '/getEmployeeById/' + empId, emp);
  }
  // find Employee by ID
  findEmployeeById(empId: any): Observable<any> {
    return this.http.get(baseURl + '/getEmployeeById/' + empId)
  }
}