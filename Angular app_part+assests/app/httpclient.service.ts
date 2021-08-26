import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

export class Employee{
  constructor(
    public employeeid: string,
    public name: string,
    public employeetype: string,
    public phone: String,
    public email: string,
    public password: string,
    public department: string
  ) {}
}
export class Customer{
  constructor(
    public customerid: string,
    public name: string,
    public phone: string,
    public email: string,
    public password: string,
    public accounttype: string,
    public pan: string,

  ) {}
}
export class Balance{
  constructor(
    public customerid: string,
    public balance1: number
  ) {}
}
export class Loanstatus{
  constructor(
    public customerid: string,
    public status: string
  ) {}
}
export class Feedback{
  constructor(
    public usersid: string,
    public name: string,
    public phone: string,
    public email: string,
    public message: string
  ) {}
}
export class Loan{
  constructor(
    public customerid: string,
    public phoneno: string,
    public amount: string,
    public time: string,
    public interest: string,
    public status: string

  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient: HttpClient
  ) {
     }

     getEmployees()
  {
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:9040/Bank' + '/' + 'all' + '/' + 'employees');
  }

  public deleteEmployee(employee: any) {
    return this.httpClient.delete<Employee>('http://localhost:9040/Bank' + '/' + employee.employeeid);
  }

  public createEmployee(employee: any) {
    return this.httpClient.post<Employee>('http://localhost:9040/Bank' + '/' + 'addemployee', employee);
  }

  getOneEmployee(employeeid: String): Observable<Employee> {
    return this.httpClient.get<Employee>('http://localhost:9040/Bank' + '/' + 'getemployee' + '/' + employeeid);
  }
  getCustomers(){
    return this.httpClient.get<Customer[]>('http://localhost:9040/Bank' + '/' + 'all' + '/' + 'customers');

  }
public deleteCustomer(customer: any) {
  return this.httpClient.delete<Customer>('http://localhost:9040/Bank' + '/' + customer.customerid);
}

public createCustomer(customer: any) {
  return this.httpClient.post<Customer>('http://localhost:9040/Bank' + '/' + 'addcustomer', customer);
}
getOneCustomer(customerid: String): Observable<Customer> {
  return this.httpClient.get<Customer>('http://localhost:9040/Bank' + '/' + 'getcustomer' + '/' + customerid);
}
getOneCustomerBalance(customerid: String): Observable<Balance> {
  alert(customerid);
  return this.httpClient.get<Balance>('http://localhost:9040/Bank' + '/' + 'getbal' + '/' + customerid);
}

getUpdatedOneCustomerBalance(customerid: String, Balance: number): Observable<Balance> {
  return this.httpClient.get<Balance>('http://localhost:9040/Bank' + '/' + 'getupdatedbalance' + '/' + customerid + '/' + Balance);
}
getUpdatedOneCustomerBalanceAfter(customerid: String, Balance: number): Observable<Balance> {
  return this.httpClient.get<Balance>('http://localhost:9040/Bank' + '/' + 'getupdatedbalance1' + '/' + customerid + '/' + Balance);
}
public saveFeedback(feedback: any) {
  return this.httpClient.post<Feedback>('http://localhost:9040/Bank' + '/' + 'addfeedback', feedback);
}


getAllFeedbacks(){
  return this.httpClient.get<Feedback[]>('http://localhost:9040/Bank' + '/' + 'all' + '/' + 'feedbacks');

}


public createLoanRequest(loan: any) {
  return this.httpClient.post<Loan>('http://localhost:9040/Bank' + '/' + 'addloanrequest', loan);
}

getAllLoans()
{
  return this.httpClient.get<Loan[]>('http://localhost:9040/Bank' + '/' + 'all' + '/' + 'loans');
}
// tslint:disable-next-line:ban-types
public cancelloanrequest(id: String) {
  return this.httpClient.delete('http://localhost:9040/Bank' + '/' + 'cancelloanrequest' + '/' + id);
}

UpdateLoanStatus(customerid: String, loan: Loan){
  return this.httpClient.put('http://localhost:9040/Bank' + '/' + 'updatestatus' + '/' + customerid, loan);

}


// tslint:disable-next-line:ban-types
getOneLoanStatus(customerid: String): Observable<Loanstatus> {
  return this.httpClient.get<Loanstatus>('http://localhost:9040/Bank' + '/' + 'getloanstatus' + '/' + customerid);
}



}
