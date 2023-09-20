package com.example.TechnicalAssessmentCtrends.service;

import com.example.TechnicalAssessmentCtrends.entity.dto.EmployeeDTO;
import com.example.TechnicalAssessmentCtrends.entity.model.Employee;
import com.example.TechnicalAssessmentCtrends.repository.EmployeeRepository;
import com.example.TechnicalAssessmentCtrends.utils.Message;
import com.example.TechnicalAssessmentCtrends.utils.MessageResponse;
import com.example.TechnicalAssessmentCtrends.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    @SuppressWarnings(Message.AUTOWIRED_OK)
    EmployeeRepository employeeRepository;

    @Override
    public MessageResponse saveEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();

        employee.setName(employeeDTO.getName());
        employee.setCode(employeeDTO.getCode());
        employee.setDob(employeeDTO.getDob());
        employee.setGender(employeeDTO.getGender());
        employee.setMobile(employeeDTO.getMobile());
        employee.setDepartment(employeeDTO.getDepartment());
        employeeRepository.save(employee);
        return new MessageResponse(Message.SUCCESS);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findEmployeeById(int empId) {
        return employeeRepository.findById(empId).get();
    }

    @Override
    public Optional<Employee> updateEmployee(int empId, EmployeeDTO employeeDTO) {
        Optional<Employee> result = employeeRepository.findById(empId);

        if (result.isPresent()) {
            Employee employee = result.get();
            employee.setName(employeeDTO.getName());
            employee.setCode(employeeDTO.getCode());
            employee.setDob(employeeDTO.getDob());
            employee.setGender(employeeDTO.getGender());
            employee.setMobile(employeeDTO.getMobile());
            employee.setDepartment(employeeDTO.getDepartment());
            employeeRepository.save(employee);
        } else {
            throw new ResourceNotFoundException("Employee", "empId", empId);
        }

        return result;
    }

    @Override
    public void deleteEmployeeById(int empId) {
        employeeRepository.deleteById(empId);
    }
}
