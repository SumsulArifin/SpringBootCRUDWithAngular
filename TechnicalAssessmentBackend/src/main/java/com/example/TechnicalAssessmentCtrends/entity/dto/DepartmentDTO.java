package com.example.TechnicalAssessmentCtrends.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDTO {
    @NonNull
    private String deptName;
    @NonNull
    private boolean active;
}
