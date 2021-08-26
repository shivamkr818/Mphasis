import { Component, OnInit } from '@angular/core';
import { HttpclientService, Customer , Balance, Loan} from '../httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {


  loan: Loan = new Loan('', '', '', '', '', 'Awaiting managers approval');

  constructor(private httpClientService: HttpclientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loan=new Loan('', '', '', '', '', 'Awaiting managers approval');
  }


  Loan(): void{
    alert(this.loan.interest);
    alert(this.loan.customerid);
    
    this.httpClientService.createLoanRequest(this.loan).subscribe(
      data => {
        
        alert('Customer Id =' + data.customerid + ' your loan Request has been submitted successfully');
        this.loan=new Loan('', '', '', '', '', 'Awaiting managers approval');
        
        console.log('loan' + data);
      });


  }

}
