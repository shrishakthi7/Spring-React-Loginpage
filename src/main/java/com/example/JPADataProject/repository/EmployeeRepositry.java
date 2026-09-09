package com.example.JPADataProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.JPADataProject.entity.Employee;

@Repository
public interface EmployeeRepositry extends JpaRepository<Employee, Integer>{
    
}
