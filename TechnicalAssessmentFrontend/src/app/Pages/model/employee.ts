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
