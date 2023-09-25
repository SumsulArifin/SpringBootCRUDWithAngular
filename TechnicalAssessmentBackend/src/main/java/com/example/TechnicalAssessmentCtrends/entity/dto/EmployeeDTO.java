package com.example.TechnicalAssessmentCtrends.entity.dto;

import com.example.TechnicalAssessmentCtrends.entity.enums.Gender;
import com.example.TechnicalAssessmentCtrends.entity.model.Department;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
    @Column(nullable = false, length = 4,unique = true)
    private int code;
    @Column(nullable = false, length = 35)
    private String name;
    private String dob;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private int mobile;
    private Department department;
}
