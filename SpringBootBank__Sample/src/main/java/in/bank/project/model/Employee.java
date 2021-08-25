package in.bank.project.model;



	import javax.persistence.Entity;
	import javax.persistence.Id;

	import lombok.Data;



	@Data
	@Entity
	public class Employee {
		
	@Id	
	public String employeeid;
	public String name;
	public String phone;
	public String email;
	public String password;
	public String department;
	public String employeetype;

	public String getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(String employeeid) {
		this.employeeid = employeeid;
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
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getEmployeetype() {
		return employeetype;
	}
	public void setEmployeetype(String employeetype) {
		this.employeetype = employeetype;
	}
	public Employee(String employeeid, String name, String phone, String email, String password, String department,
			String employeetype) {
		super();
		this.employeeid = employeeid;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.department = department;
		this.employeetype = employeetype;
	}
	public Employee() {
		super();
	}
	

	
}
