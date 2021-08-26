import { Component, OnInit } from '@angular/core';
import { HttpclientService, Customer , Balance, Loan} from '../httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-welcomemanager',
  templateUrl: './welcomemanager.component.html',
  styleUrls: ['./welcomemanager.component.css']
})
export class WelcomemanagerComponent implements OnInit {
  userID: any;
loanrequests: Loan[] | undefined;
  employee: any;
  loanstatus: any;
  constructor(private httpClientService: HttpclientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this.activatedRoute.snapshot.params.userID;
    this.httpClientService.getOneEmployee(this.userID).subscribe(
      data => {
      this.employee = data;
       }, error => {
      console.log(error);
    });

    this.getAllLoans();

  }
  // tslint:disable-next-line:typedef
  getAllLoans() {
    return this.httpClientService.getAllLoans().subscribe(
      data => {
        this.loanrequests = data;
      }, error => {
        console.log(error);
      }
    );
  }
  cancelloanrequest(id: String){
    if (confirm('Do you want to delete?')) {
      this.httpClientService.cancelloanrequest(id).subscribe(data => {

      }, error => {
        console.log(error);
      });
    }
    this.httpClientService.getAllLoans().subscribe(
      data => {
        alert('inside');

        this.loanrequests = data;
      }, error => {
        console.log(error);
      }
    );

  }
  approveloanrequest(id: string, loan: Loan){
this.httpClientService.UpdateLoanStatus(id, loan).subscribe(
  data => {
    alert('Loan Approved');
     }, error => {
    console.log(error);
  });


  }


}
