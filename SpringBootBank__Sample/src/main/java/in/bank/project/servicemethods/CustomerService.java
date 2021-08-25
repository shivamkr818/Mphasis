package in.bank.project.servicemethods;



	import java.util.List;





	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import in.bank.project.model.Balance;
import in.bank.project.model.Customer;
import in.bank.project.model.Feedback;
import in.bank.project.model.Loan;
import in.bank.project.model.Loanstatus;
import in.bank.project.repository.BankRepositoryCustomer;
import in.bank.project.repository.BankRepositoryLoan;
import in.bank.project.repository.BankRepositoryLoanStatus;
import in.bank.project.repository.BankrepositoryBalance;
import in.bank.project.repository.FeedbackRepository;

@Service
	public class CustomerService {

		@Autowired
		public BankRepositoryCustomer CustRepo;
		@Autowired
		public BankrepositoryBalance BalRepo;
		@Autowired
		public BankRepositoryLoan LoanRepo;
		@Autowired
		public BankRepositoryLoanStatus LoanStatusRepo;
		@Autowired
		public FeedbackRepository FeedbackRepo;
		
		
		public Customer saveCustomer(Customer customer) {
			customer= CustRepo.save(customer);
			return customer;
		}
		
		public List<Customer> getAllCustomers() {
			return CustRepo.findAll();
		}

		public List<Balance> getAllCustomersBalance() {
			return BalRepo.findAll();
		}

		public Balance saveBalance(Balance bal) {
			return BalRepo.save(bal);
		}
		
		public Loan saveLoanrequest(Loan loan) {
			loan=LoanRepo.save(loan);

			return loan;
		}

		public List<Loan> getAllloans() {

			return LoanRepo.findAll();
		}

		public boolean isLoanRequestExist(Integer id) {
			// TODO Auto-generated method stub
			return LoanRepo.existsById(id);
		}

		public void deleteLoanrequest(Loan loan) {

			LoanRepo.delete(loan);
		}

		public void saveLoanStatus(Loanstatus lns) {
			LoanStatusRepo.save(lns);
		}

		public List<Loanstatus> getAllloanstatus() {
			return LoanStatusRepo.findAll();
		}
		
		
		public Feedback saveFeedback(Feedback feedback) {
			feedback=FeedbackRepo.save(feedback);

			return feedback;
		}
		
		  public List<Feedback> getAllFeedbacks() 
		  {
			  return FeedbackRepo.findAll();
			  }
		 

		

		
		
	}

