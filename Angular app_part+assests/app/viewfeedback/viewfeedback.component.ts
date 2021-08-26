import { Component, OnInit } from '@angular/core';
import { HttpclientService, Customer , Feedback, Loan} from '../httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  userID: any;
  employee: any;
  feedbacks: any ;



  constructor(private httpClientService: HttpclientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.feedbacks=this.httpClientService.getAllFeedbacks();
    this.userID = this.activatedRoute.snapshot.params.userID;
    this.httpClientService.getOneEmployee(this.userID).subscribe(
      data => {
      this.employee = data;
       }, error => {
      console.log(error);
    });

    this.httpClientService.getAllFeedbacks().subscribe(
      data => {
        this.feedbacks = data;
         }, error => {
        console.log(error);
      });


    }

    

  

}
