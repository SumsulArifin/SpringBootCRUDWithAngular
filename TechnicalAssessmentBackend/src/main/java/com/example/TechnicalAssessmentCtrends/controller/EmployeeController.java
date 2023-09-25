package com.example.TechnicalAssessmentCtrends.controller;
import com.example.TechnicalAssessmentCtrends.entity.dto.EmployeeDTO;
import com.example.TechnicalAssessmentCtrends.entity.model.Employee;
import com.example.TechnicalAssessmentCtrends.service.EmployeeServiceImpl;
import com.example.TechnicalAssessmentCtrends.utils.Message;
import com.example.TechnicalAssessmentCtrends.utils.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
@CrossOrigin(originPatterns = {"*"})
public class EmployeeController {
    @Autowired
    @SuppressWarnings(Message.AUTOWIRED_OK)
    EmployeeServiceImpl employeeService;

    // Create a new Employee

    @PostMapping("/addNewEmployee")
    public ResponseEntity<MessageResponse> saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
        MessageResponse newEmployee = employeeService.saveEmployee(employeeDTO);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    // retrieve all Employee
    @GetMapping("/getAllEmployee")
    @ResponseBody
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> employeeList = employeeService.getAllEmployee();
        return new ResponseEntity<>(employeeList, HttpStatus.OK);
    }

    // Update single Employee information
    @PutMapping("/updateEmployee/{empId}")
    public ResponseEntity<Optional<Employee>> updateEmployee(@PathVariable int empId, @RequestBody  EmployeeDTO employeeDTO) {
        Optional<Employee> employee = employeeService.updateEmployee(empId, employeeDTO);
        return new ResponseEntity<Optional<Employee>>(employee, HttpStatus.OK);
    }


    // Delete Employee by id
    @DeleteMapping("/deleteEmployee/{empId}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable("empId") int empId) {
        employeeService.deleteEmployeeById(empId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // API to retrieve Employee by id
    @GetMapping("/getEmployeeById/{empId}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("empId") int empId) {
        Employee employeeById = employeeService.findEmployeeById(empId);
        return new ResponseEntity<>(employeeById, HttpStatus.OK);
    }

}
