package in.bank.project.model;
import javax.persistence.Column;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
public class Feedback {
	
	@Id
	public String usersid;
	public String name;
	public String phone;
	public String email;
	public String message;
	
	
	public Feedback() {
		
	}


	public Feedback(String usersid, String name, String phone, String email, String message) {
		super();
		this.usersid = usersid;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.message = message;
	}


	public String getUsersid() {
		return usersid;
	}


	public void setUsersid(String usersid) {
		this.usersid = usersid;
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


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	
	
	
}