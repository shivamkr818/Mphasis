package in.bank.project.model;


	import javax.persistence.Entity;
	import javax.persistence.Id;
	import lombok.Data;
	@Data
	@Entity
	public class Balance {
		@Id
		public String customerid;
		public int balance1;
		public String getCustomerid() {
			return customerid;
		}
		public void setCustomerid(String customerid) {
			this.customerid = customerid;
		}
		
		public int getBalance() {
			return balance1;
		}
		public void setBalance(int balance) {
			this.balance1 = balance;
		}
		public Balance() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Balance(String customerid, int balance) {
			super();
			this.customerid = customerid;
			this.balance1 = balance;
		}
		
	}


