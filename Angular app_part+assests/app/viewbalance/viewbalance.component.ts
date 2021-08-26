import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent implements OnInit {

  userID: any;
  customer: any;
  balance: any;
    constructor(private httpClientService: HttpclientService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.userID = this.activatedRoute.snapshot.params.userID;
      this.httpClientService.getOneCustomer(this.userID).subscribe(
        data => {
        this.customer = data;
         }, error => {
        console.log(error);
      });
    }
    // tslint:disable-next-line:typedef
    getbalance(){
      alert(this.userID);
      this.httpClientService.getOneCustomerBalance(this.userID).subscribe(
        data => {

          this.balance = data;

           }, error => {
          console.log(error);
        });
      }
    }
