

// export class Employee {
//     empId: number;
//     code: number;
//     em_name: String;
//     name: String;
//     dob: String;
//     gender: String;
//     mobile: number;

 
// }

export interface Employee {
    empId: number;
    code: number;
    name: string;
    dob: string;
    gender: string;
    mobile: number;
    department: Department;
  }
  
  export interface Department {
    deptId: number;
    deptName: string;
    active: boolean;
  }
