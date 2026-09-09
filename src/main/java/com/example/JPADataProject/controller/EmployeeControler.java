package com.example.JPADataProject.controller;

 
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.JPADataProject.entity.Employee;
import com.example.JPADataProject.repository.EmployeeRepositry;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeControler {

    final EmployeeRepositry er;

    public EmployeeControler(EmployeeRepositry er) {
        this.er = er;
    }

    @PostMapping("/emp")
    public Employee insertEmployee(@RequestBody Employee emp){
        System.out.println(emp.getEid());
        return  er.save(emp);
    }
    @GetMapping("/find-employee")
    public List<Employee> fetchAllEmployee( Pageable p ){
        return er.findAll(p).getContent();
    }

    @DeleteMapping("/delete-employee/{empid}")
    public void  getMethodName(@PathVariable int empid) {
        er.deleteById(empid);
    }
//hello

@PutMapping("/update-employee/{id}")
public boolean updateEmployee(@RequestBody Employee emp, @PathVariable Integer id) {
    Optional<Employee> o = er.findById(id);
    if (o.isPresent()) {

        Employee e = o.get();

        e.setName(emp.getName());
        e.setSal(emp.getSal());

        er.save(e);

        return true;
    }

    return false;
}
}
