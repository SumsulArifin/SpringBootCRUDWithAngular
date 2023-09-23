package com.example.TechnicalAssessmentCtrends.controller;
import com.example.TechnicalAssessmentCtrends.entity.dto.DepartmentDTO;
import com.example.TechnicalAssessmentCtrends.entity.model.Department;
import com.example.TechnicalAssessmentCtrends.service.DepartmentServiceImpl;
import com.example.TechnicalAssessmentCtrends.utils.Message;
import com.example.TechnicalAssessmentCtrends.utils.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/department")
@CrossOrigin(originPatterns = {"*"})
public class DepartmentController {

    @Autowired
    @SuppressWarnings(Message.AUTOWIRED_OK)
    DepartmentServiceImpl departmentService;

    // Create a new Department

    @PostMapping("/addNewDepartment")
    public ResponseEntity<MessageResponse> saveDepartment(@RequestBody DepartmentDTO departmentDTO) {
        MessageResponse newDepartment = departmentService.saveDepartment(departmentDTO);
        return new ResponseEntity<>(newDepartment, HttpStatus.CREATED);
    }

    // retrieve all Department
    @GetMapping("/getAllDepartment")
    @ResponseBody
    public ResponseEntity<List<Department>> getAllDepartment() {
        List<Department> departments = departmentService.getAllDepartment();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

    // Update single Department information
    @PutMapping("/updateDepartment/{deptId}")
    public ResponseEntity<Optional<Department>> updateDepartment(@PathVariable int deptId, @RequestBody  DepartmentDTO departmentDTO) {
        Optional<Department> department = departmentService.updateDepartment(deptId, departmentDTO);
        return new ResponseEntity<Optional<Department>>(department, HttpStatus.OK);
    }

    // Department Status Change API
    @PutMapping("/statusChange/{divisionId}")
    public ResponseEntity<Optional<Department>> changeDepartmentStatus(@PathVariable int deptId, @RequestBody  DepartmentDTO departmentDTO) {
        Optional<Department> divisionStatus = departmentService.updateDepartmentStatus(deptId, departmentDTO);
        return new ResponseEntity<Optional<Department>>(divisionStatus, HttpStatus.OK);
    }

    // Delete Department by id
    @DeleteMapping("/deleteDepartment/{deptId}")
    public ResponseEntity<?> deleteDepartmentById(@PathVariable("deptId") int deptId) {
        departmentService.deleteDepartmentById(deptId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // API to retrieve Department by id
    @GetMapping("/getDepartmentById/{deptId}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable("deptId") int deptId) {
        Department divisionById = departmentService.findDepartmentById(deptId);
        return new ResponseEntity<>(divisionById, HttpStatus.OK);
    }


}
