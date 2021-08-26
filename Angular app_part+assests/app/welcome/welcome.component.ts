import { Component, OnInit } from '@angular/core';
import { HttpclientService, Customer , Balance, Loan} from '../httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
userID: any;
customer: Customer = new Customer('', '', '', '', '', '', '');
balance: any;
loanstatus: any;
loan: Loan = new Loan('', '', '', '', '', 'Awaiting managers approval');
depositbalance = 0 ;
withdrawbalance = 0;

  constructor(private httpClientService: HttpclientService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loan=new Loan('', '', '', '', '', 'Awaiting managers approval');
    this.userID = this.activatedRoute.snapshot.params.userID;
    this.httpClientService.getOneCustomer(this.userID).subscribe(
      data => {
      this.customer = data;
       }, error => {
      console.log(error);
    });
    this.httpClientService.getOneLoanStatus(this.userID).subscribe(
      data => {
        this.loanstatus = data;
         }, error => {
        console.log(error);
      });


  }
  getbalance(){
    alert(this.userID);
    this.httpClientService.getOneCustomerBalance(this.userID).subscribe(
      data => {

        this.balance = data;

         }, error => {
        console.log(error);
      });
  }
  deposit(){
    alert(this.depositbalance);
    this.httpClientService.getUpdatedOneCustomerBalance(this.userID, this.depositbalance).subscribe(
      data => {
        this.balance = data;
         }, error => {
        console.log(error);
      });

  }

  

  
  Loan(): void{
    alert(this.loan.interest);
    alert(this.loan.customerid);
    
    this.httpClientService.createLoanRequest(this.loan).subscribe(
      data => {
        this.loan=new Loan('', '', '', '', '', 'Awaiting managers approval');
        alert('Customer Id =' + data.customerid + ' your loan Request has been submitted successfully');},
        error => {
          console.log(error);
      });


  }
  withdraw(){
    alert(this.withdrawbalance);
    this.httpClientService.getUpdatedOneCustomerBalanceAfter(this.userID, this.withdrawbalance).subscribe(
      data => {
        this.balance = data;

         }, error => {
        console.log(error);
      });

  }

}
