import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { DepartmentCreateComponent } from './Pages/department-create/department-create.component';
import { EmployeeCreateComponent } from './Pages/employee-create/employee-create.component';
import { DepartmentEditComponent } from './Pages/department-edit/department-edit.component';

const routes: Routes = [
  {path:'',component:HomePageComponent, title: 'Home Page'},
  {path:'employee',component:EmployeeComponent, title: 'Employee Page'},
  {path:'department',component:DepartmentComponent, title: 'Department Page'},
  {path:'department/create',component:DepartmentCreateComponent, title: 'Department Create Page'},
  {path:'department/edit',component:DepartmentEditComponent, title: 'Department Create Page'},
  {path:'employee/create',component:EmployeeCreateComponent, title: 'Employee Create Page'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
