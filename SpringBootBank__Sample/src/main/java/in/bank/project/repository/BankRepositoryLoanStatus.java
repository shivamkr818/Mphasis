package in.bank.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import in.bank.project.model.Loanstatus;


public interface BankRepositoryLoanStatus
extends JpaRepository<Loanstatus, Integer>{

}
