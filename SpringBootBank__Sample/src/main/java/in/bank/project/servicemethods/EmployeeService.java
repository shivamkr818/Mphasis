package in.bank.project.servicemethods;
	import java.util.List;


	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import in.bank.project.model.Employee;
import in.bank.project.model.Feedback;
import in.bank.project.repository.BankRepository;
import in.bank.project.repository.FeedbackRepository;

	@Service
	public class EmployeeService {
	@Autowired
		public BankRepository EmpRepo;
	
	
	
	
		public List<Employee> getAllEmployees() {

			return EmpRepo.findAll();
		}
		public Employee saveEmployee(Employee employee) {
	       employee=EmpRepo.save(employee);
			return employee;
		}
		/*
		 * public List<Employee> getAllCustomers() {
		 * 
		 * return EmpRepo.findAll(); }
		 */
		
		
		
		

}
