package in.bank.project.controller;


	import java.util.List;


	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

import in.bank.project.model.Balance;
import in.bank.project.model.Customer;
import in.bank.project.model.Employee;
import in.bank.project.model.Feedback;
import in.bank.project.model.Loan;
import in.bank.project.model.Loanstatus;
import in.bank.project.servicemethods.CustomerService;
import in.bank.project.servicemethods.EmployeeService;

	


@RestController
@RequestMapping("/Bank")
@CrossOrigin(origins = "http://localhost:4200")
public class BankController {
    
	@Autowired
	private EmployeeService MService;
	@Autowired
	private CustomerService CService;

	
	List<Customer>  listCust;
	List<Employee>  listEmp ;
	List<Balance>   listBal;
	List<Loan>      listLoan;
	List<Loanstatus> liststatus;
	List<Feedback>      listfeed;

	@GetMapping("/all/employees")
	public ResponseEntity<?> getAllEmployees() {
		ResponseEntity<?> response = null ;
		try {

			List<Employee> list = MService.getAllEmployees();
			if(list!=null && !list.isEmpty()) {
				list.sort((s1,s2)->s1.getName().compareTo(s2.getName()));
				
				response = new ResponseEntity<List<Employee>>(list, HttpStatus.OK);
			} else {
			response = new ResponseEntity<String>(
						"No Employee Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {

			response =  new ResponseEntity<String>(
					"Unable to Fetch employees", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		return response;
	}
	@GetMapping("/all/customers")
	public ResponseEntity<?> getAllCustomers() {
		ResponseEntity<?> response = null ;
		try {

			List<Customer> list = CService.getAllCustomers();
			if(list!=null && !list.isEmpty()) {
				list.sort((s1,s2)->s1.getName().compareTo(s2.getName()));
				
				response = new ResponseEntity<List<Customer>>(list, HttpStatus.OK);
			} else {
			response = new ResponseEntity<String>(
						"No Customer Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {

			response =  new ResponseEntity<String>(
					"Unable to Fetch customers", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		return response;
	}

	@GetMapping("/all/loans")
	public ResponseEntity<?> getAllLoans() {
		ResponseEntity<?> response = null ;
		try {

			listLoan = CService.getAllloans();
			if(listLoan!=null && !listLoan.isEmpty()) {
				response = new ResponseEntity<List<Loan>>(listLoan, HttpStatus.OK);
			} else {
			response = new ResponseEntity<String>(
						"No Employee Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {

			response =  new ResponseEntity<String>(
					"Unable to Fetch Loans", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		return response;
	}
	
	
	
	
	@GetMapping("/all/feedbacks")
	public ResponseEntity<?> getAllFeedbacks() {
		ResponseEntity<?> response = null ;
		try {

			List<Feedback> list = (List<Feedback>)CService.getAllFeedbacks();
			if(list!=null && !list.isEmpty()) {
				list.sort((s1,s2)->s1.getName().compareTo(s2.getName()));
				
				response = new ResponseEntity<List<Feedback>>(list, HttpStatus.OK);
			} else {
			response = new ResponseEntity<String>(
						"No Feedback Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {

			response =  new ResponseEntity<String>(
					"Unable to Fetch Feedback", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		return response;
	}
	
	
	
	
	
	
	


 @PostMapping("/addemployee")
public Employee saveEmployee(
		@RequestBody Employee employee)
{   Employee emp;
	try {
		
		 emp = MService.saveEmployee(employee);
       
	} catch (Exception e) {
		 emp =null;
		e.printStackTrace();
	}
	return emp;
}
 @PostMapping("/addcustomer")
public Customer saveCustomer(
		@RequestBody Customer customer)
{   Customer cust;
	try {
		 cust = CService.saveCustomer(customer);
       Balance bal=new Balance(customer.customerid,500);
       bal=CService.saveBalance(bal);
	} catch (Exception e) {
		 cust =null;
		e.printStackTrace();
	}
	return cust;
}
 
 
@PostMapping("/addfeedback")
public Feedback saveFeedback(
		@RequestBody Feedback feedback )
{   Feedback feed;
try {
	
	 feed = CService.saveFeedback(feedback);
   
} catch (Exception e) {
	 feed =null;
	e.printStackTrace();
}
return feed;
}

 

 @PostMapping("/addloanrequest")
 public Loan saveLoanRequest(
 		@RequestBody Loan loan)
 {   Loan ln;
 	try {
 		 ln = CService.saveLoanrequest(loan);
 		 Loanstatus lns=new Loanstatus(loan.customerid,loan.status);
 		 CService.saveLoanStatus(lns);
        
 	} catch (Exception e) {
 		 ln =null;
 		e.printStackTrace();
 	}
 	return ln;
 }


 @GetMapping("/getcustomer/{id}")
	public Customer getOneCustomer(
			@PathVariable String id
			) 
	{
		Customer cust = null;
		 listCust =CService.getAllCustomers();
		try {
			for(Customer customer:listCust) {
				if(customer.getCustomerid().equalsIgnoreCase(id)) {
					cust=customer;
				}
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return cust;
	}
 
 @GetMapping("/getemployee/{id}")
	public Employee getOneEmployee(
			@PathVariable String id
			) 
	{
		Employee emp = null;
		listEmp =MService.getAllEmployees();
		try {
			for(Employee employee:listEmp) {
				if(employee.getEmployeeid().equalsIgnoreCase(id)) {
					emp=employee;
				}
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return emp;
	}

 @GetMapping("/getbal/{id}")
	public Balance getOneCustomerBalance(
			@PathVariable String id
			) 
	{
		Balance bal = null;
		 listBal =CService.getAllCustomersBalance();
		try {
			for(Balance balance:listBal) {
				if(balance.getCustomerid().equalsIgnoreCase(id)) {
					bal=balance;
					System.out.println(bal.balance1);
				}
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return bal;
	}
 
 @GetMapping("/getloanstatus/{id}")
	public Loanstatus getOneLoanStatus(
			@PathVariable String id
			) 
	{
		Loanstatus lnst = null;
		liststatus =CService.getAllloanstatus();
		try {
			for(Loanstatus lnst1:liststatus) {
				if(lnst1.getCustomerid().equalsIgnoreCase(id)) {
					lnst=lnst1;
				}
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return lnst;
	}
 
 
 
 @GetMapping("/getupdatedbalance/{id}/{id1}")
	public Balance getUpdatedOneCustomerBalance(
			@PathVariable("id") String id,@PathVariable("id1") String id1
			) 
	{   int id2=Integer.parseInt(id1);
		Balance bal = null;
		int balance1;
		 listBal =CService.getAllCustomersBalance();
		try {
			for(Balance balance:listBal) {
				if(balance.getCustomerid().equalsIgnoreCase(id)) {
					balance1=balance.getBalance();
					balance1=(balance1+id2);
					balance.setBalance(balance1);
				    bal=CService.saveBalance(balance);
				}
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return bal;
	}

 @GetMapping("/getupdatedbalance1/{id}/{id1}")
	public Balance getUpdatedOneCustomerBalance1(
			@PathVariable("id") String id,@PathVariable("id1") String id1
			) 
	{   int id2=Integer.parseInt(id1);

		Balance bal = null;
		int balance1;
		 listBal =CService.getAllCustomersBalance();
		try {
			for(Balance balance:listBal) {
				if(balance.getCustomerid().equalsIgnoreCase(id)) {
					balance1=balance.getBalance();
					balance1=(balance1-id2);
					balance.setBalance(balance1);
					bal=CService.saveBalance(balance);
				}
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return bal;
	}
 
 @DeleteMapping("/cancelloanrequest/{id}")
	public ResponseEntity<?> removeLoanRequest(
			@PathVariable String id
			)
	{
        String Status="Loan Rejected";

		ResponseEntity<?> resp = null;
		listLoan =CService.getAllloans();
		liststatus =CService.getAllloanstatus();

		try {
			for(Loan loan:listLoan) {
				if(loan.getCustomerid().equalsIgnoreCase(id)) {
					CService.deleteLoanrequest(loan);
					resp= new ResponseEntity<List<Loan>>(listLoan, HttpStatus.OK);
				}
			}
			for(Loanstatus lnst:liststatus) {
				if(lnst.getCustomerid().equalsIgnoreCase(id)) {
					
					lnst.setStatus(Status);
			 		 CService.saveLoanStatus(lnst);

					System.out.println(lnst.getStatus());
				}}
		} catch (Exception e) {
			resp=null;
			e.printStackTrace();
		}

		return resp;
	}
 
 @PutMapping("/updatestatus/{id}")
	public ResponseEntity<?> updateStatus(
			@PathVariable String id,
			@RequestBody Loan loan
			)
	{

		ResponseEntity<?> resp =null;
		liststatus =CService.getAllloanstatus();
         String Status="Loan approved";
 		listLoan =CService.getAllloans();
		 listCust =CService.getAllCustomers();
		 listBal =CService.getAllCustomersBalance();
              int bal;
		try {
			for(Loanstatus lnst:liststatus) {
				if(lnst.getCustomerid().equalsIgnoreCase(id)) {
					
					lnst.setStatus(Status);
			 		 CService.saveLoanStatus(lnst);

					System.out.println(lnst.getStatus());
				}}
			for(Balance balance:listBal) {
				if(balance.getCustomerid().equalsIgnoreCase(id)) {
					bal=balance.getBalance();
					bal=bal+loan.amount;
					balance.setBalance(bal);
					CService.saveBalance(balance);
				}
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		try {
			for(Loan loan1:listLoan) {
				if(loan1.getCustomerid().equalsIgnoreCase(id)) {
					CService.deleteLoanrequest(loan1);
					resp= new ResponseEntity<List<Loan>>(listLoan, HttpStatus.OK);
				}
			}
		} catch (Exception e) {
			resp=null;
			e.printStackTrace();
		}

		return resp;
	}

 


}//end
