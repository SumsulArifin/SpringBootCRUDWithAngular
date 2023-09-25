package com.example.TechnicalAssessmentCtrends.entity.model;
import com.example.TechnicalAssessmentCtrends.entity.enums.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import java.time.LocalDate;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empId;
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

    @ManyToOne
    @JoinColumn(name = "deptId")
    private Department department;


}
