package com.example.TechnicalAssessmentCtrends.repository;
import com.example.TechnicalAssessmentCtrends.entity.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Integer> {
}
