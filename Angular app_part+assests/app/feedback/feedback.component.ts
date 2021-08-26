import { Component, OnInit } from '@angular/core';
import { HttpclientService,Feedback} from '../httpclient.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  users:Feedback=new Feedback('','','','','');
  message:any;

  constructor(private httpClientService:HttpclientService) { }

  ngOnInit(): void {
    this. users = new Feedback('', '', '', '', '');
  }
  public addfeedback(): void
  {
    this.users.usersid = 'HDFC' + this.users.phone;
    
    this.httpClientService.saveFeedback(this.users)
        .subscribe( data => {
          alert( ' your Feedback added successfully.');
          this. users = new Feedback('', '', '', '', '');

          console.log('employee' + data);
        });


    /* let response=this.service.saveFeedback(this.users);
    response.subscribe(data=>
      {  alert("Feedback added successfully.");
    }); */
  }

}
