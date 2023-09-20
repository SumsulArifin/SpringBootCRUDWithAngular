package com.example.TechnicalAssessmentCtrends.entity.enums;

public enum Gender {
    MALE(1),
    FEMALE(2),
    OTHER(3);
    private int code;
    private Gender(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
