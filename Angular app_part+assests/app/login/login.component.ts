import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeRegisterComponent } from '../employee-register/employee-register.component';
import { Customer } from '../httpclient.service';
import { HttpclientService, Employee } from '../httpclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Usertype: String = '';
public userID: String = 'HDFC';
public password: String = '';
public id!: String;
public pword!: String;
  constructor(private httpClientService: HttpclientService, private router: Router) { }

  ngOnInit(): void {
  }


public Login(){
  if (this.Usertype === 'Customer'){
  /*this.getCustomer();*/
this.httpClientService.getOneCustomer(this.userID).subscribe(
  data => {

  this.id = data.customerid;


  this.pword = data.password;
  if ((this.id === this.userID) && (this.pword && this.password)){
  this.router.navigate(['welcome', this.userID]);

}else{
  alert('Incorrect Login Details');
  this.router.navigate(['addcustomer']);

}
}, error => {
  console.log(error);
});

  }
  if (this.Usertype === 'Employee'){

   /*this.getEmployee(); */
this.httpClientService.getOneEmployee(this.userID).subscribe(
  data => {
    this.id = data.employeeid;
    this.pword = data.password;
    if ((this.id === this.userID) && (this.pword === this.password)){

  this.router.navigate(['welcomeemployee', this.userID]);

}else{
  alert('Incorrect Login Details');
  this.router.navigate(['addemployee']);

}
}, error => {
  console.log(error);
});
  }
  if (this.Usertype === 'Manager'){
   /* this.getEmployee(); */
   this.httpClientService.getOneEmployee(this.userID).subscribe(
    data => {
      this.id = data.employeeid;
      this.pword = data.password;
      if ((this.id === this.userID) && (this.pword === this.password)){
      this.router.navigate(['welcomemanager', this.userID]);

    }else{
      alert('Incorrect Login Details');
      this.router.navigate(['addemployee']);

    }
  }, error => {
    console.log(error);
  });
  }
}
public showCapsWarning = false;

public VerifyPassword(e: { keyCode: number; }){
  if(e.keyCode>=65 && e.keyCode<=90) 
{
      this.showCapsWarning = true;
  } else {
    this.showCapsWarning = false;
  }
}

}
