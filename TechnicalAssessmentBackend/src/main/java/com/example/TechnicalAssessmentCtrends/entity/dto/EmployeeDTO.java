package com.example.TechnicalAssessmentCtrends.entity.dto;

import com.example.TechnicalAssessmentCtrends.entity.enums.Gender;
import com.example.TechnicalAssessmentCtrends.entity.model.Department;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
    private int code;
    private String name;
    private String dob;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private int mobile;
    private Department department;
}
