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
    @NonNull
    @Column(unique = true,length = 4)
    private int code;
    @NonNull
    @Column(length = 35)
    private String name;
    private String dob;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private int mobile;
    private Department department;
}
