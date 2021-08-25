package in.bank.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import in.bank.project.model.Loan;



public interface BankRepositoryLoan
extends JpaRepository<Loan, Integer>{

}