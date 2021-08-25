package in.bank.project.model;

import javax.persistence.Entity;

import javax.persistence.Id;
import lombok.Data;
@Data
@Entity
public class Loanstatus {

	@Id
	public String customerid;
	public String status;
	public Loanstatus(String customerid, String status) {
		super();
		this.customerid = customerid;
		this.status = status;
	}
	public Loanstatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getCustomerid() {
		return customerid;
	}
	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

}

