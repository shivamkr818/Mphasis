package in.bank.project.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

import in.bank.project.model.Customer;


	public interface BankRepositoryCustomer
	extends JpaRepository<Customer, Integer>

	{

	}

