package com.example.TechnicalAssessmentCtrends.service;

import com.example.TechnicalAssessmentCtrends.entity.dto.DepartmentDTO;
import com.example.TechnicalAssessmentCtrends.entity.model.Department;
import com.example.TechnicalAssessmentCtrends.repository.DepartmentRepository;
import com.example.TechnicalAssessmentCtrends.utils.Message;
import com.example.TechnicalAssessmentCtrends.utils.MessageResponse;
import com.example.TechnicalAssessmentCtrends.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    @SuppressWarnings(Message.AUTOWIRED_OK)
    DepartmentRepository departmentRepository;

    @Override
    public MessageResponse saveDepartment(DepartmentDTO departmentDTO) {
        Department department = new Department();

        department.setDeptName(departmentDTO.getDeptName());
        department.setActive(departmentDTO.isActive());

        departmentRepository.save(department);
        return new MessageResponse(Message.SUCCESS);
    }

    @Override
    public List<Department> getAllDepartment() {
        return departmentRepository.findAll();
    }

    @Override
    public Department findDepartmentById(int deptId) {
        return departmentRepository.findById(deptId).get();
    }

    @Override
    public Optional<Department> updateDepartment(int deptId, DepartmentDTO departmentDTO) {
        Optional<Department> result = departmentRepository.findById(deptId);

        if (result.isPresent()) {
            Department department = result.get();
            department.setDeptName(departmentDTO.getDeptName());
            department.setActive(departmentDTO.isActive());

            departmentRepository.save(department);
        } else {
            throw new ResourceNotFoundException("Department", "deptId", deptId);
        }

        return result;
    }

    @Override
    public void deleteDepartmentById(int deptId) {
        departmentRepository.deleteById(deptId);
    }

    @Override
    public Optional<Department> updateDepartmentStatus(int deptId, DepartmentDTO departmentDTO) {
        Optional<Department> result = departmentRepository.findById(deptId);
        if (result.isPresent()) {
            Department department = result.get();
            department.setActive(departmentDTO.isActive());
            departmentRepository.save(department);
        } else {
            throw new ResourceNotFoundException("Department", "deptId", deptId);
        }

        return result;
    }
}
