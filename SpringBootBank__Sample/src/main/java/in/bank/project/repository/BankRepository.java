package in.bank.project.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

import in.bank.project.model.Employee;

	public interface BankRepository 
	extends JpaRepository<Employee, Integer>
	{

	}

