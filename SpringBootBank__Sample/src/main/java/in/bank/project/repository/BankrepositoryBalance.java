package in.bank.project.repository;

	import org.springframework.data.jpa.repository.JpaRepository;


import in.bank.project.model.Balance;




	public interface BankrepositoryBalance 
	extends JpaRepository<Balance, Integer>
	{
		

	}

