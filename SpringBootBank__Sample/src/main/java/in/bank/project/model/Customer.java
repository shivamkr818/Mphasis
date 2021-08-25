package in.bank.project.model;



	import javax.persistence.Entity;
	import javax.persistence.Id;

	import lombok.Data;
	@Data
	@Entity
	public class Customer {
		public Customer() {
			super();
		}
		@Id
		public String customerid;
		public String name;
		public String phone;
		public String email;
		public String password;
		public String pan;
		public String accounttype;
		public Customer(String customerid, String name, String phone, String email, String password, String pan,
				String accounttype) {
			super();
			this.customerid = customerid;
			this.name = name;
			this.phone = phone;
			this.email = email;
			this.password = password;
			this.pan = pan;
			this.accounttype = accounttype;
		}
		public String getCustomerid() {
			return customerid;
		}
		public void setCustomerid(String customerid) {
			this.customerid = customerid;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getPan() {
			return pan;
		}
		public void setPan(String pan) {
			this.pan = pan;
		}
		public String getAccounttype() {
			return accounttype;
		}
		public void setAccounttype(String accounttype) {
			this.accounttype = accounttype;
		}


}
