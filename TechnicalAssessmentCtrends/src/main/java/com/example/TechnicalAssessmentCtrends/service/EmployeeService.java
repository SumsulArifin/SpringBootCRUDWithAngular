package com.example.TechnicalAssessmentCtrends.service;
import com.example.TechnicalAssessmentCtrends.entity.dto.DepartmentDTO;
import com.example.TechnicalAssessmentCtrends.entity.dto.EmployeeDTO;
import com.example.TechnicalAssessmentCtrends.entity.model.Employee;
import com.example.TechnicalAssessmentCtrends.utils.MessageResponse;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
@Component
public interface EmployeeService {
    public MessageResponse saveEmployee(EmployeeDTO employeeDTO);
    public List<Employee> getAllEmployee();
    public Employee findEmployeeById(int empId);
    public Optional<Employee> updateEmployee(int empId, EmployeeDTO employeeDTO);
    public void deleteEmployeeById(int empId);

}
