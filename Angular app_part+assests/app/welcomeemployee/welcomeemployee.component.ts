import { Component, OnInit } from '@angular/core';
import { HttpclientService, Customer , Balance, Loan} from '../httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-welcomeemployee',
  templateUrl: './welcomeemployee.component.html',
  styleUrls: ['./welcomeemployee.component.css']
})
export class WelcomeemployeeComponent implements OnInit {
  userID: any;
  employee: any;
  customers: any;
  loans: any;
  constructor(private httpClientService: HttpclientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.userID = this.activatedRoute.snapshot.params['userID'];
    this.httpClientService.getOneEmployee(this.userID).subscribe(
      data => {
      this.employee = data;
       }, error => {
      console.log(error);
    });
    this.httpClientService.getCustomers().subscribe(
      data => {
        this.customers = data;
         }, error => {
        console.log(error);
      });


    this.httpClientService.getAllLoans().subscribe(
      data => {
        this.loans = data;
         }, error => {
        console.log(error);
      });
  }

}
