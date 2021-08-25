package in.bank.project.model;

import javax.persistence.Entity;

import javax.persistence.Id;
import lombok.Data;
@Data
@Entity
public class Loan {
	@Id
	public String customerid;

	public String phoneno;
	public int amount;
	public String time;
	public String interest;
	public String status;
	public String getCustomerid() {
		return customerid;
	}
	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getInterest() {
		return interest;
	}
	public void setInterest(String interest) {
		this.interest = interest;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Loan(String customerid, String phoneno, int amount, String time, String interest, String status) {
		super();
		this.customerid = customerid;
		this.phoneno = phoneno;
		this.amount = amount;
		this.time = time;
		this.interest = interest;
		this.status = status;
	}
	public Loan() {
		
	}
	
	

}

