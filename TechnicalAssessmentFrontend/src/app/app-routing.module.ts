import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { DepartmentCreateComponent } from './Pages/department-create/department-create.component';

const routes: Routes = [
  {path:'',component:HomePageComponent, title: 'Home Page'},
  {path:'employee',component:EmployeeComponent, title: 'Employee Page'},
  {path:'department',component:DepartmentComponent, title: 'Department Page'},
  {path:'department/create',component:DepartmentCreateComponent, title: 'Department Create Page'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
