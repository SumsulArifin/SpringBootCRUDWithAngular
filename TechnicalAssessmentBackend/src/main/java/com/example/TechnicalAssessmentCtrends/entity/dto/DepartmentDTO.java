package com.example.TechnicalAssessmentCtrends.entity.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDTO {
    @NonNull
    @Column(length = 35)
    private String deptName;

    private boolean active;
}
